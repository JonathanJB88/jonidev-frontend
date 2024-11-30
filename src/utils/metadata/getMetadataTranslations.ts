import { Locale, MetadataTranslations } from '@/interfaces';

const defaultKeywords = [
  'Jonathan Bracho',
  'React',
  'TypeScript',
  'Next.js',
  'JavaScript',
  'Portfolio',
  'Blog',
  'GraphQL',
  'APIs',
  'Agile',
  'Scrum',
  'UX/UI',
  'Azure',
  'Open Source',
  'Testing',
];

const metadataTranslations: Record<Locale, MetadataTranslations> = {
  es: {
    title: {
      default: 'Jonathan Bracho - Desarrollador Frontend',
      template: '%s | Jonathan Bracho - Desarrollador Frontend',
    },
    description:
      'Bienvenido al portafolio profesional de Jonathan Bracho, Desarrollador Frontend especializado en React, TypeScript, Next.js y tecnologías web modernas. Explora mis proyectos, lee mis artículos de blog y descubre cómo optimizo aplicaciones para SEO y experiencia de usuario.',
    keywords: [
      ...defaultKeywords,
      'Jonathan Bracho',
      'Desarrollador Frontend',
      'Asistente de IA',
      'Desarrollo Web',
      'Optimización SEO',
    ],
    openGraph: {
      title: 'Jonathan Bracho - Desarrollador Frontend',
      description:
        'Explora el portafolio profesional de Jonathan Bracho, donde encontrarás proyectos innovadores, artículos de blog y soluciones avanzadas en desarrollo frontend.',
      locale: 'es_ES',
    },
    twitter: {
      title: 'Jonathan Bracho - Desarrollador Frontend',
      description:
        'Visita mi portafolio para conocer mis proyectos, leer artículos y descubrir cómo puedo ayudar a impulsar tu negocio con tecnologías web modernas.',
    },
  },
  en: {
    title: {
      default: 'Jonathan Bracho - Frontend Developer',
      template: '%s | Jonathan Bracho - Frontend Developer',
    },
    description:
      'Welcome to the professional portfolio of Jonathan Bracho, a Frontend Developer specializing in React, TypeScript, Next.js, and modern web technologies. Explore my projects, read my blog articles, and discover how I optimize applications for SEO and user experience.',
    keywords: [
      ...defaultKeywords,
      'Jonathan Bracho',
      'Frontend Developer',
      'AI Assistant',
      'Web Development',
      'SEO Optimization',
    ],
    openGraph: {
      title: 'Jonathan Bracho - Frontend Developer',
      description:
        'Explore the professional portfolio of Jonathan Bracho, featuring innovative projects, blog articles, and advanced frontend development solutions.',
      locale: 'en_US',
    },
    twitter: {
      title: 'Jonathan Bracho - Frontend Developer',
      description:
        'Visit my portfolio to discover my projects, read articles, and learn how I can help enhance your business with modern web technologies.',
    },
  },
};

export const getMetadataTranslations = (
  locale: Locale
): MetadataTranslations => {
  const baseDomain = process.env.originDomain;
  const baseUrl = process.env.baseUrl;
  const translations =
    metadataTranslations[locale] || metadataTranslations['en'];

  return {
    ...translations,
    alternates: {
      canonical: `${baseDomain}/${locale}/${baseUrl}`,
      languages: {
        'en-US': `${baseDomain}/en/${baseUrl}`,
        'es-ES': `${baseDomain}/es/${baseUrl}`,
      },
    },
  };
};
