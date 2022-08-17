import styles from "../styles/Post.module.css";

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from 'react'

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

  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState(['']);

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }


  function handleCreateNewComment() {
    event.preventDefault() //não direciona o submit para outra pagina

    // const newText = event.target.comentTextArea.value //event.target pega o elemento que esta sendo submetido

    setComments([...comments, newCommentText])

    // event.target.comentTextArea.value = ''
    setNewCommentText('')
  }

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>

          <Avatar src={props.author.avatarUrl} />

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
            return (<p key={line.content}>{line.content}</p>)
          } else if (line.type === 'link') {
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          } else {
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comentTextArea"
          placeholder="Deixe seu comentário ..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map(coment => {
          return <Comment key={coment} content={coment} />
        })}
      </div>
    </article>
  );
}