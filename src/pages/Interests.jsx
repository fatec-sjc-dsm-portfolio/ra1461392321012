import styles from './Interests.module.css'

const formations = [
  { status: 'Concluído', name: 'Ensino Médio', institution: 'ETEC Machado de Assis' },
  { status: 'Concluído', name: 'Técnico em Informática', institution: 'ETEC Machado de Assis' },
  { status: 'Cursando', name: 'Tecnólogo em Desenvolvimento de Software Multiplataforma', institution: 'FATEC Prof. Jessen Vidal' },
]

export default function Interests() {
  return (
    <main className={`container ${styles.main}`}>

      <section className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.eyebrow}>Sobre mim</p>
          <h1 className={styles.title}>Olá, me chamo <span className={styles.accent}>Arthur</span></h1>
          <p className={styles.bio}>
            Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Prof. Jessen Vidal
            em São José dos Campos. Meu interesse pela computação surgiu cedo na minha vida — desde a
            infância sempre gostei muito de video games, e fui atraído para o mundo da tecnologia pela
            curiosidade de entender como os jogos eram desenvolvidos.
          </p>
        </div>
        <img src="/img/fatec.jpg" alt="FATEC SJC" className={styles.introImg} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Formações</h2>
        <div className={styles.formations}>
          {formations.map(f => (
            <div key={f.name} className={styles.formCard}>
              <span className={`${styles.formStatus} ${f.status === 'Cursando' ? styles.active : ''}`}>
                {f.status}
              </span>
              <p className={styles.formName}>{f.name}</p>
              <p className={styles.formInst}>{f.institution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hobbies</h2>
        <div className={styles.hobby}>
          <img src="/img/basquete.jpg" alt="Basquete" className={styles.hobbyImg} />
          <p className={styles.hobbyText}>
            Além da paixão por video games, tenho outros hobbies — gosto muito de jogar basquete e de fazer
            musculação. Por 5 anos joguei em um time do projeto social Gotas de Cidadania em Caçapava (SP),
            chegando a ser capitão do time.
          </p>
        </div>
        <div className={`${styles.hobby} ${styles.hobbyReverse}`}>
          <p className={styles.hobbyText}>
            Também adoro passar um tempo junto com meus amigos e familiares e viajar. Viagens são uma ótima
            maneira de aprender sobre hábitos e culturas de diferentes lugares, experimentar comidas novas,
            ver outras paisagens e descansar do dia a dia.
          </p>
          <img src="/img/praia.jpg" alt="Viagem" className={styles.hobbyImg} />
        </div>
      </section>

    </main>
  )
}
