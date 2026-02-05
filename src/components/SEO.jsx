import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data';

const SEO = ({
  title = `${companyInfo.name} | ${companyInfo.tagline}`,
  description = companyInfo.description,
  image = "/og-image.jpg",
  url = "https://techcorp.com",
  type = "website"
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    description: description,
    url: url,
    logo: `${url}/logo.png`,
    foundingDate: companyInfo.founded,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'customer service',
      email: companyInfo.email
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="web development, mobile apps, UI/UX design, cloud solutions, React, Node.js" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={companyInfo.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@coder" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={companyInfo.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;