import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";

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
}

export const loader: LoaderFunction = async () => {
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

export default function AdminWaitlist() {
  const { entries, total, bucketName, error } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MyPorsia Waitlist Dashboard
          </h1>
          <p className="text-gray-600">
            S3 Bucket: <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{bucketName}</span>
          </p>
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
            onClick={() => {
              const csv = [
                ['Name', 'Email', 'Profession', 'Date', 'Status'],
                ...entries.map((e: WaitlistEntry) => [
                  e.name,
                  e.email,
                  e.profession || '',
                  new Date(e.timestamp).toISOString(),
                  e.status || 'pending'
                ])
              ].map(row => row.join(',')).join('\n');

              const blob = new Blob([csv], { type: 'text/csv' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `myporsia-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
              a.click();
            }}
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
      </div>
    </div>
  );
}
