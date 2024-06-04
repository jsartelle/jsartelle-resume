import type { PropsWithChildren, ReactNode } from 'react'
import { X } from 'lucide-react'
import styles from './ContentWindow.module.css'

export interface ContentWindowProps extends PropsWithChildren {
  Tag?: keyof JSX.IntrinsicElements
  id?: string
  className?: string
  popover?: 'auto' | 'manual'
  titleIcon?: ReactNode
  title: string
  contentClassName?: string
}

export default function ContentWindow({
  Tag = 'div',
  id,
  className,
  popover,
  titleIcon,
  title,
  contentClassName,
  children,
}: ContentWindowProps) {
  return (
    <Tag
      id={id}
      className={[styles.window, className].join(' ')}
      popover={popover}
    >
      <header className={styles.titlebar}>
        <div>
          <button
            className={[styles.titleButton, styles.buttonRed].join(' ')}
            disabled={!popover}
            aria-hidden={!popover}
            popoverTarget={id}
            popoverTargetAction="hide"
            aria-label={popover ? `Close ${title}` : ''}
          >
            {popover ? (
              <X className={styles.titleButtonGlyph} size={15} />
            ) : null}
          </button>
          <button
            className={[styles.titleButton, styles.buttonYellow].join(' ')}
            disabled
            aria-hidden="true"
          ></button>
          <button
            className={[styles.titleButton, styles.buttonGreen].join(' ')}
            disabled
            aria-hidden="true"
          ></button>
        </div>
        <hgroup>
          {titleIcon}
          <h2>{title}</h2>
        </hgroup>
        <div>
          <button
            className={[styles.titleButton, styles.buttonPill].join(' ')}
            disabled
            aria-hidden="true"
          ></button>
        </div>
      </header>
      <div className={[styles.content, contentClassName].join(' ')}>
        {children}
      </div>
    </Tag>
  )
}
