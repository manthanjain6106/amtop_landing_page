# Blog Not Showing - Troubleshooting Guide

## Problem Description
Your AMTOP landing page is deployed on Vercel, but the blog page is not displaying any blog posts, categories, or tags.

## Root Cause
The main issue is that your frontend is trying to fetch blog data from `http://localhost:3001/api` (hardcoded in the config), but when deployed on Vercel, it needs to fetch from your production Payload CMS URL.

## Solutions

### 1. Fix Environment Variables (Recommended)

#### Step 1: Set Environment Variables in Vercel
1. Go to your Vercel dashboard
2. Select your `amtop-landing-page` project
3. Go to Settings → Environment Variables
4. Add the following environment variable:
   ```
   Name: NEXT_PUBLIC_PAYLOAD_API_URL
   Value: https://payload-cms-sandy.vercel.app/api
   Environment: Production
   ```

#### Step 2: Verify Your Payload CMS URL
Your Payload CMS is running at [https://payload-cms-sandy.vercel.app/](https://payload-cms-sandy.vercel.app/). Make sure this URL is accessible and working.

### 2. Check Payload CMS Status

#### Verify CMS is Running
1. Visit your Payload CMS admin panel: [https://payload-cms-sandy.vercel.app/admin](https://payload-cms-sandy.vercel.app/admin)
2. Check if you can log in and see the dashboard
3. Verify that you have blog posts, categories, and tags created

#### Check API Endpoints
Test these URLs in your browser or with a tool like Postman:
- `https://payload-cms-sandy.vercel.app/api/posts?where[status][equals]=published`
- `https://payload-cms-sandy.vercel.app/api/categories`
- `https://payload-cms-sandy.vercel.app/api/tags`

### 3. Verify Blog Content Exists

#### Check for Published Posts
1. In your Payload CMS admin panel, go to Posts collection
2. Ensure you have posts with:
   - Status: "Published"
   - Published date set to a past date
   - Required fields filled (title, excerpt, author, etc.)

#### Check Categories and Tags
1. Verify you have categories and tags created
2. Ensure they are properly linked to your blog posts

### 4. Test API Connection

#### Run the Test Script
1. Navigate to your project directory
2. Run: `node test-api.js`
3. This will test multiple API URLs and show which ones work

#### Check Browser Console
1. Open your deployed blog page
2. Open browser developer tools (F12)
3. Check the Console tab for error messages
4. Check the Network tab to see if API calls are being made

### 5. CORS Issues

#### Check CORS Configuration
Your Payload CMS needs to allow requests from your Vercel domain. In your Payload config, ensure:

```typescript
cors: [
  'https://amtop.com', // Your Vercel domain
  'https://payload-cms-sandy.vercel.app' // Your CMS domain
],
```

### 6. Environment-Specific Configuration

#### Development vs Production
- **Development**: Uses `http://localhost:3001/api`
- **Production**: Should use `https://payload-cms-sandy.vercel.app/api`

The updated config now supports both:
```typescript
API_URL: process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 
         process.env.PAYLOAD_API_URL || 
         'http://localhost:3001/api'
```

## Quick Fix Checklist

- [ ] Set `NEXT_PUBLIC_PAYLOAD_API_URL` environment variable in Vercel to `https://payload-cms-sandy.vercel.app/api`
- [ ] Verify Payload CMS is running and accessible at [https://payload-cms-sandy.vercel.app/](https://payload-cms-sandy.vercel.app/)
- [ ] Check that blog posts exist and are published
- [ ] Verify CORS settings allow your Vercel domain
- [ ] Test API endpoints directly
- [ ] Check browser console for errors
- [ ] Redeploy after setting environment variables

## Common Error Messages

### "Failed to fetch posts"
- API URL is incorrect
- CMS is not running
- CORS issue

### "No articles found"
- No published posts exist
- Posts don't have required fields
- API is working but returning empty results

### Network errors
- Check if the API URL is accessible
- Verify SSL certificates if using HTTPS
- Check firewall/security group settings

## Next Steps

1. **Immediate**: Set the environment variable in Vercel to `https://payload-cms-sandy.vercel.app/api`
2. **Verify**: Test your Payload CMS API endpoints at the correct URL
3. **Content**: Ensure you have published blog posts in your CMS
4. **Redeploy**: After setting environment variables
5. **Monitor**: Check browser console and network requests

## Support

If the issue persists after following these steps:
1. Check the browser console for specific error messages
2. Verify your Payload CMS deployment status at [https://payload-cms-sandy.vercel.app/](https://payload-cms-sandy.vercel.app/)
3. Test API endpoints directly
4. Check Vercel deployment logs
