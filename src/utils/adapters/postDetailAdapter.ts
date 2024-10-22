import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import type { Locale, PostDetail, PostDetailResponse } from '@/interfaces';

export const postDetailAdapter = (
  post: PostDetailResponse,
  lang: Locale
): PostDetail => {
  const locale = lang === 'en' ? enUS : es;

  return {
    id: post._id || '',
    title: post.title?.[lang] || '',
    slug: post.slug?.[lang]?.current || '',
    postDate: format(new Date(post.publishedAt), 'MMM dd, yyyy', {
      locale: locale,
    }),
    description: post.excerpt?.[lang] || '',
    tags: post.tags,
    cover: post.coverImage,
    author: post.author,
    body: post.body?.[lang] || [],
  };
};
