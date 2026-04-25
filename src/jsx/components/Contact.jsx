import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner reveal">
        <div className="section-label contact-section-label">Contact</div>
        <div className="contact-headline">
          Open to<br />internship <span className="outline">opportunities.</span>
        </div>
        <p className="contact-sub">I'm actively looking for my first frontend internship. If you think I'd be a good fit for your team, I'd love to hear from you!</p>
        <div className="contact-links">
          <a href="mailto:eshantharjun@example.com" className="contact-link">✉ Email</a>
          <a href="https://www.linkedin.com/in/eshanth-arjun" target="_blank" rel="noopener noreferrer" className="contact-link">↗ LinkedIn</a>
          <a href="https://github.com/eshantharjun9-hub" target="_blank" rel="noopener noreferrer" className="contact-link">↗ GitHub</a>
          <a href="https://www.instagram.com/eshanthhhhh" target="_blank" rel="noopener noreferrer" className="contact-link">↗ Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
