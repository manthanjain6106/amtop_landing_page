import { NextResponse } from 'next/server';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadCategory {
  id: string;
  title: string;
  description?: string;
  postCount?: number;
}

export async function GET() {
  try {
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/categories?sort=title`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    
    const categories = data.docs?.map((category: PayloadCategory) => ({
      id: category.id,
      title: category.title,
      description: category.description || '',
      postCount: category.postCount || 0
    })) || [];

    return NextResponse.json({
      success: true,
      categories
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch categories',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
