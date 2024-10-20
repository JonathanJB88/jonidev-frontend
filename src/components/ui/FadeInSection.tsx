'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  delay?: number;
}

export const FadeInSection = ({ children, delay = 0.1 }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut', delay },
    },
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          controls.start('visible');
          hasAnimated.current = true;
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <motion.div
      ref={sectionRef}
      initial='hidden'
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
