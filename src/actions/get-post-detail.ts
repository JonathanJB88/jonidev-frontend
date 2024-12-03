'use server';

import { postDetailAdapter, sanityClient } from '@/utils';
import { postDetailQuery } from '@/queries';
import type { Locale, PostDetail, PostDetailResponse } from '@/interfaces';

export const getPostDetail = async (
  slug: string,
  lang: Locale
): Promise<PostDetail | null> => {
  const postResponse = await sanityClient.fetch<PostDetailResponse>(
    postDetailQuery,
    { slug, lang },
    {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 1 : 3600 * 24 * 7, // Every week
      },
    }
  );

  if (!postResponse) return null;

  const adaptedPost = postDetailAdapter(postResponse, lang);

  return adaptedPost;
};
