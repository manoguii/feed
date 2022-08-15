import styles from "../styles/Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/manogui777.png" />
          <div className={styles.authorInfo}>
            <strong>Guilherme David</strong>
            <span>Dev Front End</span>
          </div>
        </div>
        <time dateTime="Publicado em 14/08/2022">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{'  '}
          <a href="#">#nlw</a>{'  '}
          <a href="#">#rocketseat</a>{'  '}
        </p>
      </div>
    </article>
  );
}