import Image from 'next/image';
import { LangSwitcher, NavItem } from '@/components';
import type { HeaderTranslations, Locale } from '@/interfaces';

interface Props {
  translations: HeaderTranslations;
  locale: Locale;
}

const baseUrl = process.env.baseUrl;

const getMenuItems = (trans: HeaderTranslations, locale: Locale) => [
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
      <nav className='flex mx-auto justify-center items-center overflow-hidden'>
        {menuItems.map(({ node, href, mobileHidden }) => (
          <NavItem
            key={href}
            node={node}
            href={href}
            mobileHidden={mobileHidden}
          />
        ))}
      </nav>

      <LangSwitcher currentLocale={locale} />
    </header>
  );
};
