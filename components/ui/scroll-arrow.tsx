'use client';
import React, { useEffect, useState } from 'react';


const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScrollBottom = () => {
      // Check if the user is close to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', checkScrollBottom);

    return () => window.removeEventListener('scroll', checkScrollBottom);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator" onClick={() => window.scrollBy({ top: window.innerHeight/0.1, behavior: 'smooth' })}>
      ↓
    </div>
  );
};

export default ScrollDownIndicator;
