import styles from './MenuBar.module.css'

export default function MenuBar() {
  return (
    <header className={styles.menubar}>
      <hgroup>
        <h1>James Sartelle</h1>

        <details name="menubar">
          <summary>About Me</summary>
          <menu>
            <li>Full Stack Engineer</li>
            <li>Oklahoma City, OK</li>
          </menu>
        </details>

        <details name="menubar">
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
              <a target="_blank" href="https://www.linkedin.com/in/james-sartelle/">
                Open LinkedIn...
              </a>
            </li>
          </menu>
        </details>
      </hgroup>
    </header>
  )
}
