/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    sanityApiToken: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    sanityApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
