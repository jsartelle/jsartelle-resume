'use client'
import { Share, X } from 'lucide-react'
import styles from './ShareButton.module.css'

export default function ShareButton() {
  const data: ShareData = {
    url: location.href,
  }

  const canShare = navigator.canShare?.(data)

  return canShare ? (
    <button className={styles.button} aria-label="Share">
      <div className={styles.icon}>
        <Share
          size={15}
          strokeWidth={3}
          onClick={() => navigator.share(data)}
        />
      </div>
    </button>
  ) : null
}
