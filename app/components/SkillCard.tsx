import Image, { type StaticImageData } from 'next/image'
import styles from './SkillCard.module.css'

export interface SkillCardProps {
  logo: StaticImageData
  title: string
  secondary?: string
  progress: 0 | 1 | 2 | 3 | 4 | 5
}

export default function SkillCard({
  logo,
  title,
  secondary,
  progress,
}: SkillCardProps) {
  return (
    <article className={styles.skillCard}>
      <Image
        className={styles.logo}
        alt=""
        src={logo}
        width={50}
        height={50}
        draggable="false"
      />
      <hgroup>
        <h4>{title}</h4>
        {secondary ? <p className={styles.secondary}>{secondary}</p> : null}
      </hgroup>
	  {/* TODO for print hide progress bar, shrink logos to icons next to text */}
      <progress className={styles.progress} value={progress} max="5"></progress>
    </article>
  )
}
