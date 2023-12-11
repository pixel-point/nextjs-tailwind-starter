const SITE_URL = 'https://example.com';
const SITE_NAME = 'Example Name';
const TYPE = 'website';

export const DEFAULT_IMAGE_PATH = '/images/cool-page.jpg';

export default function getMetadata({
  title,
  description,
  pathname,
  imagePath = DEFAULT_IMAGE_PATH,
  isRobotsIndexPage = true,
} = {}) {
  const canonicalUrl = pathname ? (pathname === '/' ? SITE_URL : SITE_URL + pathname) : false;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [{ url: '/favicon/favicon-32x32.png', type: 'image/png' }],
      apple: [
        { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/favicon/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicon/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
        { url: '/favicon/favicon-384x384.png', sizes: '384x384', type: 'image/png' },
        { url: '/favicon/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
        },
      ],
      type: TYPE,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: isRobotsIndexPage,
    },
  };
}
