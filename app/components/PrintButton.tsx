'use client'
import { Printer } from 'lucide-react'
import styles from './PrintButton.module.css'

export default function PrintButton() {
  return (
    <button
      className={[styles.printButton, 'print-hidden'].join(' ')}
      onClick={() => window.print()}
      aria-label="Print"
    >
      <div className={styles.printButtonIcon}>
        <Printer size={15} strokeWidth={3} />
      </div>
    </button>
  )
}
