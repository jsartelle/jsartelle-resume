import styles from './MenuBar.module.css'
import { UserRound } from 'lucide-react'
import ShareButton from '@/app/components/ShareButton'

export default function MenuBar() {
  return (
    <header className={[styles.menubar, 'print-hidden'].join(' ')}>
      <div className={[styles.menuItem, styles.profileIcon].join(' ')}>
        <UserRound
          id="lucideUserRound"
          fill="url(#menuButtonBgGradient)"
          stroke="none"
        >
          <svg
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient
                id="menuButtonBgGradient"
                gradientTransform="rotate(45)"
              >
                <stop offset="0%" stopColor="#3dadff" />
                <stop offset="100%" stopColor="#1666ee" />
              </linearGradient>
            </defs>
          </svg>
        </UserRound>
      </div>

      <details name="menubar" className={styles.menuWrapper}>
        <summary className={[styles.menuItem, styles.name].join(' ')}>
          James Sartelle
        </summary>
        <menu className={styles.menu}>
          <li>
            <button popoverTarget="likesPopover">Things I Like</button>
          </li>
        </menu>
      </details>

      <details name="menubar" className={styles.menuWrapper}>
        <summary className={styles.menuItem}>Contact</summary>
        <menu className={[styles.menu, styles.offscreenFix].join(' ')}>
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

      <details name="menubar" className={styles.menuWrapper}>
        <summary className={styles.menuItem}>More</summary>
        <menu className={[styles.menu, styles.offscreenFix].join(' ')}>
          <li>
            <button popoverTarget="siteCreditsPopover">About This Site</button>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/jsartelle/jsartelle-resume"
            >
              View Source...
            </a>
          </li>
          <li>
            <a target="_blank" href="https://links.sartelle.dev/">
              Link Garden...
            </a>
          </li>
          <li>
            <a target="_blank" href="https://notes.sartelle.dev/">
              Development Notes...
            </a>
          </li>
        </menu>
      </details>

      <ShareButton />
    </header>
  )
}
