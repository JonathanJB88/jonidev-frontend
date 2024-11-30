import type { Metadata } from 'next';
import { getPostDetail, getTranslatedSlug } from '@/actions';
import { getMetadataTranslations } from '@/utils';

import type { Locale } from '@/interfaces';

interface Params {
  lang: Locale;
  route: 'writing' | 'publicaciones';
  slug: string;
}

export const generatePostMetadata = async ({
  params,
}: {
  params: Readonly<Params>;
}): Promise<Metadata> => {
  const { lang, slug, route } = params;
  const baseDomain = process.env.originDomain;
  const post = await getPostDetail(slug, lang);
  const enSlug = await getTranslatedSlug(lang, 'en', slug);
  const esSlug = await getTranslatedSlug(lang, 'es', slug);

  if (!post) {
    return {
      title: lang === 'en' ? 'Post not found' : 'Post no encontrado',
      description:
        lang === 'en'
          ? 'The post you are looking for does not exist.'
          : 'El post que buscas no existe.',
    };
  }

  const metadata = getMetadataTranslations(lang);

  return {
    title: post.title,
    description: post.description || metadata.description,
    keywords: [...metadata.keywords, ...post.tags].join(', '),
    openGraph: {
      title: post.title,
      description: post.description || metadata.openGraph.description,
      url: `${baseDomain}/${lang}/${route}/${slug}`,
      type: 'article',
      images: [
        {
          url: post.cover || `${baseDomain}/img/jonathan_bracho-logo.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || metadata.twitter.description,
      images: post.cover || `${baseDomain}/img/jonathan_bracho-logo.png`,
    },
    alternates: {
      canonical: `${baseDomain}/${lang}/${route}/${slug}`,
      languages: {
        'en-US': `${baseDomain}/en/writing/${enSlug}`,
        'es-ES': `${baseDomain}/es/publicaciones/${esSlug}`,
      },
    },
  };
};
