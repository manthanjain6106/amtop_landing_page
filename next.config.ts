import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    domains: ['cms.amtop.com', 'storage.googleapis.com', 'cdn.amtop.com', 'payload-cms-sandy.vercel.app', 'blog.amtop.in'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600',
          },
        ],
      },
      {
        source: '/blog/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=7200',
          },
        ],
      },
    ];
  },

  // Redirects for SEO and user experience
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/post/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },

  // Rewrites for API proxying
  async rewrites() {
    // Only add the CMS rewrite if PAYLOAD_API_URL is configured
    if (process.env.PAYLOAD_API_URL) {
      return [
        {
          source: '/api/cms/:path*',
          destination: `https://${process.env.PAYLOAD_API_URL}/:path*`,
        },
      ];
    }
    
    // For development, you can uncomment the line below and set PAYLOAD_API_URL in your environment
    // or create a .env.local file with: PAYLOAD_API_URL=http://localhost:3001/api
    console.log('⚠️  PAYLOAD_API_URL not configured. CMS API calls will not work.');
    console.log('💡 To enable CMS integration, set PAYLOAD_API_URL in your environment variables.');
    
    return [];
  },

  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }

    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    scrollRestoration: true,
  },

  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Output configuration
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
