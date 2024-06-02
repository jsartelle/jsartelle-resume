import type { PropsWithChildren } from 'react'
import styles from './ContentWindow.module.css'

export interface ContentWindowProps extends PropsWithChildren {
  title: string
}

export default function ContentWindow({ title, children }: ContentWindowProps) {
  return (
    <div className={styles.window}>
      <header>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
