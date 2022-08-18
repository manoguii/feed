import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from '../styles/Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {

  const [addLikePost, setAddLikePost] = useState(0)

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  function handleAddLikePost() {
    setAddLikePost(addLikePost + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/maykbrito.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme David</strong>
              <time dateTime="Publicado em 14/08/2022">Publicado ha 1h</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleAddLikePost}>
            <ThumbsUp />
            Aplaudir <span>{addLikePost}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}