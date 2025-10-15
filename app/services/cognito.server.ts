import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
import crypto from "crypto";

if (!process.env.COGNITO_USER_POOL_ID) {
  throw new Error("COGNITO_USER_POOL_ID must be set");
}

if (!process.env.COGNITO_CLIENT_ID) {
  throw new Error("COGNITO_CLIENT_ID must be set");
}

if (!process.env.COGNITO_CLIENT_SECRET) {
  throw new Error("COGNITO_CLIENT_SECRET must be set");
}

const client = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

// Generate SECRET_HASH for Cognito
function generateSecretHash(username: string): string {
  const clientId = process.env.COGNITO_CLIENT_ID!;
  const clientSecret = process.env.COGNITO_CLIENT_SECRET!;

  return crypto
    .createHmac("SHA256", clientSecret)
    .update(username + clientId)
    .digest("base64");
}

export async function authenticateUser(email: string, password: string) {
  try {
    const secretHash = generateSecretHash(email);

    const command = new InitiateAuthCommand({
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
        SECRET_HASH: secretHash,
      },
    });

    const response = await client.send(command);

    if (response.AuthenticationResult) {
      return {
        success: true,
        accessToken: response.AuthenticationResult.AccessToken,
        idToken: response.AuthenticationResult.IdToken,
        refreshToken: response.AuthenticationResult.RefreshToken,
      };
    }

    return { success: false, error: "Authentication failed" };
  } catch (error: any) {
    console.error("Cognito authentication error:", error);
    return {
      success: false,
      error: error.message || "Authentication failed",
    };
  }
}

export async function verifyUser(email: string): Promise<boolean> {
  // Only allow rohit@myporsia.com
  return email === "rohit@myporsia.com";
}
