import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/manogui777.png',
      name: 'Guilherme David',
      role: 'Student ReactJS',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉jane.design/doctorcare',
      },
      {
        type: 'link-hashTag',
        content: ['#novoprojeto', '#ReactJS', '#nlw'],
      },
    ],
    publishedAt: new Date('2022-08-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉jane.design/doctorcare',
      },
      {
        type: 'link-hashTag',
        content: ['#novoprojeto', '#ReactJS', '#nlw'],
      },
    ],
    publishedAt: new Date('2022-08-10 20:30:00'),
  },
];

export function App() {
  return (
    <>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
