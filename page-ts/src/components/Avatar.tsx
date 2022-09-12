import { ImgHTMLAttributes } from 'react';
import styles from '../styles/Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes <HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar(props: AvatarProps) {
  const hasBorder = props.hasBorder !== false;

  return (
      <img
        className={hasBorder ? styles.avatarWhitBorder : styles.avatar}
        src={props.src}
      />
  )
} 