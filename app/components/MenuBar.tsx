import styles from './MenuBar.module.css'
import { UserRound } from 'lucide-react'
import PrintButton from '@/app/components/PrintButton'

export default function MenuBar() {
  return (
    <header className={styles.menubar}>
      <div
        className={[styles.menuItem, styles.profileIcon, 'print-hidden'].join(
          ' '
        )}
      >
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

      <div className={[styles.menuItem, styles.name, 'print-hidden'].join(' ')}>
        James Sartelle
      </div>

      {/* <button
        popoverTarget=""
        className={[styles.menuItem, styles.aboutButton, 'print-hidden'].join(
          ' '
        )}
      >
        About
      </button> */}

      <details
        name="menubar"
        className={[styles.menuWrapper, 'print-hidden'].join(' ')}
      >
        <summary className={[styles.menuItem, styles.contactButton].join(' ')}>
          Contact
        </summary>
        <menu className={styles.menu}>
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

      <details
        name="menubar"
        className={[styles.menuWrapper, 'print-hidden'].join(' ')}
      >
        <summary className={[styles.menuItem, styles.contactButton].join(' ')}>
          More
        </summary>
        <menu className={styles.menu}>
          <li>
            <a target="_blank" href="https://jsartelle-dev-notes.vercel.app/">
              Development Notes...
            </a>
          </li>
          <li>
            <button popoverTarget="likesPopover">Stuff I Like</button>
          </li>
          <li>
            <button popoverTarget="siteCreditsPopover">About This Site</button>
          </li>
        </menu>
      </details>

      <PrintButton />
    </header>
  )
}
