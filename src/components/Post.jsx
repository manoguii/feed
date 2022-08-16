import styles from "../styles/Post.module.css";

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { PaintBrushBroad } from "phosphor-react";
import { pt } from "date-fns/locale";

export function Post(props) {

const publishedDateFormated = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
});

const publishedDateRelative = formatDistanceToNow(props.publishedAt, {
  locale: ptBR,
  addSuffix: true,
})

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>

          <Avatar /*hasBorder={true}*/ src={props.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>

        </div>

        <time title={publishedDateFormated} dateTime={props.publishedAt.toISOString()}>{publishedDateRelative}</time>

      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return (<p>{line.content}</p>)
          } else if (line.type === 'link'){
            return(<p><a href="#">{line.content}</a></p>)
          } else {
            return(<p><a href="#">{line.content}</a></p>)
          }})}
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário ..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}