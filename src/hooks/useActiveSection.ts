'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { HeaderOptions } from '@/interfaces';

export const useActiveSection = (menuItems: HeaderOptions[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const sectionElements: Element[] = [];

    menuItems.forEach((item) => {
      const sectionId = item.href.split('#')[1];
      let element: Element | null = null;

      if (sectionId) {
        element = document.getElementById(sectionId);
      } else {
        // Handle the first section without an id
        element = document.querySelector('section');
      }

      if (element) {
        sectionElements.push(element);
      }
    });

    // If no sections are found, reset activeSection and exit early
    if (sectionElements.length === 0) {
      setActiveSection(null);
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    let currentActiveSection = '';

    const observerCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const newActiveSection = id ? (id === '#' ? id : `#${id}`) : '';
          if (currentActiveSection !== newActiveSection) {
            currentActiveSection = newActiveSection;
            setActiveSection(newActiveSection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe the section elements
    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [pathname, menuItems]);

  return activeSection;
};
