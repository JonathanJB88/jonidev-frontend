'use server';

import { sanityClient } from '@/utils';
import { postBySlugQuery } from '@/queries';
import type { Locale, PostResponse } from '@/interfaces';

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
        revalidate: process.env.NODE_ENV === 'development' ? 1 : 3600 * 24 * 7, // Every week
      },
    }
  );

  return postSlug?.slug?.[newLang]?.current || '';
};
