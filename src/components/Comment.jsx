import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../styles/Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
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

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom Devon, Parabens</p>

        </div>

        <footer>

          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>

        </footer>

      </div>
    </div>
  )
}