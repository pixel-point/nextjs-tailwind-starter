const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
// FIXME: Add real data for your site
const SITE_NAME = 'Pixel Point Next.js Tailwind Starter';
// FIXME: Add an image for displaying on social networks, remember that this image must meet the size of 1200x630
// For example: /images/social-previews/index.jpg
const DEFAULT_IMAGE_PATH = '';

export default function getMetadata({
  title,
  description,
  robotsNoindex,
  pathname,
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
} = {}) {
  const canonicalUrl = SITE_URL + pathname;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  const robots = robotsNoindex === 'noindex' ? { index: false } : null;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    robots,
    // FIXME: Generate favicons with Favpie - https://github.com/pixel-point/favpie
    // manifest: `${SITE_URL}/manifest.json`,
    // icons: {
    //   icon: '/favicon/favicon.png',
    //   apple: [
    //     { url: '/favicon/favicon.png' },
    //     { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    //     { url: '/favicon/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
    //     { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    //     { url: '/favicon/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
    //     { url: '/favicon/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    //     { url: '/favicon/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
    //     { url: '/favicon/favicon-384x384.png', sizes: '384x384', type: 'image/png' },
    //     { url: '/favicon/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    //   ],
    // },
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
      type,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}
