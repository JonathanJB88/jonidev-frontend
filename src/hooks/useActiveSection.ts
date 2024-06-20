import { useEffect, useState } from 'react';

export const useActiveSection = (href: string, offset = 0) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (href.startsWith('mailto:')) return;
      const isInitSection = href === '/#';

      let top = 0,
        bottom = 0;

      if (!isInitSection) {
        const section = document.querySelector(href.slice(1)) as HTMLElement;
        if (!section) return;
        top = section.offsetTop + offset;
        bottom = top + section.offsetHeight;
      }

      const scroll = window.scrollY;

      if (scroll >= top && scroll < bottom) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href, offset]);

  return isActive;
};
