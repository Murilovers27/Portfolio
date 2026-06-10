'use client';

import { motion } from 'motion/react';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <motion.svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <circle cx="24" cy="24" r="22" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="18" fill="url(#gradient2)" opacity="0.1" />
        <path
          d="M14 28V16L19 22L24 16L29 22L34 16V28"
          stroke="#00D4FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="12" y1="12" x2="18" y2="18" stroke="#FFC947" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#FFC947" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className={styles.text}>
        <span className={styles.name}>Murilo</span>
        <span className={styles.surname}>Cruz</span>
      </div>
    </a>
  );
}