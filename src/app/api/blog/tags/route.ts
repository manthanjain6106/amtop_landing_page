import { NextResponse } from 'next/server';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadTag {
  id: string;
  title: string;
  description?: string;
  postCount?: number;
}

export async function GET() {
  try {
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/tags?sort=title`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const data = await response.json();
    
    const tags = data.docs?.map((tag: PayloadTag) => ({
      id: tag.id,
      title: tag.title,
      description: tag.description || '',
      postCount: tag.postCount || 0
    })) || [];

    return NextResponse.json({
      success: true,
      tags
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
