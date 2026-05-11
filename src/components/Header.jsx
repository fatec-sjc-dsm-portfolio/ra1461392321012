import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.name}>Arthur Karnas</span>
          <span className={styles.badge}>DSM · FATEC SJC</span>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Home</NavLink>
          <NavLink to="/projetos" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Projetos</NavLink>
          <NavLink to="/interesses" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Interesses</NavLink>
        </nav>
      </div>
    </header>
  )
}
