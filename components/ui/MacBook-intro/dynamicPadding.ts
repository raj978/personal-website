import { useEffect, useState } from 'react';

export const useDynamicPadding = () => {
  const [paddingTop, setPaddingTop] = useState('40rem');

  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let padding;
      const threshold = 768;
      if (width > threshold) {
         padding = 1100; // Set padding to a fixed value if threshold is exceeded
      } else if (width < 768) {
        padding = 80;
      } else {
        padding = Math.min(height, width);
      }

      setPaddingTop(`${padding}px`);
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);

    return () => {
      window.removeEventListener('resize', updatePadding);
    };
  }, []);

  return paddingTop;
};
