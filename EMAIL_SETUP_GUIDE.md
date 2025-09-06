# Email Setup Guide for Contact Form

This guide will help you set up email functionality for your contact form without requiring Firebase Functions.

## What's Been Implemented

✅ **Next.js API Route** - Handles contact form submissions  
✅ **Email Service** - Sends emails using Gmail  
✅ **Form Integration** - Updated contact form to use the new API  
✅ **Error Handling** - Proper validation and error messages  

## Step 1: Set Up Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate a password
   - Copy the generated password (16 characters)

## Step 2: Create Environment Variables

Create a `.env.local` file in your project root:

```env
EMAIL_USER=amarnath@amtop.in
EMAIL_PASS=your_16_character_app_password_here
```

## Step 3: Test the Contact Form

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the contact page** (`/contact`)

3. **Fill out and submit the form**

4. **Check your email** - All three team members will receive the submission:
   - amarnath@amtop.in
   - anant@amtop.in
   - jainmanthan6106@gmail.com

## How It Works

1. User submits contact form
2. Form data is sent to `/api/contact` API route
3. API route uses nodemailer to send email via Gmail
4. Email is delivered to your inbox
5. User gets success/error message

## Email Format

You'll receive emails with:
- **Subject:** "New Contact Form Submission: [User's Subject]"
- **Content:** All form details including name, email, company, message, and timestamp
- **From:** Your Gmail address
- **To:** All three team members will receive the email:
  - amarnath@amtop.in
  - anant@amtop.in
  - jainmanthan6106@gmail.com

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error:**
   - Check your Gmail App Password is correct
   - Ensure 2FA is enabled on your Gmail account
   - Verify environment variables are set correctly

2. **"Missing required fields" error:**
   - All required fields must be filled out
   - Check form validation

3. **Email not received:**
   - Check spam/junk folder
   - Verify email address in `.env.local`
   - Check console for error messages

### Testing:

- Use the browser's developer tools to see API responses
- Check the terminal/console for server logs
- Verify environment variables are loaded correctly

## Security Notes

- ✅ **App Passwords** are secure and can be revoked
- ✅ **Environment variables** keep credentials safe
- ✅ **Input validation** prevents malicious submissions
- ✅ **Rate limiting** can be added for production

## Production Deployment

1. **Set environment variables** in your hosting platform
2. **Deploy your Next.js app**
3. **Test the contact form** on live site

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your `.env.local` file is correct
3. Ensure Gmail App Password is properly generated
4. Check that 2FA is enabled on your Gmail account

---

**Note:** This solution doesn't require Firebase Functions or paid plans, making it perfect for free hosting platforms like Vercel, Netlify, or any Next.js hosting service.
