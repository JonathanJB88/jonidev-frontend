import 'server-only';

import type { Locale, SiteTranslations } from '@/interfaces';

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  es: () => import('./locales/es.json').then((module) => module.default),
};

export const getDictionary = async (
  locale: Locale
): Promise<SiteTranslations> => dictionaries[locale]();
