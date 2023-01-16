import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/manoguii.png"/>

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

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentario"
        />
      
      <footer>
        <button type="submit">Publicar</button>
      </footer>

      </form>

      <div className={styles.comentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}