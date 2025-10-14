# 🔗 Your MyPorsia Links

## 📊 Admin Dashboard (View Waitlist)
```
http://localhost:3000/admin/waitlist
```
**Bookmark this!** See all signups in real-time.

---

## 🏠 Landing Page
```
http://localhost:3000
```
Test the waitlist form here.

---

## 📧 Email Setup

### ✅ Step 1: Verify Your Email (IMPORTANT!)
Check your inbox at **rohit@myporsia.com** for AWS verification email.

**Can't find it?** Check:
- Spam folder
- Promotions tab (Gmail)
- Other folders

**Subject:** "Amazon Web Services – Email Address Verification Request"

Click the verification link!

### ✅ Step 2: Test It
1. Go to http://localhost:3000
2. Scroll to bottom waitlist form
3. Fill in your details
4. Click "Get FREE Access Now"
5. See the beautiful "Coming Soon" page! 🚀
6. Check dashboard: http://localhost:3000/admin/waitlist

---

## 🎉 What's New

### Coming Soon Page
After users sign up, they see:
- 🚀 "You're On The List!" message
- 🔥 "Launching in 15 days" countdown
- 💡 What happens next (priority access, locked pricing)
- 🎁 Referral program: Share with 3 friends = 1 month FREE
- 📱 WhatsApp & LinkedIn share buttons
- 📸 Follow Instagram/LinkedIn links

### Dashboard Features
- Total signups counter
- Today's signups
- This week's signups
- Full table with: Name, Email, Profession, Date
- Export to CSV button
- Real-time updates (refresh to see new entries)

---

## 🧪 Test Checklist

- [ ] Verify rohit@myporsia.com email (check inbox NOW!)
- [ ] Go to http://localhost:3000
- [ ] Test waitlist form submission
- [ ] See "Coming Soon" page after submission
- [ ] Check http://localhost:3000/admin/waitlist to see entry
- [ ] Try exporting CSV from dashboard
- [ ] Check rohit@myporsia.com for welcome email (after verification)

---

## 💰 AWS Cost: ₹0/month

Everything running on AWS Free Tier:
- S3 Bucket: `myporsia-waitlist-1760456712`
- IAM User: `myporsia-app-1760456735`
- Emails: Up to 62,000/month FREE

---

## 🚀 Deploy to Production

When ready to go live:

### Option 1: Vercel (Easiest)
```bash
# Push to GitHub
git add .
git commit -m "Launch MyPorsia waitlist"
git push

# Then:
# 1. Go to vercel.com
# 2. Import repository
# 3. Add environment variables from .env file
# 4. Deploy!
```

### Option 2: Fly.io
```bash
fly launch
fly secrets set AWS_ACCESS_KEY_ID=<your-access-key-id>
fly secrets set AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
fly secrets set AWS_REGION=ap-south-1
fly secrets set AWS_S3_BUCKET_NAME=myporsia-waitlist-1760456712
fly secrets set AWS_SES_FROM_EMAIL=rohit@myporsia.com
fly secrets set ADMIN_EMAIL=rohit@myporsia.com
fly deploy
```

**Note:** Get your actual AWS credentials from the `.env` file - never commit them to git!

---

## 📱 Share Your Landing Page

Once live, share on:
- Instagram: "Join the waitlist! Link in bio"
- LinkedIn: "We're launching MyPorsia! Early access: [link]"
- WhatsApp: "Check out what I'm building: [link]"

---

## ❓ Troubleshooting

### "No emails received"
- Verify rohit@myporsia.com in AWS SES
- Check spam folder
- Wait 2-3 minutes after verification

### "Dashboard shows no entries"
- Make sure you submitted the form
- Refresh the page
- Check S3 bucket in AWS console

### "Form submission error"
- Check .env file exists
- Restart server: `pkill -f "remix dev" && npm run dev`

---

## 🎯 Next Steps

1. ✅ Verify rohit@myporsia.com email
2. ✅ Test form submission
3. ✅ Check dashboard
4. 📱 Create Instagram reels (see FIRST_3_REEL_SCRIPTS.md)
5. 🚀 Deploy to production
6. 📈 Drive traffic to landing page
7. 💰 Collect signups
8. 🔨 Build the actual product

---

**Server running at:** http://localhost:3000
**Dashboard at:** http://localhost:3000/admin/waitlist

**To stop server:**
```bash
pkill -f "remix dev"
```

🎉 Everything is ready! Just verify your email and start testing!
