import { createClient } from 'next-sanity';

const projectId = process.env.sanityProjectId;
const dataset = process.env.sanityDataset;
const apiToken = process.env.sanityApiToken;
const apiVersion = process.env.sanityApiVersion;
const isDevMode = process.env.NODE_ENV === 'development';

if (!projectId || !dataset || !apiToken || !apiVersion) {
  throw new Error('Missing Sanity environment variables');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  token: apiToken,
  apiVersion,
  useCdn: !isDevMode,
});
