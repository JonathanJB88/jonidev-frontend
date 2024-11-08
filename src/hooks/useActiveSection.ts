'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { HeaderOptions } from '@/interfaces';

export const useActiveSection = (menuItems: HeaderOptions[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id === '#' ? id : `#${id}`);
          } else {
            // Handle first section without id
            setActiveSection('');
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Get all section elements in order
    const sectionElements: Element[] = [];

    menuItems.forEach((item) => {
      const sectionId = item.href.split('#')[1];
      let element: Element | null = null;

      if (sectionId) {
        element = document.getElementById(sectionId);
      } else {
        // Handle first section without id
        element = document.querySelector('section');
      }

      if (element) {
        observer.observe(element);
        sectionElements.push(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [pathname]);

  return activeSection;
};
