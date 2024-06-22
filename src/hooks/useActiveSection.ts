import { useEffect, useState } from 'react';

export const useActiveSection = (href: string, offset = 0) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (href.startsWith('mailto:')) return;
      const scroll = window.scrollY;
      let top = 0,
        bottom = 0;
      const isInitSection = href === '/#';

      if (isInitSection) {
        top = 0;
        bottom = window.innerHeight * 0.5;
      } else {
        const section = document.querySelector(href.slice(1)) as HTMLElement;
        if (!section) return;
        top = section.offsetTop + offset;
        bottom = top + section.offsetHeight;
      }

      if (scroll >= top && scroll < bottom) {
        if (!isActive) {
          window.history.replaceState({}, '', href);
          setIsActive(true);
        }
      } else {
        if (isActive && isInitSection && scroll > bottom) {
          setIsActive(false);
        } else if (isActive) {
          setIsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [href, offset, isActive]);

  return isActive;
};
