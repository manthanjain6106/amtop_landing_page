import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'blog'
  publishedAt?: string
  updatedAt?: string
  category?: string
  tags?: string[]
  noIndex?: boolean
  noFollow?: boolean
  canonical?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'AMTOP - Advanced Management Tools & Operations Platform',
  description = 'AMTOP provides advanced management tools and operations platform for modern businesses. Discover powerful solutions for analytics, automation, and team collaboration.',
  keywords = ['management tools', 'operations platform', 'business analytics', 'team collaboration', 'automation', 'AMTOP'],
  author = 'AMTOP Team',
  image = '/images/og-image.jpg',
  url = 'https://amtop.com',
  type = 'website',
  publishedAt,
  updatedAt,
  category,
  tags = [],
  noIndex = false,
  noFollow = false,
  canonical
}) => {
  const fullTitle = title === 'AMTOP - Advanced Management Tools & Operations Platform' 
    ? title 
    : `${title} | AMTOP`
  
  const fullUrl = canonical || url
  const fullImage = image.startsWith('http') ? image : `https://amtop.com${image}`

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      name: title,
      description,
      url: fullUrl,
      image: fullImage,
      publisher: {
        '@type': 'Organization',
        name: 'AMTOP',
        url: 'https://amtop.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://amtop.com/images/logo.png',
          width: 200,
          height: 60
        },
        sameAs: [
          'https://twitter.com/amtop',
          'https://linkedin.com/company/amtop',
          'https://facebook.com/amtop'
        ]
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl
      }
    }

    if (type === 'article' && publishedAt) {
      return {
        ...baseData,
        '@type': 'Article',
        author: {
          '@type': 'Person',
          name: author
        },
        datePublished: publishedAt,
        dateModified: updatedAt || publishedAt,
        headline: title,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl
        },
        ...(category && {
          articleSection: category
        }),
        ...(tags.length > 0 && {
          keywords: tags.join(', ')
        })
      }
    }

    return baseData
  }

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    if (type === 'article' && category) {
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://amtop.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://amtop.com/blog'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category,
            item: `https://amtop.com/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: title,
            item: fullUrl
          }
        ]
      }
    }

    return null
  }

  const structuredData = generateStructuredData()
  const breadcrumbData = generateBreadcrumbData()

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {!noIndex && !noFollow && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="AMTOP" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@amtop" />
      <meta name="twitter:creator" content="@amtop" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedAt && (
        <>
          <meta property="article:published_time" content={publishedAt} />
          {updatedAt && <meta property="article:modified_time" content={updatedAt} />}
          {author && <meta property="article:author" content={author} />}
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData)
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://storage.googleapis.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}

export default SEO
