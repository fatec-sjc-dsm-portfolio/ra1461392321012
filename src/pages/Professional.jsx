import ProjectCard from '../components/ProjectCard'
import professional from '../data/professional'
import styles from './Projects.module.css'

export default function Professional() {
  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Experiência em Monitoramento &amp; Observabilidade</p>
        <h1 className={styles.title}>Projetos <span className={styles.accent}>Profissionais</span></h1>
        <p className={styles.sub}>Análise de Monitoramento</p>
      </div>
      <div className={styles.list}>
        {professional.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </main>
  )
}
