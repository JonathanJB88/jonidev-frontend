'use server';

import { sanityClient } from '@/utils';
import { postBySlugQuery } from '@/queries';
import { Locale, PostResponse } from '@/interfaces';

export const getTranslatedSlug = async (
  currentLang: Locale,
  newLang: Locale,
  slug: string
): Promise<string> => {
  const postSlug = await sanityClient.fetch<Partial<PostResponse>>(
    postBySlugQuery,
    { slug, lang: currentLang },
    {
      next: {
        // revalidate: 3600 * 24 * 7, // Every week
        revalidate: 1, // Every second
      },
    }
  );

  return postSlug?.slug?.[newLang]?.current || '';
};
