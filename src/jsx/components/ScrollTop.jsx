import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setProgress(scrolled);
      setVisible(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`scroll-top ${visible ? 'visible' : ''}`} 
      onClick={scrollToTop}
    >
      <svg className="progress-circle" width="50" height="50" viewBox="0 0 50 50">
        <circle 
          className="bg" 
          cx="25" cy="25" r="20" 
          fill="none" strokeWidth="2" 
        />
        <circle 
          className="bar" 
          cx="25" cy="25" r="20" 
          fill="none" strokeWidth="2"
          strokeDasharray="125.6"
          style={{ strokeDashoffset: 125.6 - (125.6 * progress) / 100 }}
        />
      </svg>
      <div className="arrow">↑</div>
    </div>
  );
};

export default ScrollTop;
