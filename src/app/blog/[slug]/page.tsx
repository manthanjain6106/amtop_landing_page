'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';

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
  content: {
    root: {
      children: Array<{
        type: string;
        depth?: number;
        children?: Array<{
          text: string;
          bold?: boolean;
          italic?: boolean;
        }>;
      }>;
    };
  };
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        
        if (data.success && data.posts.length > 0) {
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

  const handleBackToBlog = () => {
    window.history.back();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || '',
        text: post?.excerpt || '',
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <SEO 
          title="Loading... - AMTOP Blog"
          description="Loading blog post..."
          type="article"
        />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container-max pt-24 pb-20">
            <div className="flex items-center justify-center min-h-[60vh]">
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
          title="Post Not Found - AMTOP Blog"
          description="The requested blog post could not be found."
          type="article"
        />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container-max pt-24 pb-20">
            <div className="text-center">
              <BookOpen size={64} className="mx-auto mb-6 text-gray-400" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you&apos;re looking for could not be found.</p>
              <button
                onClick={handleBackToBlog}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </button>
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
        title={`${post.title} - AMTOP Blog`}
        description={post.excerpt}
        keywords={post.tags}
        type="article"
        url={`https://amtop.com/blog/${post.slug}`}
        image={post.image}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Breadcrumbs */}
        <div className="container-max pt-24 pb-4">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}`, current: true }
            ]}
          />
        </div>
        
        {/* Article Header */}
        <section className="pt-8 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-max">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={handleBackToBlog}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </button>

              {/* Category and Read Time */}
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author and Date */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-gray-600">
                    <User size={20} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    {post.date}
                  </span>
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && post.image !== '/images/blog-placeholder.jpg' && (
          <section className="py-16 bg-white">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto prose prose-lg prose-gray max-w-none"
            >
              {/* Render the content based on the content structure */}
              {post.content && post.content.root && post.content.root.children ? (
                <div className="space-y-6">
                  {post.content.root.children.map((child, index) => {
                    if (child.type === 'paragraph') {
                      return (
                        <p key={index} className="text-lg text-gray-700 leading-relaxed">
                          {child.children && child.children.map((textChild, textIndex) => (
                            <span key={textIndex}>
                              {textChild.bold ? (
                                <strong>{textChild.text}</strong>
                              ) : textChild.italic ? (
                                <em>{textChild.text}</em>
                              ) : (
                                textChild.text
                              )}
                            </span>
                          ))}
                        </p>
                      );
                    }
                    if (child.type === 'heading') {
                      const HeadingTag = `h${child.depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                      return (
                        <HeadingTag key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {child.children && child.children.map((textChild, textIndex) => (
                            <span key={textIndex}>{textChild.text}</span>
                          ))}
                        </HeadingTag>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">Content is being prepared...</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enjoyed this article?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore more insights, tips, and stories about AI agents, automation, and the future of business.
              </p>
              <button
                onClick={handleBackToBlog}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                <BookOpen size={20} />
                Browse More Articles
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
