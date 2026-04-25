import React from 'react';

const projectsData = [
  {
    id: 1,
    num: '01 / Featured',
    tag: 'Weather App',
    name: 'Weather App 🌤️',
    desc: 'A real-time weather app where users can search any city and instantly get current conditions. I integrated a live weather API, handled async data fetching, and made the layout fully responsive across all screen sizes.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    link: 'https://weather-app-kappa-pied-85.vercel.app/',
    image: '/weather-preview.png',
    featured: true,
  },
  {
    id: 2,
    num: '02',
    tag: 'Interactive',
    name: 'Drum Kit 🥁',
    desc: 'A fun interactive drum machine that plays sounds on keypress or click. Built to practice DOM events, keyboard listeners, and CSS animations — great for exploring how the browser handles user input.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Audio'],
    link: 'https://eshantharjun9-hub.github.io/drum-kit/',
    isDrumKit: true,
  },
  {
    id: 3,
    num: '03',
    tag: 'Productivity',
    name: 'My Notes ✨',
    desc: 'A minimal notes app that saves your thoughts right in the browser. I used LocalStorage to keep notes persistent across sessions — no backend needed. Clean UI, instant updates, zero clutter.',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    link: 'https://nots-app-eight.vercel.app/',
    isNotes: true,
  },
  {
    id: 4,
    num: '04',
    tag: 'Game',
    name: 'Super Mario Brown',
    desc: 'A browser-based platformer game inspired by the classic Super Mario. Built using React to explore game mechanics, sprite animations, collision detection, and keyboard controls.',
    stack: ['React', 'JavaScript', 'CSS'],
    link: 'https://super-mario-brown.vercel.app/',
    image: '/mario-preview.png',
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-label reveal">Selected Work</div>
      <h2 className="section-title reveal reveal-delay-1">Things I've<br />Built</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${project.featured ? 'featured' : ''} reveal reveal-delay-${index % 2 === 0 ? '1' : '1'}`}
          >
            <div>
              <div className="project-num">{project.num}</div>
              <div className="project-tag">{project.tag}</div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
              </div>
              
              {project.isDrumKit && (
                <div className="drum-keys-preview">
                  {['D', 'F', 'G', 'H', 'J', 'K'].map(k => <span key={k} className="dk">{k}</span>)}
                </div>
              )}

              {project.isNotes && (
                <div className="notes-preview">
                  <div className="note-chip">📝 Meeting notes...</div>
                  <div className="note-chip">💡 New idea...</div>
                  <div className="note-chip add-chip">＋ New note</div>
                </div>
              )}

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: project.isDrumKit || project.isNotes ? '20px' : '0' }}>
                View Live Project
              </a>
            </div>

            {project.image && (
              <div className={`project-visual ${project.id === 1 ? 'weather-visual' : 'mario-visual'}`}>
                <img src={project.image} alt={`${project.name} Preview`} className="project-screenshot" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
