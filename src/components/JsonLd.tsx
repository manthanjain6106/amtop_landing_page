import { FC } from 'react';

interface Organization {
  '@context'?: string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email?: string;
  };
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

interface WebSite {
  '@context'?: string;
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  publisher: Organization;
}

interface WebPage {
  '@context'?: string;
  '@type': 'WebPage';
  name: string;
  url: string;
  description?: string;
  isPartOf: WebSite;
  breadcrumb?: {
    '@type': 'BreadcrumbList';
    itemListElement: Array<{
      '@type': 'ListItem';
      position: number;
      name: string;
      item: string;
    }>;
  };
}

interface Article {
  '@context'?: string;
  '@type': 'Article';
  headline: string;
  description: string;
  image?: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  publisher: Organization;
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface JsonLdProps {
  type: 'organization' | 'website' | 'webpage' | 'article';
  data: Organization | WebSite | WebPage | Article;
  breadcrumbs?: BreadcrumbItem[];
}

const JsonLd: FC<JsonLdProps> = ({ type, data, breadcrumbs }) => {
  let structuredData: Organization | WebSite | WebPage | Article = data;

  // Add breadcrumbs to webpage if provided
  if (type === 'webpage' && breadcrumbs && breadcrumbs.length > 0) {
    const webpageData = data as WebPage;
    structuredData = {
      ...webpageData,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.href,
        })),
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default JsonLd;

// Predefined structured data schemas
export const OrganizationSchema: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'amTop',
  url: 'https://amtop.com',
  logo: 'https://amtop.com/images/logo.png',
  description: 'AI automation platform that empowers businesses to work smarter, not harder.',
  sameAs: [
    'https://twitter.com/amtop',
    'https://linkedin.com/company/amtop',
    'https://facebook.com/amtop'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    email: 'contact@amtop.com'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 AI Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US'
  }
};

export const WebSiteSchema: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'amTop',
  url: 'https://amtop.com',
  description: 'AI automation platform for modern businesses',
  publisher: OrganizationSchema
};

export const WebPageSchema: WebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'amTop Homepage',
  url: 'https://amtop.com',
  description: 'Transform your business with AI automation',
  isPartOf: WebSiteSchema
};

export const ArticleSchema: Article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Getting Started with AI Automation',
  description: 'Learn how to implement AI automation in your business',
  author: {
    '@type': 'Person',
    name: 'AMTOP Team'
  },
  publisher: OrganizationSchema,
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://amtop.com/blog/getting-started'
  }
};

export const BreadcrumbListSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
