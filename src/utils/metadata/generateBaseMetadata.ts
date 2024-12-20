import type { Metadata } from 'next';
import type { Locale } from '@/interfaces';
import { getMetadataTranslations } from '@/utils';

interface Params {
  params: Record<'lang', Locale>;
}

export const generateBaseMetadata = ({
  params,
}: Readonly<Params>): Metadata => {
  const metadata = getMetadataTranslations(params.lang);
  const originDomain = process.env.originDomain;

  if (!originDomain) {
    throw new Error('originDomain is not defined');
  }

  const baseDomain = new URL(originDomain);

  return {
    metadataBase: baseDomain,
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(', '),
    authors: [
      {
        name: 'Jonathan Bracho - Frontend Developer',
        url: baseDomain,
      },
    ],
    creator: 'Jonathan Bracho - Frontend Developer',
    openGraph: {
      ...metadata.openGraph,
      url: baseDomain,
      siteName: metadata.openGraph.title,
      images: [
        {
          url: '/img/jonathan_bracho-logo.png',
          width: 1200,
          height: 630,
          alt:
            params.lang === 'es'
              ? `Imagen de portada del portfolio de ${metadata.openGraph.title}`
              : `Cover image of ${metadata.openGraph.title}'s portfolio`,
        },
      ],
      type: 'website',
    },
    twitter: {
      ...metadata.twitter,
      card: 'summary_large_image',
      creator: '@JonathanDev88',
      images: ['/img/jonathan_bracho-logo.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    alternates: metadata.alternates,

    // ! Google verification in case you need it
    // verification: {
    //   google: 'tuCodigoDeVerificacionGoogle',
    // },
  };
};
