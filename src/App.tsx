import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import { v4 as uuidV4 } from "uuid"

import styles from "./App.module.css"
import "./global.css"

interface ContentPost {
  type: "paragraph" | "link"
  contentPost: string
}

export interface PostProps {
  id?: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: Date
  content: ContentPost[]
}

const posts: PostProps[] = [
  {
    id: uuidV4(),
    author: {
      name: "Guilherme David",
      avatar: "https://github.com/manoguii.png",
      role: "Web developer"
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        contentPost: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        contentPost: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        contentPost: "👉 jane.design/doctorcare"
      },
    ]
  },
  {
    id: uuidV4(),
    author: {
      name: "Diego Fernandes",
      avatar: "https://github.com/diego3g.png",
      role: "CTO rocketseat"
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        contentPost: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        contentPost: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        contentPost: "👉 jane.design/doctorcare"
      },
    ]
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
