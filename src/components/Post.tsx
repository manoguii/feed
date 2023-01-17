import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, useState } from "react"
import { PostProps } from "../App"



export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    "Primeiro post"
  ])

  const [textComment, setTextComment] = useState("")

  const formatDate = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {locale: ptBr})
  
  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    
    if(textComment !== "") {
      setComments([...comments, textComment])
      setTextComment("")
    }    
  }

  function handleNewTextComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextComment(event.target.value)
  }

  function deleteComment(commentToDeleted: string) {
    const listWithoutCommentDeleted = comments.filter((comment) => {
      return comment !== commentToDeleted
    })

    setComments(listWithoutCommentDeleted)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>

        <time title={formatDate} dateTime={publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((line) => {
            if(line.type === "paragraph") {
              return <p key={line.contentPost}>{line.contentPost}</p>
            }else if(line.type === "link") {
              return <p key={line.contentPost}><a href="#">{line.contentPost}</a></p>
            }
          })
        }
        <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewTextComment}
          value={textComment}
          placeholder="Deixe um comentario"
        />
      
      <footer>
        <button disabled={textComment.length === 0} type="submit">Publicar</button>
      </footer>

      </form>

      <div className={styles.comentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              deleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}