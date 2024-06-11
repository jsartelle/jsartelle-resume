import type { ButtonHTMLAttributes } from 'react'
import styles from './AquaButton.module.css'

export default function AquaButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const mergedClasses = [className, styles.aquaButton].join(' ')
  return <button className={mergedClasses} {...props}></button>
}
