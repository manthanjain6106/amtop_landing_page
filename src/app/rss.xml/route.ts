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
  content: unknown;
}

export async function GET() {
  try {
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/posts?where[status][equals]=published&sort=-publishedAt&limit=20`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    
    const posts: PayloadPost[] = data.docs || [];

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AMTOP Blog</title>
    <description>Latest insights on AI agents, automation, and business transformation</description>
    <link>https://amtop.com</link>
    <atom:link href="https://amtop.com/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts.map((post: PayloadPost) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>https://amtop.com/blog/${post.slug}</link>
      <guid>https://amtop.com/blog/${post.slug}</guid>
      <pubDate>${post.publishedAt ? new Date(post.publishedAt).toUTCString() : new Date().toUTCString()}</pubDate>
      <author>${post.author?.name || 'AMTOP Team'}</author>
    </item>
    `).join('')}
  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });

  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate RSS feed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
