import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.sanityProjectId;
const dataset = process.env.sanityDataset;
const apiToken = process.env.sanityApiToken;
const apiVersion = process.env.sanityApiVersion;

export const sanityClient = createClient({
  projectId,
  dataset,
  token: apiToken,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}
