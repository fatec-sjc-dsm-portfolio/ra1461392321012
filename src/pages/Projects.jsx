import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Aprendizagem por Projetos Integrados</p>
        <h1 className={styles.title}>Projetos <span className={styles.accent}>Acadêmicos</span></h1>
        <p className={styles.sub}>6 semestres &middot; FATEC São José dos Campos &middot; 2023–2026</p>
      </div>
      <div className={styles.list}>
        {projects.map(p => <ProjectCard key={p.api} {...p} />)}
      </div>
    </main>
  )
}
