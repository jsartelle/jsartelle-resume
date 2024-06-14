'use client'
import { useState, useEffect } from 'react'
import { Share } from 'lucide-react'
import styles from './ShareButton.module.css'

export default function ShareButton() {
  const [shareData, setShareData] = useState<ShareData | null>(null)

  useEffect(() => {
    const data: ShareData = {
      url: location.href,
    }

    if (navigator.canShare?.(data)) {
      setShareData(data)
    }
  }, [])

  return shareData ? (
    <button className={styles.button} aria-label="Share">
      <div className={styles.icon}>
        <Share
          size={15}
          strokeWidth={3}
          onClick={() => navigator.share(shareData)}
        />
      </div>
    </button>
  ) : null
}
