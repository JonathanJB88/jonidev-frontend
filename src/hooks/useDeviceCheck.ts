import { useState, useEffect, useCallback } from 'react';

export const useDeviceCheck = (mobileWidthThreshold = 769) => {
  const [width, setWidth] = useState(0);

  const getIsMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return width < mobileWidthThreshold;
    }
    return false;
  }, [mobileWidthThreshold]);

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getIsMobile]);

  return { isMobile, setIsMobile, width };
};
