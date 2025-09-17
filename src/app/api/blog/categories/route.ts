import { NextResponse } from 'next/server';
import { PAYLOAD_CONFIG } from '@/config/payload';

interface PayloadCategory {
  id: string;
  title: string;
  slug: string;
  description?: string;
}

interface TransformedCategory {
  id: string;
  title: string;
  description: string;
  postCount: number;
}

export async function GET() {
  try {
    // Fetch categories from Payload CMS
    const response = await fetch(`${PAYLOAD_CONFIG.API_URL}/categories?sort=title&limit=100`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Transform the data to match your blog page structure
    const transformedCategories: TransformedCategory[] = data.docs?.map((category: PayloadCategory) => ({
      id: category.id,
      title: category.title || 'Uncategorized',
      description: category.description || `Posts in ${category.title}`,
      postCount: 0, // We'll calculate this separately if needed
    })) || [];

    return NextResponse.json({
      success: true,
      categories: transformedCategories,
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