'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { debounce } from 'lodash';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentId =
        sectionIds.find((id) => {
          const section = document.getElementById(id);
          if (!section) return false;

          const { top, bottom } = section.getBoundingClientRect();
          return top <= 0 && bottom > 0;
        }) || '';

      if (currentId !== activeSection) {
        setActiveSection(currentId);
        router.replace(`${pathname}#${currentId}`, { scroll: false });
      } else if (currentId === '' && activeSection !== '') {
        setActiveSection('');
        router.replace(pathname, { scroll: false });
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 25);

    window?.addEventListener('scroll', debouncedHandleScroll);
    handleScroll();

    return () => {
      window?.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [pathname]);

  return activeSection;
};
