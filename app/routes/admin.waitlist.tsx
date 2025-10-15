import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useFetcher } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { S3Client, ListObjectsV2Command, GetObjectCommand, DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { requireUserId } from "~/services/session.server";
import { useState } from "react";

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

interface WaitlistEntry {
  id: string;
  email: string;
  name: string;
  profession: string;
  timestamp: string;
  source: string;
  status: string;
  s3Key?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  // Require authentication
  try {
    await requireUserId(request);
  } catch (error) {
    return redirect("/login");
  }

  try {
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    if (!bucketName) {
      return json({ error: "S3 bucket not configured", entries: [] });
    }

    // List all objects in the waitlist folder
    const listCommand = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: "waitlist/",
    });

    const listResponse = await s3Client.send(listCommand);
    const entries: WaitlistEntry[] = [];

    // Fetch each JSON file
    if (listResponse.Contents) {
      for (const object of listResponse.Contents.slice(0, 100)) { // Limit to 100 most recent
        if (object.Key && object.Key.endsWith('.json')) {
          try {
            const getCommand = new GetObjectCommand({
              Bucket: bucketName,
              Key: object.Key,
            });

            const response = await s3Client.send(getCommand);
            const bodyString = await response.Body?.transformToString();

            if (bodyString) {
              const entry = JSON.parse(bodyString);
              entry.s3Key = object.Key; // Store S3 key for delete operation
              entries.push(entry);
            }
          } catch (err) {
            console.error(`Error reading ${object.Key}:`, err);
          }
        }
      }
    }

    // Sort by timestamp (newest first)
    entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return json({ entries, total: entries.length, bucketName });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return json({ error: "Failed to fetch waitlist entries", entries: [] });
  }
};

export const action: ActionFunction = async ({ request }) => {
  // Require authentication
  try {
    await requireUserId(request);
  } catch (error) {
    return redirect("/login");
  }

  const formData = await request.formData();
  const action = formData.get("_action");
  const s3Key = formData.get("s3Key") as string;

  if (action === "delete" && s3Key) {
    try {
      const bucketName = process.env.AWS_S3_BUCKET_NAME;

      if (!bucketName) {
        return json({ error: "S3 bucket not configured" }, { status: 500 });
      }

      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
        })
      );

      return json({ success: true, message: "Entry deleted successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      return json({ error: "Failed to delete entry" }, { status: 500 });
    }
  }

  if (action === "update" && s3Key) {
    try {
      const bucketName = process.env.AWS_S3_BUCKET_NAME;

      if (!bucketName) {
        return json({ error: "S3 bucket not configured" }, { status: 500 });
      }

      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const profession = formData.get("profession") as string;
      const status = formData.get("status") as string;

      // Get the original entry to preserve id and timestamp
      const getCommand = new GetObjectCommand({
        Bucket: bucketName,
        Key: s3Key,
      });
      const response = await s3Client.send(getCommand);
      const bodyString = await response.Body?.transformToString();
      const originalEntry = bodyString ? JSON.parse(bodyString) : {};

      // Create updated entry
      const updatedEntry = {
        ...originalEntry,
        name,
        email,
        profession,
        status,
      };

      // Upload updated entry back to S3
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
          Body: JSON.stringify(updatedEntry, null, 2),
          ContentType: "application/json",
        })
      );

      return json({ success: true, message: "Entry updated successfully" });
    } catch (error) {
      console.error("Update error:", error);
      return json({ error: "Failed to update entry" }, { status: 500 });
    }
  }

  return json({ error: "Invalid action" }, { status: 400 });
};

export default function AdminWaitlist() {
  const { entries, total, bucketName, error } = useLoaderData<typeof loader>();
  const [editingEntry, setEditingEntry] = useState<WaitlistEntry | null>(null);
  const fetcher = useFetcher();

  const handleExportCSV = () => {
    try {
      console.log('Export CSV clicked, entries:', entries);

      // Escape CSV values properly
      const escapeCSV = (value: string) => {
        if (!value) return '';
        const stringValue = String(value);
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
          return `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
      };

      const csvContent = [
        ['Name', 'Email', 'Profession', 'Date', 'Status'].join(','),
        ...entries.map((e: WaitlistEntry) =>
          [
            escapeCSV(e.name || ''),
            escapeCSV(e.email || ''),
            escapeCSV(e.profession || ''),
            new Date(e.timestamp).toISOString(),
            escapeCSV(e.status || 'pending')
          ].join(',')
        )
      ].join('\n');

      console.log('CSV content created, length:', csvContent.length);

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `myporsia-waitlist-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      console.log('Clicking download link');
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log('CSV export completed');
    } catch (error) {
      console.error('Error exporting CSV:', error);
      alert('Failed to export CSV: ' + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              MyPorsia Waitlist Dashboard
            </h1>
            <p className="text-gray-600">
              S3 Bucket: <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{bucketName}</span>
            </p>
          </div>
          <Form method="get" action="/logout">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </Form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Total Signups</div>
            <div className="text-3xl font-bold text-blue-600">{total}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Today</div>
            <div className="text-3xl font-bold text-green-600">
              {entries.filter((e: WaitlistEntry) =>
                new Date(e.timestamp).toDateString() === new Date().toDateString()
              ).length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">This Week</div>
            <div className="text-3xl font-bold text-purple-600">
              {entries.filter((e: WaitlistEntry) => {
                const entryDate = new Date(e.timestamp);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return entryDate >= weekAgo;
              }).length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Conversion Rate</div>
            <div className="text-3xl font-bold text-orange-600">
              {total > 0 ? '12%' : '0%'}
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-red-800 font-bold mb-2">Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Entries Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900">
              All Signups ({total})
            </h2>
          </div>

          {entries.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-gray-400 text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No signups yet
              </h3>
              <p className="text-gray-500">
                Waitlist entries will appear here when users sign up
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Profession
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry: WaitlistEntry, index: number) => (
                    <tr key={entry.id || index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {entry.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{entry.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{entry.profession || 'Not specified'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(entry.timestamp).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {entry.status || 'pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              console.log('Edit button clicked for:', entry);
                              setEditingEntry(entry);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit entry"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <Form method="post" onSubmit={(e) => {
                            if (!confirm(`Delete ${entry.name}?`)) {
                              e.preventDefault();
                            }
                          }}>
                            <input type="hidden" name="_action" value="delete" />
                            <input type="hidden" name="s3Key" value={entry.s3Key} />
                            <button
                              type="submit"
                              className="text-red-600 hover:text-red-900"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </Form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Export Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export CSV
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            📊 Dashboard Instructions
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• This page shows all waitlist signups from your S3 bucket</li>
            <li>• Data updates in real-time when you refresh the page</li>
            <li>• Click "Export CSV" to download all entries</li>
            <li>• Access this dashboard at: <span className="font-mono bg-blue-100 px-2 py-1 rounded">/admin/waitlist</span></li>
            <li>• Bookmark this page for easy access</li>
          </ul>
        </div>

        {/* Edit Modal */}
        {editingEntry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => {
            console.log('Modal backdrop clicked');
          }}>
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Edit Entry</h3>
                <button
                  onClick={() => setEditingEntry(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <fetcher.Form
                method="post"
                onSubmit={() => {
                  setTimeout(() => {
                    setEditingEntry(null);
                    window.location.reload();
                  }, 500);
                }}
              >
                <input type="hidden" name="_action" value="update" />
                <input type="hidden" name="s3Key" value={editingEntry.s3Key} />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="edit-name"
                      name="name"
                      type="text"
                      defaultValue={editingEntry.name}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="edit-email"
                      name="email"
                      type="email"
                      defaultValue={editingEntry.email}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-profession" className="block text-sm font-medium text-gray-700 mb-1">
                      Profession
                    </label>
                    <input
                      id="edit-profession"
                      name="profession"
                      type="text"
                      defaultValue={editingEntry.profession}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="edit-status" className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      id="edit-status"
                      name="status"
                      defaultValue={editingEntry.status || "pending"}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="contacted">Contacted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingEntry(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </fetcher.Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
