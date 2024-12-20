/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    originDomain:
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_PROD_URL
        : process.env.NEXT_PUBLIC_DEV_URL,
    sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    sanityApiToken: process.env.SANITY_API_TOKEN,
    sanityApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    openAiApiKey: process.env.OPENAI_API_KEY,
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
