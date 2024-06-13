import { Download } from 'lucide-react'
import styles from './DownloadButton.module.css'

export default function DownloadButton() {
  return (
    <a
      className={styles.button}
      href="resume.pdf"
      download="James Sartelle - Resume.pdf"
      aria-label="Download PDF"
    >
      <div className={styles.icon}>
        <Download size={15} strokeWidth={3} />
      </div>
    </a>
  )
}
