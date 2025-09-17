# Payload CMS Integration Setup Guide

This guide will help you set up the complete integration between your AMTOP landing page and Payload CMS for blog functionality.

## Prerequisites

1. MongoDB running locally or MongoDB Atlas connection
2. Node.js 18+ installed
3. Both projects cloned and dependencies installed

## Environment Variables

Create a `.env.local` file in the `amtop_landing_page` directory with:

```env
# Payload CMS Configuration
NEXT_PUBLIC_PAYLOAD_API_URL=http://localhost:3001/api
PAYLOAD_API_URL=http://localhost:3001/api

# Database Configuration (for Payload CMS)
DATABASE_URI=mongodb://localhost:27017/amtop_blog

# Payload Secret (generate a secure random string)
PAYLOAD_SECRET=your-secure-secret-key-here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create a `.env` file in the `payload-cms` directory with:

```env
# Database Configuration
DATABASE_URI=mongodb://localhost:27017/amtop_blog

# Payload Secret (same as above)
PAYLOAD_SECRET=your-secure-secret-key-here

# Server Configuration
PORT=3001

# Google Cloud Storage Configuration (for production)
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_BUCKET=your-bucket-name
GOOGLE_CLOUD_KEY_FILE=path/to/your/service-account-key.json
GOOGLE_CLOUD_BASE_URL=https://storage.googleapis.com/your-bucket-name
```

## Setup Steps

### 1. Install Dependencies

In both directories, run:
```bash
npm install
```

### 2. Start Payload CMS

In the `payload-cms` directory:
```bash
npm run dev
```

This will start Payload CMS on http://localhost:3001

### 3. Start AMTOP Landing Page

In the `amtop_landing_page` directory:
```bash
npm run dev
```

This will start your landing page on http://localhost:3000

### 4. Access Payload Admin

1. Go to http://localhost:3001/admin
2. Create your first admin user
3. Start creating blog posts, categories, and tags

## Features Implemented

### Blog Collections
- **Posts**: Full blog posts with rich text content, images, categories, and tags
- **Categories**: Blog post categories
- **Tags**: Blog post tags for better organization
- **Users**: Author management
- **Media**: Image and file management

### API Endpoints
- `GET /api/blog` - Fetch all published posts
- `POST /api/blog` - Search and filter posts
- `GET /api/blog/categories` - Fetch all categories
- `GET /api/blog/tags` - Fetch all tags

### Frontend Pages
- `/blog` - Blog listing page with search and pagination
- `/blog/[slug]` - Individual blog post pages

## Content Management

### Creating Blog Posts

1. Go to Payload Admin (http://localhost:3001/admin)
2. Navigate to Posts collection
3. Click "Create New"
4. Fill in:
   - Title (required)
   - Excerpt (required)
   - Read Time (e.g., "5 min read")
   - Hero Image (upload or select from media)
   - Content (rich text editor)
   - Categories (select from existing or create new)
   - Tags (select from existing or create new)
   - Authors (select from users)
   - SEO settings

### Managing Categories and Tags

1. In Payload Admin, go to Categories or Tags
2. Create new entries with titles and optional descriptions
3. These will automatically appear in the blog interface

## Customization

### Styling
- Blog pages use Tailwind CSS classes
- Modify components in `src/components/` for styling changes
- Rich text content is rendered with custom styling

### Content Structure
- Posts support rich text content via Lexical editor
- Images are handled through Payload's media collection
- SEO fields are available for each post

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure both servers are running and URLs are correct
2. **Database Connection**: Check MongoDB is running and DATABASE_URI is correct
3. **Image Loading**: Verify media URLs are accessible
4. **API Errors**: Check browser console and server logs

### Debug Mode

Enable debug logging by adding to your `.env.local`:
```env
DEBUG=payload:*
```

## Production Deployment

For production deployment:

1. Update environment variables with production URLs
2. Use a production MongoDB instance
3. Set up proper CORS configuration
4. Configure image storage (AWS S3, Cloudinary, etc.)
5. Set up proper SEO and meta tags

## Next Steps

1. Create your first blog post in Payload Admin
2. Test the blog functionality on your landing page
3. Customize the styling to match your brand
4. Add more content and test all features
5. Deploy to production when ready

## Support

If you encounter any issues:
1. Check the console logs in both applications
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running and accessible
4. Check that both servers are running on the correct ports
