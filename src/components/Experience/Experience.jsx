import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    company: 'Makron LTDA',
    role: 'Assistente de TI',
    period: 'Jan 2026 — Mai 2026',
    current: false,
    description: [
      'Suporte técnico presencial e remoto aos colaboradores da empresa.',
      'Instalação e configuração de switches e access points.',
      'Gerenciamento de permissionamento e controle de acesso.',
      'Elaboração de processos internos e controle de inventário de equipamentos.',
    ],
  },
  {
    company: 'BmTech — Uirapuru',
    role: 'Estagiário de Suporte N1',
    period: 'Set 2025 — Jan 2026',
    current: false,
    description: [
      'Suporte técnico presencial e remoto no ambiente educacional.',
      'Manutenção e configuração de projetores e equipamentos.',
      'Auxílio no sistema de gestão escolar WinSiga.',
      'Atendimento e suporte direto aos alunos e professores.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>

      <div className={styles.sectionTitle}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.titleIcon}>
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <h2>Experiência</h2>
      </div>

      <div className={styles.timeline}>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={styles.item}>

            {/* Linha e ponto da timeline */}
            <div className={styles.track}>
              <div className={styles.dot} />
              {index < EXPERIENCES.length - 1 && <div className={styles.line} />}
            </div>

            {/* Conteúdo */}
            <div className={styles.content}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <span className={`${styles.period} ${exp.current ? styles.current : ''}`}>
                  {exp.period}
                </span>
              </div>

              <ul className={styles.list}>
                {exp.description.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}