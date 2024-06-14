import type { ButtonHTMLAttributes } from 'react'
import styles from './AquaButton.module.css'

export interface AquaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
}

export default function AquaButton({
  primary = false,
  className,
  ...props
}: AquaButtonProps) {
  const mergedClasses = [className, styles.aquaButton, primary && styles.primary].join(' ')
  return <button className={mergedClasses} {...props}></button>
}
