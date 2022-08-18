import styles from "../styles/Post.module.css";
import ptBR from 'date-fns/locale/pt-BR'

import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { PaintBrushBroad } from "phosphor-react";
import { pt } from "date-fns/locale";

export function Post(props) {

  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState(['Bom dia']);

  const publishedDateFormated = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelative = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function onDeleteComment(comentToDelete) {
    const createNewListComment = comments.filter(coment => {
      return coment !== comentToDelete;
    })
    setComments(createNewListComment)
  }
  const buttonDisable = newCommentText.length === 0
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
          required
        />
        <footer>
          <button type="submit" disabled={buttonDisable}>Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map(coment => {
          return (
            <Comment
              key={coment}
              content={coment}
              onDeleteComment={onDeleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}