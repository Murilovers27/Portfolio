'use client';

import { useState } from 'react';
import Logo from './Logo';
import styles from './NavBar.module.css';

const NAV_LINKS = [
  { label: 'Sobre',       href: '#about'      },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos',    href: '#projects'   },
  { label: 'Habilidades', href: '#skills'     },
  { label: 'Cursos',      href: '#courses'    },
  { label: 'Contato',     href: '#contact'    },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.inner}>

        <Logo />

        {/* LINKS DESKTOP */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

      </nav>
      <div className={styles.divider} />

      {/* MENU MOBILE */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.mobileLink} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}