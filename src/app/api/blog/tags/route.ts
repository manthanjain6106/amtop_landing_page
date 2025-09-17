import { NextResponse } from 'next/server';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadTag {
  id: string;
  title: string;
  slug: string;
  description?: string;
}

interface TransformedTag {
  id: string;
  title: string;
  description: string;
  postCount: number;
}

export async function GET() {
  try {
    // Fetch tags from Payload CMS
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/tags?sort=title&limit=100`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Transform the data to match your blog page structure
    const transformedTags: TransformedTag[] = data.docs?.map((tag: PayloadTag) => ({
      id: tag.id,
      title: tag.title || 'Untagged',
      description: tag.description || `Posts tagged with ${tag.title}`,
      postCount: 0, // We'll calculate this separately if needed
    })) || [];

    return NextResponse.json({
      success: true,
      tags: transformedTags,
    });

  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch tags',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}