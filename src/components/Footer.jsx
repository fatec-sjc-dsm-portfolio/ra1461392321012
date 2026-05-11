import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; 2026 Arthur Karnas &middot; DSM FATEC SJC</p>
        <div className={styles.links}>
          <a href="https://github.com/Karnas01" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/arthur-karnas-da-rocha-b90433271/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
