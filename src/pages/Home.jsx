import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const base = import.meta.env.BASE_URL

const socials = [
  { label: 'GitHub', href: 'https://github.com/Karnas01', icon: `${base}img/github.png` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-karnas-da-rocha-b90433271/', icon: `${base}img/linkedin.png` },
]

export default function Home() {
  return (
    <main className={`container ${styles.main}`}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>Olá, mundo</p>
        <h1 className={styles.title}>
          Sou <span className={styles.accent}>Arthur</span>, analista de monitoramento e programador
        </h1>
        <p className={styles.bio}>
          Garantindo uptime e integridade pro seu sistema. Desenvolvendo e construindo
          suas ideias. Cursando Desenvolvimento de Software Multiplataforma na FATEC SJC.
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
        <img src={`${base}img/Imagem.png`} alt="Arthur Karnas" className={styles.photo} />
      </div>
    </main>
  )
}
