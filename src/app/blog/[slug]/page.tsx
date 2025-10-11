'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import RichTextRenderer from '@/components/RichTextRenderer';
import Image from 'next/image';

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

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }

        const data = await response.json();
        
        if (data.success && data.posts && data.posts.length > 0) {
          setPost(data.posts[0]);
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || `Read ${post.title} on amTop Blog`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <SEO 
          title="Loading... - amTop Blog"
          description="Loading blog post..."
        />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container-max section-padding-top">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="animate-spin mx-auto mb-4" size={48} />
                <p className="text-gray-600">Loading article...</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <SEO 
          title="Post Not Found - amTop Blog"
          description="The requested blog post could not be found."
        />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container-max section-padding-top">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                <p className="text-gray-600 mb-6">
                  {error || 'The requested blog post could not be found.'}
                </p>
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - amTop Blog`}
        description={post.excerpt || `Read ${post.title} on amTop Blog`}
        keywords={post.tags}
        type="article"
        url={`https://amtop.com/blog/${post.slug}`}
        image={post.image}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Breadcrumbs */}
        <div className="container-max section-padding-top pb-4">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}`, current: true }
            ]}
          />
        </div>

        {/* Article Header */}
        <article className="py-8">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </button>

              {/* Article Meta */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article Excerpt */}
              {post.excerpt && post.excerpt.trim() && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Article Meta Info */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                </div>
                
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>

              {/* Featured Image */}
              {post.image && post.image !== '/images/blog-placeholder.jpg' && (
                <div className="mb-12">
                  <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Article Content */}
              <RichTextRenderer content={post.content} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Explore More Articles Section */}
              <div className="mt-20 pt-8 border-t border-gray-200 text-center">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Enjoyed this article?</h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Explore more insights, tips, and stories about AI agents, automation, and the future of business.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                  >
                    <BookOpen size={24} />
                    Browse More Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;