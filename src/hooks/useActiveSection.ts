import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useActiveSection = (href: string, offset = 0) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (href.includes('mailto:')) return;
      const scroll = window.scrollY;
      let top = 0,
        bottom = 0;
      const isInitSection = href.endsWith('#');

      if (isInitSection) {
        top = 0;
        bottom = window.innerHeight * 0.5;
      } else {
        const selector = href.split('#').pop()!;
        const section = document.querySelector(`#${selector}`) as HTMLElement;
        if (!section) return;
        top = section.offsetTop + offset;
        bottom = top + section.offsetHeight;
      }

      const inRange = scroll >= top && scroll < bottom;

      if (isInitSection && scroll <= bottom) {
        if (!isActive) {
          router.push(href, { scroll: false });
          setIsActive(true);
        }
      } else if (inRange) {
        if (!isActive) {
          router.push(href, { scroll: false });
          setIsActive(true);
        }
      } else {
        if (isActive) {
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
