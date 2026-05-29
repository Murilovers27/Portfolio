import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.sectionTitle}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.titleIcon}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <h2>Sobre Mim</h2>
      </div>

      <div className={styles.card}>
        <p className={styles.text}>
          Sou Murilo Cruz, tenho 19 anos e sou estudante de Análise e Desenvolvimento
          de Sistemas do 5° período. Bem-vindo ao meu pequeno mundo tecnológico.
        </p>
        <p className={styles.text}>
          Aqui você pode encontrar alguns dos meus projetos pessoais e profissionais,
          fruto de muita curiosidade, dedicação e vontade de encarar novos desafios.
        </p>
      </div>

    </section>
  );
}