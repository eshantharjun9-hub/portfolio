import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1 className="hero-title reveal">
          YOUR VISION,<br />
          <span className="accent">MY MISSION</span>
        </h1>
        <p className="hero-sub reveal reveal-delay-1">
          Guiding the Creative Journey Together, Your Aspirations at the Heart of Every 
          Design - Where Your Unique Dreams Meet My Dedication to Craft Exceptional 
          Visual Experiences.
        </p>
        <div className="hero-cta reveal reveal-delay-2">
          <a href="#projects" className="btn btn-white">Explore My Portfolio →</a>
          <a href="#contact" className="btn btn-ghost">Hire Me →</a>
        </div>
      </div>

      <div className="hero-visual-container">
        <div className="unlock-hint">Hover to Unlock</div>
        <img src="/br.jpg" alt="Eshanth Arjun" className="hero-portrait" />
      </div>

      <div className="hero-stats reveal reveal-delay-3">
        <div className="stat-item">
          <span className="num">01</span>
          <span className="label">Year of Experience</span>
        </div>
        <div className="stat-item">
          <span className="num">03<span className="accent">+</span></span>
          <span className="label">Successful Projects</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
