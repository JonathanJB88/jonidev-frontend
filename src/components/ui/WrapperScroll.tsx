'use client';

import { ReactNode, useEffect } from 'react';
import { scrollTo } from '@/utils';

interface Props {
  children: ReactNode;
}

export const WrapperScroll = ({ children }: Props) => {
  useEffect(() => {
    const hash = window?.location.hash || '#';
    const isInitSection = hash === '#';

    const section = isInitSection
      ? document.body
      : (document.querySelector(hash) as HTMLElement);

    if (section) {
      const top = section.offsetTop;
      scrollTo(top);
    }
  }, []);

  return children;
};
