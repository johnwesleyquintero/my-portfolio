import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-section py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-[var(--text-secondary)]">
          I'm Wesley Quintero, an Amazon Specialist and Developer with a passion for e-commerce solutions. With extensive experience in Amazon development, I help businesses optimize their online presence and increase sales through data-driven strategies.
        </p>
        {/* Add more content about your background, skills, and experience */}
      </div>
    </section>
  );
};

export default About;