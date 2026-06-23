'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COURSE_CATEGORIES, ALL_COURSES } from '@/data/Courses';
import styles from './Courses.module.css';

export default function Courses() {
  const [active, setActive] = useState(COURSE_CATEGORIES[1].id);

  const filtered = ALL_COURSES.filter(c => c.category === active).slice(0, 4);

  return (
    <section id="courses" className={styles.courses}>

      <div className={styles.sectionTitle}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.titleIcon}>
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
        <h2>Cursos & Certificações</h2>
      </div>

      {/* FILTROS */}
      <div className={styles.filters}>
        {COURSE_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
          <button
            key={cat.id}
            className={`${styles.filter} ${active === cat.id ? styles.filterActive : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className={styles.grid}>
        {filtered.length > 0 ? filtered.map((course) => (
          <article key={course.id} className={styles.card}>

            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              {course.status === 'concluded'
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-cyan)" strokeWidth="2" className={styles.statusIcon}><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" className={styles.statusIcon}><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              }
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>{course.platform}</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>{course.year}</span>
              <span className={styles.metaDot}>·</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className={styles.metaItem}>{course.hours}h</span>
            </div>

            <span className={`${styles.badge} ${course.status === 'concluded' ? styles.badgeConcluded : styles.badgeOngoing}`}>
              {course.status === 'concluded' ? 'Concluído' : 'Em andamento'}
            </span>
            
             {course.certificate && (
              <a
                href={course.certificate}
                download 
                className={styles.btnCertificate}
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Baixar Certificado
              </a>
            )}

          </article>
        )) : (
          <p className={styles.empty}>Nenhum curso nessa categoria ainda.</p>
        )}
      </div>

      {/* BOTÃO */}
      <div className={styles.more}>
        <Link href="/Courses/" className={styles.btnMore}>
          Todos os cursos & certificações
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}