'use client';

import { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import styles from './Navbar.module.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

const NAV_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'Features',  href: '#features'  },
  { label: 'About Us',  href: '#about'     },
  { label: 'Resources', href: '#resources' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (label: string, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(label);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${styles.wrapper} ${jakarta.variable}`}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoMark} aria-hidden="true">
            <img src="./Blogo.png" alt="" />
          </div>
          <span className={styles.brand}>Sadhak</span>
        </div>

        {/* Nav Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`${styles.link} ${activeLink === label ? styles.active : ''}`}
                onClick={(e) => handleClick(label, href, e)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Log In</button>
          <button className={styles.registerBtn}>Register</button>
        </div>

      </nav>
    </div>
  );
}
