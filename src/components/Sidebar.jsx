import { PencilLine } from 'phosphor-react'

import style from '../styles/Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={style.asideSidebar}>
            <div>
                <img className={style.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" />

                <div className={style.contentSidebar}>
                    <img className={style.avatar} src="https://github.com/manogui777.png" />

                    <strong>Guilherme David</strong>
                    <span>Dev Front End</span>

                </div>
                <footer className={style.buttonSidebar}>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>

    )
}