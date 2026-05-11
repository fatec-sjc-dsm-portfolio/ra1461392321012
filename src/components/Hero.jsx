import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Aprendizagem por Projetos Integrados</p>
        <h1 className={styles.title}>
          Projetos <span className={styles.accent}>Acadêmicos</span>
        </h1>
        <p className={styles.sub}>6 semestres &middot; FATEC São José dos Campos &middot; 2023–2026</p>
      </div>
    </section>
  )
}
