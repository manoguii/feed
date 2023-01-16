import styles from "./Header.module.css";
import logo from "../assets/Ignite.svg"

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logotipo" />
    </div>
  )
}