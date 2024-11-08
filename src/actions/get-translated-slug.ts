'use server';

import { postAdapter, sanityClient } from '@/utils';
import { postBySlugQuery } from '@/queries';
import { Locale, Post, PostResponse } from '@/interfaces';

export const getTranslatedSlug = async (
  currentLang: Locale,
  newLang: Locale,
  slug: string
) => {
  const postSlug = await sanityClient.fetch(
    postBySlugQuery,
    { slug, lang: currentLang },
    {
      next: {
        // revalidate: 3600 * 24 * 7, // Every week
        revalidate: 1, // Every second
      },
    }
  );

  return postSlug.slug[newLang].current;
};
