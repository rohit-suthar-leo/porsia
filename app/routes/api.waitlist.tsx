import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize AWS clients
const s3Client = new S3Client({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Handle both JSON and FormData
    const contentType = request.headers.get("content-type");
    let email, name, profession, timestamp;

    if (contentType?.includes("application/json")) {
      const body = await request.json();
      ({ email, name, profession, timestamp } = body);
    } else {
      // FormData from Remix form
      const formData = await request.formData();
      email = formData.get("email") as string;
      name = formData.get("name") as string;
      profession = formData.get("profession") as string;
      timestamp = formData.get("timestamp") as string;
    }

    // Validate input
    if (!email || !name) {
      return json({ error: "Email and name are required" }, { status: 400 });
    }

    // Create unique ID for this submission
    const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Prepare data
    const waitlistData = {
      id: submissionId,
      email,
      name,
      profession: profession || "Not specified",
      timestamp: timestamp || new Date().toISOString(),
      source: "website_waitlist",
      status: "pending",
    };

    // 1. Store in S3
    const bucketName = process.env.AWS_S3_BUCKET_NAME || "myporsia-waitlist";
    const s3Key = `waitlist/${new Date().toISOString().split('T')[0]}/${submissionId}.json`;

    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
          Body: JSON.stringify(waitlistData, null, 2),
          ContentType: "application/json",
          Metadata: {
            email: email,
            name: name,
            profession: profession || "",
          },
        })
      );
      console.log(`Stored waitlist entry in S3: ${s3Key}`);
    } catch (s3Error) {
      console.error("S3 Error:", s3Error);
      // Continue even if S3 fails - don't block user
    }

    // 2. Send confirmation email to admin (always rohit@myporsia.com)
    try {
      await sesClient.send(
        new SendEmailCommand({
          Source: process.env.AWS_SES_FROM_EMAIL || "rohit@myporsia.com",
          Destination: {
            ToAddresses: ["rohit@myporsia.com"],
          },
          Message: {
            Subject: {
              Data: `🚀 New Waitlist Signup: ${name} (${email})`,
              Charset: "UTF-8",
            },
            Body: {
              Html: {
                Data: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .header { background: linear-gradient(135deg, #3B82F6, #9333EA); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-box { background: #f0f9ff; border-left: 4px solid #3B82F6; padding: 15px; margin: 15px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🎉 New Waitlist Signup!</h2>
    </div>
    <div class="content">
      <h3>New signup details:</h3>
      <div class="info-box">
        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📧 Email:</strong> ${email}</p>
        <p><strong>💼 Profession:</strong> ${profession || 'Not specified'}</p>
        <p><strong>🕐 Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      </div>
      <p><strong>Data saved in S3:</strong> Check your bucket for the full details.</p>
    </div>
  </div>
</body>
</html>
                `,
                Charset: "UTF-8",
              },
              Text: {
                Data: `New Waitlist Signup!\n\nName: ${name}\nEmail: ${email}\nProfession: ${profession || 'Not specified'}\nTime: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n\nData saved in S3.`,
                Charset: "UTF-8",
              },
            },
          },
        })
      );
      console.log(`Sent notification email to rohit@myporsia.com for signup: ${email}`);
    } catch (sesError) {
      console.error("SES Error:", sesError);
      // Continue even if email fails - don't block user
    }

    return json(
      {
        success: true,
        message: "Successfully joined waitlist!",
        data: { submissionId }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Waitlist submission error:", error);
    return json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
};

// Optionally support GET to check if service is running
export const loader = async () => {
  return json({ status: "Waitlist API is running" }, { status: 200 });
};
