'use server';

import { postAdapter, sanityClient } from '@/utils';
import { postQuery } from '@/queries';
import { Locale, Post, PostResponse } from '@/interfaces';

export const getAllPosts = async (lang: Locale): Promise<Post[]> => {
  const posts = await sanityClient.fetch<PostResponse[]>(
    postQuery,
    {},
    {
      next: {
        revalidate: 3600 * 24 * 7, // Every week
      },
    }
  );

  const adaptedPosts = postAdapter(posts, lang);

  return adaptedPosts;
};
