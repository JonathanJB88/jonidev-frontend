import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/utils';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};
