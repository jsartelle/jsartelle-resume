import type { ComponentType } from 'react'
import Image, { type StaticImageData } from 'next/image'
import type { LucideProps } from 'lucide-react'
import styles from './SkillCard.module.css'

export interface SkillCardProps {
  logo?: StaticImageData
  LogoIcon?: ComponentType<LucideProps>
  title: string
  secondary?: string
  progress: 0 | 1 | 2 | 3 | 4 | 5
}

export default function SkillCard({
  logo,
  LogoIcon,
  title,
  secondary,
  progress,
}: SkillCardProps) {
  const icon =
    (LogoIcon && <LogoIcon className={styles.logo} size={50} />) ??
    (logo && (
      <Image
        className={styles.logo}
        alt=""
        src={logo}
        width={50}
        height={50}
        draggable="false"
      />
    )) ??
    null

  return (
    <article className={styles.skillCard}>
      {icon}
      <hgroup>
        <h4>{title}</h4>
        {secondary ? <p className={styles.secondary}>{secondary}</p> : null}
      </hgroup>
      {/* <progress> elements are extremely difficult to style across browsers, and animation support is limited */}
      <div
        className={[styles.progress, 'print-hidden'].join(' ')}
        role='progressbar'
        style={{'--value-width': `${progress / 5 * 100}%`} as React.CSSProperties}
      >
        <div className={styles.progressValue}></div>
      </div>
    </article>
  )
}
