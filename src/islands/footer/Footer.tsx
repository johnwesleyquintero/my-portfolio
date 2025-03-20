import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Wesley Quintero. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;