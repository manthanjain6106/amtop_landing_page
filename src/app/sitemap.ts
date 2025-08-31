import { MetadataRoute } from 'next';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadPost {
  id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  updatedAt: string;
}

interface PayloadCategory {
  id: string;
  title: string;
  slug: string;
}

interface PayloadTag {
  id: string;
  title: string;
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://amtop.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  try {
    // Fetch blog posts
    const postsResponse = await fetch(`${PAYLOAD_CONFIG.API_URL}/posts?where[status][equals]=published&sort=-publishedAt&limit=100`);
    const postsData = await postsResponse.json();
    const posts: PayloadPost[] = postsData.docs || [];

    const blogPosts = posts.map((post: PayloadPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // Fetch categories
    const categoriesResponse = await fetch(`${PAYLOAD_CONFIG.API_URL}/categories?sort=title`);
    const categoriesData = await categoriesResponse.json();
    const categories: PayloadCategory[] = categoriesData.docs || [];

    const categoryPages = categories.map((category: PayloadCategory) => ({
      url: `${baseUrl}/blog/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    // Fetch tags
    const tagsResponse = await fetch(`${PAYLOAD_CONFIG.API_URL}/tags?sort=title`);
    const tagsData = await tagsResponse.json();
    const tags: PayloadTag[] = tagsData.docs || [];

    const tagPages = tags.map((tag: PayloadTag) => ({
      url: `${baseUrl}/blog/tags/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...blogPosts, ...categoryPages, ...tagPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages if dynamic content fails
    return staticPages;
  }
}
