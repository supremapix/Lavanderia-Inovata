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
  
  const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/' 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  const canonicalUrl = `${DOMAIN}${cleanPath}`;

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

  const ogImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;

  return (
    <Helmet>
      <meta name="google-site-verification" content="SrpI35v8t6X4DPizTXl20wgLcomCIbf4ObMKVVTcoPY" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Geolocation Meta Tags for Local SEO */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="Osasco" />
      <meta name="geo.position" content="-23.5329;-46.7919" />
      <meta name="ICBM" content="-23.5329, -46.7919" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Lavanderia Inovata" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;