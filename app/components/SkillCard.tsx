import type { ComponentType, PropsWithChildren } from 'react'
import Image, { type StaticImageData } from 'next/image'
import type { LucideProps } from 'lucide-react'
import styles from './SkillCard.module.css'

export interface SkillCardProps extends PropsWithChildren {
  logo?: StaticImageData
  LogoIcon?: ComponentType<LucideProps>
  subtitle?: string
  progress: 0 | 1 | 2 | 3 | 4 | 5
}

export default function SkillCard({
  logo,
  LogoIcon,
  subtitle,
  progress,
  children,
}: SkillCardProps) {
  const headerId = `SkillCard_${(Math.random() + 1).toString(36).substring(7)}`

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
        <h4 id={headerId}>{children}</h4>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </hgroup>
      {/* <progress> elements are extremely difficult to style across browsers, and animation support is limited */}
      <div
        className={styles.progress}
        role="progressbar"
        aria-labelledby={headerId}
        aria-valuemin={0}
        aria-valuenow={progress}
        aria-valuemax={5}
        style={
          { '--value-width': `${(progress / 5) * 100}%` } as React.CSSProperties
        }
      >
        <div className={styles.progressValue}></div>
      </div>
    </article>
  )
}
