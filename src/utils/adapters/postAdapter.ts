import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import type { Locale, Post, PostResponse } from '@/interfaces';

export const postAdapter = (posts: PostResponse[], lang: Locale): Post[] => {
  const locale = lang === 'en' ? enUS : es;

  return posts.map((post) => ({
    id: post._id || '',
    title: post.title?.[lang] || '',
    slug: post.slug?.[lang]?.current || '',
    postDate: format(new Date(post.publishedAt), 'MMM dd, yyyy', {
      locale: locale,
    }),
    description: post.excerpt?.[lang] || '',
  }));
};
