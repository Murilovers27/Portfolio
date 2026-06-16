'use client'
import Link from 'next/link';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    slug: 'My-Pet-Zone',
    title: 'Sistema de PetFriend',
    description: 'Uma aplicação Android com o intuito de centralizar em m unico lugar tudo que seu pet precisa no dia a dia, com função de busca de locais petFriendily, gerenciamento de estoque e caretirinha de vacinação e um bot personalizado para te auxilar, tudo na palma dua mão.',
    tags: ['React - expo', 'FireBase', 'Botpress'],
    github: 'https://github.com/ViniciuspPantoja/AppMypet',
    demo: 'https://expo.dev/artifacts/eas/v5hgn1frBh2LBRUmv34czzYdWkaPPDbWsh1-Sh4m-_8.apk',
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos integrados e painel administrativo.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://projeto.vercel.app',
  },
  {
    slug: 'api-restful',
    title: 'API RESTful',
    description: 'API escalável para gerenciamento de dados com autenticação JWT, documentação Swagger e testes automatizados.',
    tags: ['Python', 'FastAPI', 'Docker', 'Redis'],
    github: 'https://github.com/seu-usuario/projeto',
    demo: null,
  },
  {
    slug: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados com gráficos dinâmicos e exportação de relatórios.',
    tags: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://projeto.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>

      <div className={styles.sectionTitle}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.titleIcon}>
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
        <h2>Projetos</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Link href={`/projetos/${project.slug}`} key={project.slug} className={styles.cardLink}>
            <article className={styles.card}>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
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
      <div className={styles.more}>
        <Link href="/MoreProjects/" className={styles.btnMore}>
          Ver todos os projetos
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}