import type { PropsWithChildren } from 'react'
import styles from './ContentWindow.module.css'

export interface ContentWindowProps extends PropsWithChildren {
  tag?: keyof JSX.IntrinsicElements
  id?: string
  className?: string
  popover?: 'auto' | 'manual'
  title: string
  contentClassName?: string
}

export default function ContentWindow({
  tag = 'div',
  id,
  className,
  popover,
  title,
  contentClassName,
  children,
}: ContentWindowProps) {
  const Tag = tag

  return (
    <Tag
      id={id}
      className={[styles.window, className].join(' ')}
      popover={popover}
    >
      <header>
        <h2>{title}</h2>
      </header>
      <div className={[styles.content, contentClassName].join(' ')}>
        {children}
      </div>
    </Tag>
  )
}
