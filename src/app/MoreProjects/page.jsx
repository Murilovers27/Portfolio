'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES, ALL_PROJECTS } from '@/data/Projects';
import styles from './page.module.css';

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <main className={styles.page}>

      {/* HEADER */}
      <div className={styles.header}>
        <Link href="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Voltar
        </Link>

        <div className={styles.sectionTitle}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.titleIcon}>
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          </svg>
          <h1>Todos os Projetos</h1>
        </div>
        <p className={styles.subtitle}>
          Uma coleção completa dos meus projetos pessoais e profissionais.
        </p>
      </div>

      {/* FILTROS */}
      <div className={styles.filters}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`${styles.filter} ${active === cat.id ? styles.filterActive : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filtered.map((project) => (
          <Link href={`/projetos/${project.slug}`} key={project.slug} className={styles.cardLink}>
            <article className={styles.card}>

              {project.featured && (
                <span className={styles.featuredBadge}>★ Destaque</span>
              )}

              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardLinks}>
                <span
                  className={styles.link}
                  onClick={(e) => { e.preventDefault(); window.open(project.github, '_blank'); }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </span>

                {project.demo && (
                  <span
                    className={styles.link}
                    onClick={(e) => { e.preventDefault(); window.open(project.demo, '_blank'); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </span>
                )}
              </div>

            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <p>Nenhum projeto nessa categoria ainda.</p>
        </div>
      )}

    </main>
  );
}