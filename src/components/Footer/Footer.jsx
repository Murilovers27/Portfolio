import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.inner}>
        <p className={styles.text}>
          © 2026 Murilo Cruz. Feito com Next.js e CSS Modules.
        </p>
      </div>
    </footer>
  );
}