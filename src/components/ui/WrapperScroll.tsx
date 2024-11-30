'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scrollTo } from '@/utils';

interface Props {
  children: ReactNode;
}

export const WrapperScroll = ({ children }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window?.location.hash || '#';
      const isInitSection = hash === '#';

      const section = !isInitSection
        ? (document.querySelector(hash) as HTMLElement)
        : null;

      if (section) {
        const top = section.offsetTop;
        scrollTo(top);
      } else if (isInitSection) {
        window?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  return <>{children}</>;
};
