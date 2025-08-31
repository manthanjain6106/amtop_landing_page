import { useState, useEffect, useCallback } from 'react';

interface BlogPost {
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

interface Category {
  id: string;
  title: string;
  description: string;
  postCount: number;
}

interface Tag {
  id: string;
  title: string;
  description: string;
  postCount: number;
}

interface BlogData {
  posts: BlogPost[];
  categories: Category[];
  tags: Tag[];
  loading: boolean;
  error: string | null;
  totalPosts: number;
  searchPosts: (searchTerm: string) => void;
  filterByCategory: (category: string) => void;
  filterByTag: (tag: string) => void;
  fetchPosts: () => void;
}

export const useBlogData = (): BlogData => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPosts, setTotalPosts] = useState(0);

  const fetchPosts = useCallback(async (page: number = 1, limit: number = 6) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page, limit }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts || []);
        setTotalPosts(data.totalPosts || 0);
      } else {
        throw new Error(data.error || 'Failed to fetch posts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch('/api/blog/categories');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories || []);
        }
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }, []);

  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch('/api/blog/tags');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setTags(data.tags || []);
        }
      }
    } catch (err) {
      console.error('Error fetching tags:', err);
    }
  }, []);

  const searchPosts = useCallback(async (searchTerm: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm, page: 1, limit: 6 }),
      });

      if (!response.ok) {
        throw new Error('Failed to search posts');
      }

      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts || []);
        setTotalPosts(data.totalPosts || 0);
      } else {
        throw new Error(data.error || 'Failed to search posts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error searching posts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filterByCategory = useCallback(async (category: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, page: 1, limit: 6 }),
      });

      if (!response.ok) {
        throw new Error('Failed to filter posts');
      }

      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts || []);
        setTotalPosts(data.totalPosts || 0);
      } else {
        throw new Error(data.error || 'Failed to filter posts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error filtering posts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filterByTag = useCallback(async (tag: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tag, page: 1, limit: 6 }),
      });

      if (!response.ok) {
        throw new Error('Failed to filter posts');
      }

      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts || []);
        setTotalPosts(data.totalPosts || 0);
      } else {
        throw new Error(data.error || 'Failed to filter posts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error filtering posts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(1, 6); // Default to first page with 6 posts
    fetchCategories();
    fetchTags();
  }, [fetchPosts, fetchCategories, fetchTags]);

  return {
    posts,
    categories,
    tags,
    loading,
    error,
    totalPosts,
    searchPosts,
    filterByCategory,
    filterByTag,
    fetchPosts,
  };
};

export type { BlogPost, Category, Tag };
