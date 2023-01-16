import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
          />

          <div className={styles.authorInfo}>
            <strong>Guilherme David</strong>
            <span>Web Developer</span>
          </div>

        </div>

        <time title="11 de maio as 12:00" dateTime="2022-09-11 12:20:55">
          Publicado ha 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href=""> 👉 jane.design/doctorcare</a></p>

        <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}