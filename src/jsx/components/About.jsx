import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'React JS', pct: 85 },
  { name: 'HTML', pct: 90 },
  { name: 'CSS', pct: 88 },
  { name: 'Tailwind', pct: 82 },
  { name: 'TypeScript', pct: 75 },
  { name: 'Figma', pct: 78 },
  { name: 'Git', pct: 80 },
];

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              const width = bar.getAttribute('data-w') / 100;
              bar.style.transform = `scaleX(${width})`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className="section-label reveal">About</div>
      <h2 className="section-title reveal reveal-delay-1">A little bit<br /><span className="outline-static">about me</span></h2>
      <div className="about-grid">
        <div className="about-text reveal reveal-delay-2">
          <p>Hey! I'm <strong>Eshanth Arjun</strong>, a frontend developer fresher who genuinely loves building things for the web. I started with the basics — HTML, CSS, JavaScript — and haven't stopped since.</p>
          <p>I enjoy turning designs into real, working interfaces. Whether it's a small interactive component or a full page, I care about <strong>clean code, good UX, and attention to detail.</strong></p>
          <p>Right now I'm actively looking for my <strong>first frontend internship</strong> where I can contribute, learn from experienced developers, and grow fast. If you're building something cool, I'd love to be part of it.</p>
          <div className="about-cta">
            <a href="#contact" className="btn btn-primary">Let's connect →</a>
          </div>
        </div>
        <div className="skills-block reveal reveal-delay-3" ref={skillsRef}>
          <div className="skills-title">Core Skills</div>
          {skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-w={skill.pct}></div>
              </div>
              <span className="skill-pct">{skill.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
