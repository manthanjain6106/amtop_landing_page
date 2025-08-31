import { NextResponse } from 'next/server';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author?: {
    name: string;
  };
  publishedAt?: string;
  readTime?: string;
  categories?: Array<{
    title: string;
  }>;
  coverImage?: {
    url: string;
  };
  tags?: Array<{
    title: string;
  } | string>;
  content: unknown;
  status: string;
  updatedAt: string;
}

interface TransformedPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  content: unknown;
  status: string;
  publishedAt: string;
  updatedAt: string;
}

export async function GET() {
  try {
    // Fetch posts from Payload CMS
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/posts?where[status][equals]=published&sort=-publishedAt&limit=10`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Transform the data to match your blog page structure
    const transformedPosts: TransformedPost[] = data.docs
      ?.filter((post: PayloadPost) => {
        // Only include posts that have valid content (not just IDs)
        return post.title && post.title.trim() !== '' && 
               post.excerpt && post.excerpt.trim() !== '' &&
               post.slug && post.slug.trim() !== '';
      })
      ?.map((post: PayloadPost) => {
      // Safely construct image URL
      let imageUrl = '/images/blog-placeholder.jpg';
      if (post.coverImage?.url) {
        try {
          // If the URL is already absolute, use it as is
          if (post.coverImage.url.startsWith('http')) {
            imageUrl = post.coverImage.url;
          } else {
            // If it's a relative URL, construct the full URL
            const baseUrl = PAYLOAD_CONFIG.API_URL.replace('/api', '');
            imageUrl = `${baseUrl}${post.coverImage.url}`;
          }
        } catch (error) {
          console.warn('Error constructing image URL:', error);
          imageUrl = '/images/blog-placeholder.jpg';
        }
      }

      return {
        id: post.id,
        title: post.title || 'Untitled Post',
        excerpt: post.excerpt || 'No excerpt available',
        slug: post.slug || `post-${post.id}`,
        author: post.author?.name || 'Unknown Author',
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }) : 'No date',
        readTime: post.readTime || '5 min read',
        category: post.categories?.[0]?.title || 'Uncategorized',
        image: imageUrl,
        tags: post.tags?.map((tag) => typeof tag === 'string' ? tag : (tag as { title: string }).title).filter(Boolean) || [],
        content: post.content,
        status: post.status,
        publishedAt: post.publishedAt || '',
        updatedAt: post.updatedAt
      };
    }) || [];

    return NextResponse.json({
      success: true,
      posts: transformedPosts,
      totalPosts: data.totalDocs || 0,
      totalPages: data.totalPages || 0,
      currentPage: data.page || 1
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { searchTerm, category, tag, page = 1, limit = 10, slug } = body;

    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append('where[status][equals]', 'published');
    queryParams.append('sort', '-publishedAt');
    queryParams.append('page', page.toString());
    queryParams.append('limit', limit.toString());

    // If slug is provided, fetch specific post
    if (slug) {
      queryParams.set('where[slug][equals]', slug);
      queryParams.set('limit', '1');
    }

    if (searchTerm) {
      queryParams.append('where[title][contains]', searchTerm);
    }

    if (category) {
      queryParams.append('where[categories][title][equals]', category);
    }

    if (tag) {
      queryParams.append('where[tags][title][equals]', tag);
    }

    const apiUrl = `${PAYLOAD_CONFIG.API_URL}/posts?${queryParams.toString()}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    
    const transformedPosts: TransformedPost[] = data.docs
      ?.filter((post: PayloadPost) => {
        // Only include posts that have valid content (not just IDs)
        return post.title && post.title.trim() !== '' && 
               post.excerpt && post.excerpt.trim() !== '' &&
               post.slug && post.slug.trim() !== '';
      })
      ?.map((post: PayloadPost) => {
      // Safely construct image URL
      let imageUrl = '/images/blog-placeholder.jpg';
      if (post.coverImage?.url) {
        try {
          // If the URL is already absolute, use it as is
          if (post.coverImage.url.startsWith('http')) {
            imageUrl = post.coverImage.url;
          } else {
            // If it's a relative URL, construct the full URL
            const baseUrl = PAYLOAD_CONFIG.API_URL.replace('/api', '');
            imageUrl = `${baseUrl}${post.coverImage.url}`;
          }
        } catch (error) {
          console.warn('Error constructing image URL:', error);
          imageUrl = '/images/blog-placeholder.jpg';
        }
      }

      return {
        id: post.id,
        title: post.title || 'Untitled Post',
        excerpt: post.excerpt || 'No excerpt available',
        slug: post.slug || `post-${post.id}`,
        author: post.author?.name || 'Unknown Author',
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }) : 'No date',
        readTime: post.readTime || '5 min read',
        category: post.categories?.[0]?.title || 'Uncategorized',
        image: imageUrl,
        tags: post.tags?.map((tag) => typeof tag === 'string' ? tag : (tag as { title: string }).title).filter(Boolean) || [],
        content: post.content,
        status: post.status,
        publishedAt: post.publishedAt || '',
        updatedAt: post.updatedAt
      };
    }) || [];

    return NextResponse.json({
      success: true,
      posts: transformedPosts,
      totalPosts: data.totalDocs || 0,
      totalPages: data.totalPages || 0,
      currentPage: data.page || 1
    });

  } catch (error) {
    console.error('Error searching blog posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to search blog posts',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
