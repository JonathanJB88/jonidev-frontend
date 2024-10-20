import Image from 'next/image';
import { HeaderNav, LangSwitcher } from '@/components';
import type { HeaderOptions, HeaderTranslations, Locale } from '@/interfaces';

interface Props {
  translations: HeaderTranslations;
  locale: Locale;
}

const baseUrl = process.env.baseUrl;

const getMenuItems = (
  trans: HeaderTranslations,
  locale: Locale
): HeaderOptions[] => [
  {
    node: (
      <Image
        src='/img/jonathan_bracho-logo.png'
        alt='Jonathan Bracho Logo'
        width={50}
        height={50}
      />
    ),
    href: `/${locale}/${baseUrl}#`,
  },
  {
    node: trans.experience.title,
    href: `/${locale}/${baseUrl}#${trans.experience.href}`,
  },
  {
    node: trans.projects.title,
    href: `/${locale}/${baseUrl}#${trans.projects.href}`,
  },
  {
    node: trans.about.title,
    href: `/${locale}/${baseUrl}#${trans.about.href}`,
  },
  {
    node: trans.writing.title,
    href: `/${locale}/${baseUrl}#${trans.writing.href}`,
  },
  {
    node: trans.contact.title,
    href: trans.contact.href,
    mobileHidden: true,
  },
];

export const Header = ({ translations, locale }: Props) => {
  const menuItems = getMenuItems(translations, locale);

  return (
    <header className='flex items-center justify-between p-4 w-full fixed top-0 z-10 text-softwhite'>
      <HeaderNav menuItems={menuItems} />
      <LangSwitcher currentLocale={locale} />
    </header>
  );
};
