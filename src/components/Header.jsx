import style from '../styles/Header.module.css'
import iconIgnite from '../assets/logo-ignite.svg'


export function Header() {
    return (
        <>
            <header>
                <div className={style.headerTop}>
                    <div className={style.img}>
                        <img src={iconIgnite} />
                    </div>
                    <div className={style.text}>
                        <p>Ignite Feed</p>
                    </div>
                </div>
            </header>
        </>
    )
}