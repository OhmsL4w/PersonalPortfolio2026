'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const handleScroll = () => {
      const landing = document.getElementById('landing');
      if (!landing) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out landing page as user scrolls
      if (scrollY < windowHeight) {
        const opacity = 1 - scrollY / windowHeight;
        landing.style.opacity = String(opacity);

        if (scrollY > windowHeight * 0.8) {
          landing.style.pointerEvents = 'none';
        } else {
          landing.style.pointerEvents = 'auto';
        }
      } else {
        landing.style.opacity = '0';
        landing.style.pointerEvents = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
