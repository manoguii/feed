import styles from '../styles/Avatar.module.css'

export function Avatar(props) {
  const hasBorder = props.hasBorder !== false;

  return (
      <img
        className={hasBorder ? styles.avatarWhitBorder : styles.avatar}
        src={props.src}
      />
  )
} 