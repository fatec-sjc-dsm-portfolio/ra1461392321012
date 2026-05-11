import styles from './ProjectCard.module.css'

export default function ProjectCard({ api, period, title, desc, tech, repo }) {
  const isEmpty = !title

  return (
    <article className={`${styles.card} ${isEmpty ? styles.empty : ''}`}>
      <div className={styles.meta}>
        <span className={styles.apiTag}>{api}</span>
        <span className={styles.period}>{period}</span>
      </div>
      <div className={styles.body}>
        {isEmpty ? (
          <p className={styles.placeholder}>Em breve</p>
        ) : (
          <>
            <h2 className={styles.title}>{title}</h2>
            {desc && <p className={styles.desc}>{desc}</p>}
            {tech.length > 0 && (
              <div className={styles.tech}>
                {tech.map(t => <span key={t}>{t}</span>)}
              </div>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noopener" className={styles.link}>
                Ver repositório <span className={styles.arrow}>→</span>
              </a>
            )}
          </>
        )}
      </div>
    </article>
  )
}
