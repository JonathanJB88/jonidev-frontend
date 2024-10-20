'use client';

import { usePathname, useRouter } from 'next/navigation';
import { scrollTo } from '@/utils';

import type { Locale } from '@/interfaces';

interface Props {
  currentLocale: Locale;
}

export const LangSwitcher = ({ currentLocale }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const onSwitch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newLocale = e.target.value as Locale;
    const hashSection = window?.location.hash;
    const isHashSectionEmpty = hashSection === '';
    const newPath = pathname.replace(currentLocale, newLocale);
    const newUrl = !isHashSectionEmpty ? `${newPath}${hashSection}` : newPath;

    const section = isHashSectionEmpty
      ? document.body
      : (document.querySelector(hashSection) as HTMLElement);

    if (section) {
      const top = section.offsetTop;
      scrollTo(top);
      router.push(newUrl, { scroll: false });
    }
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
