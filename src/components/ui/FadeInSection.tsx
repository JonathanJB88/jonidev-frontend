'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const FadeInSection = ({ children }: Props) => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      {
        threshold: 0.65,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

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
