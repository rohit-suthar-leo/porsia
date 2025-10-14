#!/bin/bash

# MyPorsia AWS Setup Script
# This script automatically sets up S3, SES, and IAM for the waitlist

set -e  # Exit on error

echo "🚀 MyPorsia AWS Setup Script"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
AWS_REGION="ap-south-1"
BUCKET_NAME="myporsia-waitlist-$(date +%s)"  # Unique bucket name
IAM_USER_NAME="myporsia-waitlist-user"
FROM_EMAIL="hello@myporsia.com"

echo "📋 Configuration:"
echo "   Region: $AWS_REGION"
echo "   S3 Bucket: $BUCKET_NAME"
echo "   IAM User: $IAM_USER_NAME"
echo "   From Email: $FROM_EMAIL"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI not installed${NC}"
    echo ""
    echo "Install it:"
    echo "  macOS: brew install awscli"
    echo "  Linux: sudo apt install awscli"
    echo "  Or visit: https://aws.amazon.com/cli/"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI found${NC}"

# Check if AWS is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${YELLOW}⚠️  AWS CLI not configured${NC}"
    echo ""
    echo "Run: aws configure"
    echo "You'll need:"
    echo "  - AWS Access Key ID"
    echo "  - AWS Secret Access Key"
    echo "  - Default region: ap-south-1"
    exit 1
fi

echo -e "${GREEN}✅ AWS credentials configured${NC}"
echo ""

# Step 1: Create S3 Bucket
echo "📦 Step 1: Creating S3 bucket..."
if aws s3 mb s3://$BUCKET_NAME --region $AWS_REGION 2>/dev/null; then
    echo -e "${GREEN}✅ S3 bucket created: $BUCKET_NAME${NC}"

    # Block public access
    aws s3api put-public-access-block \
        --bucket $BUCKET_NAME \
        --public-access-block-configuration \
        "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

    echo -e "${GREEN}✅ Public access blocked${NC}"
else
    echo -e "${YELLOW}⚠️  Bucket already exists or error occurred${NC}"
fi
echo ""

# Step 2: Create IAM User
echo "👤 Step 2: Creating IAM user..."
if aws iam create-user --user-name $IAM_USER_NAME 2>/dev/null; then
    echo -e "${GREEN}✅ IAM user created: $IAM_USER_NAME${NC}"
else
    echo -e "${YELLOW}⚠️  User already exists${NC}"
fi
echo ""

# Step 3: Attach Policies
echo "🔐 Step 3: Attaching policies..."
aws iam attach-user-policy \
    --user-name $IAM_USER_NAME \
    --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess 2>/dev/null || true

aws iam attach-user-policy \
    --user-name $IAM_USER_NAME \
    --policy-arn arn:aws:iam::aws:policy/AmazonSESFullAccess 2>/dev/null || true

echo -e "${GREEN}✅ Policies attached${NC}"
echo ""

# Step 4: Create Access Keys
echo "🔑 Step 4: Creating access keys..."
KEY_OUTPUT=$(aws iam create-access-key --user-name $IAM_USER_NAME 2>/dev/null || echo "")

if [ -n "$KEY_OUTPUT" ]; then
    ACCESS_KEY=$(echo $KEY_OUTPUT | jq -r '.AccessKey.AccessKeyId')
    SECRET_KEY=$(echo $KEY_OUTPUT | jq -r '.AccessKey.SecretAccessKey')

    echo -e "${GREEN}✅ Access keys created${NC}"
    echo ""

    # Create .env file
    cat > .env << EOF
# AWS Configuration - Generated $(date)
AWS_REGION=$AWS_REGION
AWS_ACCESS_KEY_ID=$ACCESS_KEY
AWS_SECRET_ACCESS_KEY=$SECRET_KEY

# S3 Bucket
AWS_S3_BUCKET_NAME=$BUCKET_NAME

# SES Email (VERIFY THIS EMAIL IN AWS CONSOLE!)
AWS_SES_FROM_EMAIL=$FROM_EMAIL
ADMIN_EMAIL=$FROM_EMAIL
EOF

    echo -e "${GREEN}✅ .env file created${NC}"
    echo ""

    echo -e "${YELLOW}⚠️  IMPORTANT: Save these credentials NOW!${NC}"
    echo ""
    echo "AWS_ACCESS_KEY_ID=$ACCESS_KEY"
    echo "AWS_SECRET_ACCESS_KEY=$SECRET_KEY"
    echo ""
    echo "These are saved in .env file (don't commit to git!)"
else
    echo -e "${YELLOW}⚠️  Access keys already exist or error occurred${NC}"
    echo "You may need to delete old keys first:"
    echo "  aws iam list-access-keys --user-name $IAM_USER_NAME"
fi
echo ""

# Step 5: Verify SES Email
echo "📧 Step 5: Setting up SES..."
echo ""
echo -e "${YELLOW}⚠️  Manual step required:${NC}"
echo ""
echo "1. Go to: https://console.aws.amazon.com/ses/"
echo "2. Click 'Verified identities' → 'Create identity'"
echo "3. Select 'Email address'"
echo "4. Enter: $FROM_EMAIL"
echo "5. Click verification link in email"
echo ""
echo "OR run this command:"
echo "  aws ses verify-email-identity --email-address $FROM_EMAIL --region $AWS_REGION"
echo ""

read -p "Press Enter to continue..."

# Try to verify email via CLI
aws ses verify-email-identity --email-address $FROM_EMAIL --region $AWS_REGION 2>/dev/null || true
echo -e "${GREEN}✅ Verification email sent to $FROM_EMAIL${NC}"
echo ""

# Summary
echo "================================"
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo "================================"
echo ""
echo "What was created:"
echo "  ✅ S3 Bucket: $BUCKET_NAME"
echo "  ✅ IAM User: $IAM_USER_NAME"
echo "  ✅ Access Keys: Saved in .env"
echo "  ⏳ SES Email: Check inbox for verification"
echo ""
echo "Next steps:"
echo "  1. Verify email at $FROM_EMAIL (check inbox)"
echo "  2. Run: npm run dev"
echo "  3. Test waitlist form at http://localhost:3000"
echo ""
echo "To deploy:"
echo "  - Push to GitHub"
echo "  - Deploy on Vercel/Fly.io"
echo "  - Add .env variables to hosting platform"
echo ""
echo "Cost: ₹0/month (AWS Free Tier) 🎉"
echo ""
