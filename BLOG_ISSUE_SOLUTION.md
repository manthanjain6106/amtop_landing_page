# Blog Posts Display Issue - Solution Guide

## Problem
Only 1 blog post is showing on your blog page even though you created 2 posts in Payload CMS.

## Root Causes Identified

### 1. **API Filtering Issue** ✅ FIXED
The API was filtering out posts that didn't have all required fields (title, excerpt, slug). I've made excerpt optional in the filtering logic.

### 2. **Blog Page Display Logic** ✅ IMPROVED
The blog page was using `posts.slice(1, 7)` which limited recent articles to 6 posts. I've changed it to `posts.slice(1)` to show all remaining posts.

### 3. **Potential Payload CMS Configuration Issues**
You have two different Payload CMS URLs configured:
- `https://blog.amtop.in/api` (in env.production.example)
- `https://payload-cms-sandy.vercel.app/api` (in production.env.example)

## Solutions Applied

### ✅ Fixed API Filtering
**File**: `src/app/api/blog/route.ts`
- Made excerpt field optional in the filtering logic
- Posts will now show even if they don't have an excerpt

### ✅ Improved Blog Display Logic
**File**: `src/app/blog/page.tsx`
- Changed `posts.slice(1, 7)` to `posts.slice(1)` to show all posts
- Added debug information to help identify issues

### ✅ Added Debug Tools
**File**: `debug-blog-posts.js`
- Created a diagnostic script to test both Payload CMS URLs
- Shows detailed information about each post and potential filtering issues

## Next Steps

### 1. **Run the Debug Script**
```bash
node debug-blog-posts.js
```
This will tell you:
- Which Payload CMS URL has your posts
- Whether posts are being filtered out
- What fields might be missing

### 2. **Check Your Payload CMS Posts**
Make sure both posts have:
- ✅ Title (required)
- ✅ Slug (required) 
- ✅ Excerpt (now optional, but recommended)
- ✅ Status: "Published"
- ✅ Published At: Set to current or past date

### 3. **Update Environment Variables**
Based on the debug script results, update your environment variables to use the correct Payload CMS URL.

### 4. **Test the Blog Page**
After making changes:
1. Restart your development server
2. Visit `/blog` page
3. Check if both posts are now visible

## Expected Result
- **Featured Article**: Your first post (most recent)
- **Recent Articles**: Your second post (and any additional posts)

## If Issues Persist

### Check Payload CMS Admin
1. Go to your Payload CMS admin panel
2. Check the Posts collection
3. Verify both posts are:
   - Published (status = "published")
   - Have publishedAt date set correctly
   - Have all required fields filled

### Check Network Tab
1. Open browser developer tools
2. Go to Network tab
3. Visit `/blog` page
4. Look for the API call to `/api/blog`
5. Check the response to see how many posts are returned

### Check Console Logs
Look for any error messages in the browser console that might indicate API connection issues.

## Files Modified
- `src/app/api/blog/route.ts` - Fixed filtering logic
- `src/app/blog/page.tsx` - Improved display logic
- `debug-blog-posts.js` - Added diagnostic tool
- `BLOG_ISSUE_SOLUTION.md` - This solution guide

## Contact
If you continue to have issues, please share:
1. Output from `debug-blog-posts.js`
2. Screenshot of your Payload CMS posts
3. Browser console errors (if any)
