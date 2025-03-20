import React from 'react';
import projects from '../../data/projects/projects.js';

const Projects: React.FC = () => {
  return (
    <section className="projects-section py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--accent-primary)]">{project.name}</h3>
                <p className="text-[var(--text-secondary)]">{project.description}</p>
                {/* Add more project details and links if necessary */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;