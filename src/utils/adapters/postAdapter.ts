import { format, parseISO } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { Locale, Post, PostResponse } from '@/interfaces';

export const postAdapter = (posts: PostResponse[], lang: Locale): Post[] => {
  const locale = lang === 'en' ? enUS : es;

  return posts
    .filter((post) => !post._id.includes('draft'))
    .map((post) => ({
      id: post._id || '',
      title: post.title?.[lang] || '',
      slug: post.slug?.[lang]?.current || '',
      postDate: format(new Date(post.publishedAt), 'MMM dd, yyyy', {
        locale: locale,
      }),
      description: post.excerpt?.[lang] || '',
    }));
};
