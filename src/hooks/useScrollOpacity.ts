import { useEffect, useState } from 'react';

export const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const newOpacity = 1 - window.scrollY / window.innerHeight;
    setOpacity(Math.max(newOpacity, 0));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { opacity };
};
