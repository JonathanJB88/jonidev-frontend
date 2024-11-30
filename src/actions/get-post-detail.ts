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
        // revalidate: 3600 * 24 * 30 * 12, // Every year
        revalidate: 1, // Every second
      },
    }
  );

  if (!postResponse) return null;

  const adaptedPost = postDetailAdapter(postResponse, lang);

  return adaptedPost;
};
