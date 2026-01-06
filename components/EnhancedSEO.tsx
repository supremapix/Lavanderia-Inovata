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

const DOMAIN = 'https://www.lavanderiainovata.com.br';

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  image = `${DOMAIN}/og-image.jpg`,
  type = 'website',
  structuredData,
  breadcrumbs
}) => {
  const location = useLocation();
  
  // Clean pathname to avoid trailing slash inconsistencies
  const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/' 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  const canonicalUrl = `${DOMAIN}${cleanPath}`;

  // Generate Breadcrumb Schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${DOMAIN}${crumb.item.replace('/#', '').replace(DOMAIN, '')}`
    }))
  } : null;

  // Handle relative image paths for Open Graph
  const ogImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;

  return (
    <Helmet>
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="SrpI35v8t6X4DPizTXl20wgLcomCIbf4ObMKVVTcoPY" />

      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Lavanderia Inovata" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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