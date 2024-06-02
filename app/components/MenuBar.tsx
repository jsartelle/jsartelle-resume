import styles from './MenuBar.module.css'
import { UserRound, Printer } from 'lucide-react'

export default function MenuBar() {
  return (
    <header className={styles.menubar}>
      <div className={[styles.profileIcon, 'print-hidden'].join(' ')}>
        <UserRound />
      </div>

      <h1 className={styles.name}>James Sartelle</h1>

      <button popoverTarget="aboutWindowPopover" className={[styles.aboutButton, 'print-hidden'].join(' ')}>
        About
      </button>

      <details name="menubar" className="print-hidden">
        <summary>Contact</summary>
        <menu>
          <li>
            <a target="_blank" href="tel:9806229704">
              Dial 980-622-9704...
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:jamessartelle@me.com">
              Email jamessartelle@me.com...
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/jsartelle">
              Open GitHub (jsartelle)...
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/james-sartelle/"
            >
              Open LinkedIn...
            </a>
          </li>
        </menu>
      </details>

      {/* TODO make this a functional Print button */}
      <button
        className={[styles.printButton, 'print-hidden'].join(' ')}
        aria-label="Print"
      >
        <Printer />
      </button>
    </header>
  )
}
