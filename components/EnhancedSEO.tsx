import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface EnhancedSEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'business.business';
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  image = 'https://lavanderiainovata.vercel.app/og-image.jpg', // Replace with actual default OG image
  type = 'website',
  structuredData,
  breadcrumbs
}) => {
  const location = useLocation();
  // Fixed: Remove hash from canonical URL for standard routing
  const canonicalUrl = `https://lavanderiainovata.vercel.app${location.pathname}`;

  // Generate Breadcrumb Schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      // Fixed: Remove hash from breadcrumb items
      "item": `https://lavanderiainovata.vercel.app${crumb.item.replace('/#', '')}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Lavanderia Inovata" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;