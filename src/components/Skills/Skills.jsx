import styles from './Skills.module.css';

const SKILLS = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>

      <div className={styles.sectionTitle}>
        <span className={styles.titleIcon}>&lt;/&gt;</span>
        <h2>Habilidades</h2>
      </div>

      <div className={styles.grid}>
        {SKILLS.map((skill) => (
          <div key={skill.name} className={styles.badge}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <span className={styles.label}>{skill.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}