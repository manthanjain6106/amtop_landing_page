# Firebase Email Setup Guide

This guide will help you set up Firebase to send emails when someone submits the contact form on your website.

## Prerequisites

1. A Firebase project
2. Node.js installed (version 18 or higher)
3. Firebase CLI installed

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

## Step 3: Initialize Firebase in your project

```bash
firebase init
```

Select the following options:
- Choose "Functions" and "Hosting"
- Select your Firebase project
- Use JavaScript for Functions
- Install dependencies with npm

## Step 4: Configure Firebase Functions

Navigate to the `functions` directory and install dependencies:

```bash
cd functions
npm install
```

## Step 5: Set up Email Configuration

### Option A: Using Gmail (Recommended for testing)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Set Firebase Functions config:

```bash
firebase functions:config:set email.user="your_email@gmail.com"
firebase functions:config:set email.pass="your_app_password"
```

### Option B: Using SendGrid (Recommended for production)

1. Create a SendGrid account
2. Get your API key
3. Update the `functions/index.js` file to use SendGrid instead of nodemailer

## Step 6: Deploy Firebase Functions

```bash
firebase deploy --only functions
```

## Step 7: Update Environment Variables

Create a `.env.local` file in your project root with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 8: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email for the submission

## Troubleshooting

### Common Issues:

1. **"Functions not found" error**: Make sure you've deployed your functions
2. **Email not sending**: Check your email credentials in Firebase Functions config
3. **CORS errors**: Firebase Functions handle CORS automatically
4. **Authentication errors**: Ensure your Firebase project is properly configured

### Testing Locally:

```bash
firebase emulators:start --only functions
```

This will start Firebase Functions locally for testing.

## Security Notes

1. Never commit your `.env.local` file to version control
2. Use environment variables for sensitive information
3. Consider implementing rate limiting for the contact form
4. Validate input data on both client and server side

## Production Deployment

1. Deploy your Next.js app
2. Deploy Firebase Functions: `firebase deploy --only functions`
3. Ensure all environment variables are set in your hosting platform

## Support

If you encounter issues:
1. Check Firebase Functions logs: `firebase functions:log`
2. Verify your Firebase project configuration
3. Ensure all dependencies are properly installed
