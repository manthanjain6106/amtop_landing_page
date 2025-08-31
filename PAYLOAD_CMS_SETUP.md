# Payload CMS Integration Setup

This guide explains how to connect your AMTOP landing page to the Payload CMS for dynamic blog content.

## Prerequisites

1. **Payload CMS Running**: Ensure your Payload CMS is running (typically on `http://localhost:3000`)
2. **MongoDB**: Make sure MongoDB is running and accessible
3. **Environment Variables**: Configure the connection settings

## Setup Steps

### 1. Start Payload CMS

Navigate to your `payload-cms` folder and start the CMS:

```bash
cd payload-cms
pnpm dev
```

This will start Payload CMS on `http://localhost:3000` with the admin panel accessible at `http://localhost:3000/admin`.

### 2. Configure Environment Variables

Create a `.env.local` file in your `amtop_landing_page` folder (or set environment variables):

```bash
# Payload CMS API URL
PAYLOAD_API_URL=http://localhost:3000/api
```

### 3. Start AMTOP Landing Page

In a new terminal, navigate to your `amtop_landing_page` folder and start the development server:

```bash
cd amtop_landing_page
npm run dev
```

This will start your landing page on `http://localhost:3001` (or another available port).

### 4. Create Blog Content

1. Open your Payload CMS admin panel at `http://localhost:3000/admin`
2. Create some blog posts, categories, and tags
3. Make sure to set the post status to "published"
4. Add cover images and content

### 5. Test the Integration

1. Visit your blog page at `http://localhost:3001/blog`
2. The page should now display real content from Payload CMS
3. Test search functionality, category filtering, and tag filtering

## API Endpoints

The integration creates the following API endpoints in your AMTOP project:

- `/api/blog` - Fetch and search blog posts
- `/api/blog/categories` - Fetch blog categories
- `/api/blog/tags` - Fetch blog tags

## Features

- **Dynamic Content**: Blog posts, categories, and tags are fetched from Payload CMS
- **Search**: Real-time search through blog content
- **Filtering**: Filter posts by category or tag
- **Responsive**: Maintains the existing responsive design
- **Fallback Content**: Shows default content if CMS is unavailable

## Troubleshooting

### Common Issues

1. **Connection Error**: Ensure Payload CMS is running and accessible
2. **CORS Issues**: Check if Payload CMS allows requests from your landing page domain
3. **No Content**: Verify that posts are published and have the correct status
4. **Image Issues**: Ensure media files are properly uploaded and accessible

### Debug Steps

1. Check browser console for API errors
2. Verify Payload CMS API endpoints are working
3. Check environment variable configuration
4. Ensure both servers are running on different ports

## Customization

You can customize the integration by:

- Modifying the API response transformation in `/src/app/api/blog/route.ts`
- Adjusting the blog page layout and styling
- Adding more filtering options
- Implementing pagination for large numbers of posts

## Production Deployment

For production:

1. Update `PAYLOAD_API_URL` to point to your production Payload CMS
2. Ensure proper CORS configuration
3. Set up environment variables in your hosting platform
4. Test the integration thoroughly before going live
