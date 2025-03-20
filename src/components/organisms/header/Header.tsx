import React from 'react';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>Portfolio</a>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/projects" className={styles.link}>Projects</a>
          <a href="/blog" className={styles.link}>Blog</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import ThemeToggle from '@/components/atoms/theme-toggle/ThemeToggle.astro';

export default function Header() {
  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/ToolsPage', label: 'Amazon Tools' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <a href="/" className={styles.brandLink}>
          John Wick
        </a>
        <div className={styles.navItems}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle client:load />
        </div>
      </div>
    </nav>
  );
}