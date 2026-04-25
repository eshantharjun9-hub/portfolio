import { useEffect } from 'react';

/**
 * Hook to apply the 'visible' class to elements with 'reveal' class when they enter the viewport.
 */
export const useReveal = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      revealEls.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);
};
