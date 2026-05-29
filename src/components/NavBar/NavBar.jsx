'use client';

import styles from './NavBar.module.css';

const NAV_LINKS = [
  { label: 'Sobre',       href: '#about'      },
  { label: 'Projetos',    href: '#projects'   },
  { label: 'Habilidades', href: '#skills'     },
  { label: 'Contato',     href: '#contact'    },
];

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.inner}>

        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>&lt;/&gt;</span>
          <span className={styles.logoText}>Portfólio</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

      </nav>
      <div className={styles.divider} />
    </header>
  );
}