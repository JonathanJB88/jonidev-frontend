'use client';

import { redirect, usePathname, useRouter } from 'next/navigation';
import { getTranslatedSlug } from '@/actions';
import type { Locale } from '@/interfaces';

const translations: Record<Locale, Record<string, string>> = {
  es: {
    '#experience': '#experiencia',
    '#projects': '#proyectos',
    '#about': '#sobre-mi',
    '#writing': '#blog',
    writing: 'publicaciones',
  },
  en: {
    '#experiencia': '#experience',
    '#proyectos': '#projects',
    '#sobre-mi': '#about',
    '#blog': '#writing',
    publicaciones: 'writing',
  },
};

const translateHash = (hash: string, locale: Locale): string => {
  return translations[locale][hash] || hash;
};

export const LangSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, currentPath, slug] = pathname
    .split('/')
    .filter(Boolean);

  const onSwitch = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newLocale = e.target.value as Locale;

    if (pathname.includes('publicaciones') || pathname.includes('writing')) {
      const translatedSlug = await getTranslatedSlug(
        currentLocale as Locale,
        newLocale,
        slug
      );
      if (!translatedSlug) redirect('/home');
      return router.push(
        `/${newLocale}/${translateHash(currentPath, newLocale)}/${translatedSlug}`,
        {
          scroll: false,
        }
      );
    }

    const newPath = pathname.replace(currentLocale, newLocale);
    const hashSection = window?.location.hash;

    const translatedHash = translateHash(hashSection, newLocale);
    const newUrl = translatedHash ? `${newPath}${translatedHash}` : newPath;

    router.push(newUrl, { scroll: true });
  };

  return (
    <>
      <div className='flex md:hidden'>
        <select
          onChange={onSwitch}
          value={currentLocale}
          className='w-full p-1 bg-charcoal text-softwhite text-body-xs border-none focus:outline-none focus:ring-0 focus:border-0 focus:ring-transparent focus:border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-softwhite'
        >
          <option value='es'>ES</option>
          <option value='en'>EN</option>
        </select>
      </div>
      <div className='hidden md:flex absolute right-8 top-6'>
        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            value={currentLocale === 'en' ? 'es' : 'en'}
            onChange={onSwitch}
            checked={currentLocale === 'es'}
            className='peer sr-only'
          />
          <div className="peer flex h-8 items-center gap-4 px-3 after:absolute after:left-1 after:h-6 after:w-9 after:bg-white/40 after:transition-all after:content-[''] bg-charcoal peer-checked:after:translate-x-full peer-focus:outline-none text-softwhite">
            <span className='text-body-xs'>EN</span>
            <span className='text-body-xs'>ES</span>
          </div>
        </label>
      </div>
    </>
  );
};
