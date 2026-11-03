import { siteConfig } from '@/config/siteConfig';
import { foundersData } from '@/data/foundersData';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/brand/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Solapur',
      addressLocality: 'Solapur',
      addressRegion: 'Maharashtra',
      postalCode: '413001',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phonePrimary,
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    ],
    founder: foundersData.map((f) => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
      url: f.linkedinUrl,
    })),
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.baseUrl}/#website`,
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    description: siteConfig.tagline,
    publisher: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

