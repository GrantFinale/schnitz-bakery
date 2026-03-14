interface StructuredDataProps {
  breadcrumbs?: Array<{ name: string; href: string }>;
}

export default function StructuredData({ breadcrumbs }: StructuredDataProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Schnitz Bakery',
    description:
      'Artisan bakery in Grand Rapids, Michigan. Fresh bread delivered daily to restaurants, cafes, and businesses across West Michigan for over 25 years.',
    url: 'https://schnitzbakery.com',
    telephone: '616-988-2316',
    email: 'schnitzbakery@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '147 Lakeside DR NE, Suite 150',
      addressLocality: 'Grand Rapids',
      addressRegion: 'MI',
      postalCode: '49503',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    priceRange: '$$',
    image: 'https://schnitzbakery.com/logos/SCHNITZ-LOGO-TYPE-WHITE.png',
    areaServed: {
      '@type': 'GeoCircle',
      name: 'West Michigan',
    },
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Schnitz Bakery',
    url: 'https://schnitzbakery.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://schnitzbakery.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbList = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `https://schnitzbakery.com${crumb.href}`,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      {breadcrumbList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
      )}
    </>
  );
}
