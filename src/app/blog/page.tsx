'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Calendar, User, Clock, ArrowRight, BookOpen, Loader2 } from 'lucide-react';
import { useBlogData } from '@/utils/useBlogData';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const {
    posts,
    categories,
    tags,
    loading,
    error,
    totalPosts,
    searchPosts,
    filterByTag,
    fetchPosts
  } = useBlogData();

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch posts for the selected page
    fetchPostsForPage(page);
  };

  const fetchPostsForPage = useCallback(async (page: number) => {
    await fetchPosts(page, postsPerPage);
  }, [fetchPosts, postsPerPage]);

  // Effect to fetch posts when page changes
  useEffect(() => {
    fetchPostsForPage(currentPage);
  }, [fetchPostsForPage, currentPage]);

  // Use the first post as featured article
  const featuredArticle = posts.length > 0 ? {
    title: posts[0].title,
    excerpt: posts[0].excerpt,
    author: posts[0].author,
    date: posts[0].date,
    readTime: posts[0].readTime,
    category: posts[0].category,
    image: posts[0].image,
    tags: posts[0].tags,
    slug: posts[0].slug
  } : null;



  // Use posts from CMS, excluding the first one (featured article)
  const recentArticles = posts.length > 1 ? posts.slice(1, 7).map(post => ({
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    image: post.image,
    slug: post.slug
  })) : [];

  // Use tags from CMS
  const popularTags = tags.map(tag => tag.title);

  const newsletterSignup = {
    title: 'Get the good stuff, straight to your inbox',
    description: 'No spam, no fluff — just real marketing insights, growth tips, and fresh ideas you can use right away. Join other founders and marketers who get smarter with every email.',
    placeholder: 'Enter your email address'
  };

  return (
    <>
      <SEO 
        title="amTop Blog - Insights on AI Agents, Automation & Business"
        description="Discover expert insights, tips, and stories about AI agents, automation, and the future of business. Stay ahead with practical advice from industry professionals."
        keywords={['AI agents', 'automation', 'business insights', 'AI technology', 'business automation', 'amTop blog']}
        type="blog"
        url="https://amtop.com/blog"
        image="/images/blog-og-image.jpg"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Breadcrumbs */}
        <div className="container-max section-padding-top pb-4">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog', current: true }
            ]}
          />
        </div>
        
        {/* Hero Section */}
        <section className="pt-8 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              amTop Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Growing a business is tough. We&apos;ve been there. That&apos;s why our blog is packed
              with straight-to-the-point lessons, stories, and playbooks you can actually use
              — no jargon, no fluff.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  onChange={(e) => {
                    if (e.target.value.trim()) {
                      searchPosts(e.target.value);
                    } else {
                      // Refetch all posts if search is cleared
                      fetchPosts();
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Loading and Error States */}
            {loading && (
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
                <Loader2 className="animate-spin" size={20} />
                <span>Loading articles...</span>
              </div>
            )}
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <p>Error: {error}</p>
                <button 
                  onClick={() => fetchPosts()}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Try again
                </button>
              </div>
            )}
            
            {!loading && !error && posts.length === 0 && (
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600">
                <p>No articles found. Try adjusting your search or check back later.</p>
              </div>
            )}
            
            {!loading && !error && posts.length === 0 && categories.length === 0 && tags.length === 0 && (
              <div className="mt-6 p-8 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Content Available</h3>
                <p className="text-gray-600 mb-4">
                  It looks like there&apos;s no blog content published yet. 
                  Please check back later or contact the administrator.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh Page
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <User size={16} />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => {
                      if (featuredArticle.slug) {
                        window.location.href = `/blog/${featuredArticle.slug}`;
                      }
                    }}
                  >
                    Read Full Article
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="bg-gray-200 rounded-2xl h-64 lg:h-96 flex items-center justify-center">
                  {featuredArticle.image && featuredArticle.image !== '/images/blog-placeholder.jpg' ? (
                    <Image 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <BookOpen size={48} className="mx-auto mb-4" />
                      <p>Featured Article Image</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}



      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay up to date with our latest insights and industry analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <div
                  key={article.title}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    if (article.slug) {
                      window.location.href = `/blog/${article.slug}`;
                    }
                  }}
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    {article.image && article.image !== '/images/blog-placeholder.jpg' ? (
                      <Image 
                        src={article.image} 
                        alt={article.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <BookOpen size={32} className="mx-auto mb-2" />
                        <p className="text-sm">Article Image</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <User size={14} />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                disabled={currentPage <= 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                disabled={currentPage >= totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
            
            <div className="text-center mt-4 text-sm text-gray-600">
              Page {currentPage} of {totalPages} • Showing {posts.length} articles
            </div>
          </div>
        </section>
      )}

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Topics
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore articles by popular tags and discover trending topics in our community.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => filterByTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-black">
        <div className="container-max">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {newsletterSignup.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {newsletterSignup.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={newsletterSignup.placeholder}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
        </div>
      </>
    );
  };

export default BlogPage;
