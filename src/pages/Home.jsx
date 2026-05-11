import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Karnas01', icon: '/img/github.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-karnas-da-rocha-b90433271/', icon: '/img/linkedin.png' },
]

export default function Home() {
  return (
    <main className={`container ${styles.main}`}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>Olá, mundo</p>
        <h1 className={styles.title}>
          Sou <span className={styles.accent}>Arthur</span>, estudante de programação
        </h1>
        <p className={styles.bio}>
          Estou sempre em busca de oportunidades para aprender e me desenvolver.
          Cursando Desenvolvimento de Software Multiplataforma na FATEC SJC.
        </p>
        <div className={styles.actions}>
          <Link to="/projetos" className={styles.btnPrimary}>Ver projetos</Link>
          <Link to="/interesses" className={styles.btnSecondary}>Sobre mim</Link>
        </div>
        <div className={styles.socials}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className={styles.socialLink}>
              <img src={s.icon} alt={s.label} className={styles.socialIcon} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </section>
      <div className={styles.imageWrap}>
        <img src="/img/Imagem.png" alt="Arthur Karnas" className={styles.photo} />
      </div>
    </main>
  )
}
