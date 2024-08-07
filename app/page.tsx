import styles from './page.module.css'
import Image from 'next/image'
import { UserRound, BookText, Briefcase, ThumbsUp } from 'lucide-react'
import WindowInactive from '@/app/components/WindowInactive'
import MenuBar from '@/app/components/MenuBar'
import ContentWindow from '@/app/components/ContentWindow'

import Bio from '@/app/content/bio.mdx'
import Likes from '@/app/content/likes.mdx'
import Languages from '@/app/content/languages.mdx'
import Frameworks from '@/app/content/frameworks.mdx'
import Experience from '@/app/content/experience.mdx'
import Education from '@/app/content/education.mdx'
import Credits from '@/app/content/credits.mdx'

import TigerBG from '@/public/10-4.webp'

export default function Home() {
  return (
    <div id="root" className={styles.root}>
      <MenuBar />

      <Image
        className={[styles.wallpaper, 'print-hidden'].join(' ')}
        alt=""
        src={TigerBG}
        placeholder="blur"
        blurDataURL={blurDataURL}
        quality={100}
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        priority
        draggable="false"
      />

      <main className={styles.desktop}>
        <div className={styles.column}>
          <ContentWindow
            Tag="article"
            className={styles.aboutWindow}
            contentClassName={styles.aboutContent}
            title="About Me"
            titleIcon={<UserRound size={18} />}
          >
            {/* TODO fix styles typing */}
            <Bio styles={styles} />
          </ContentWindow>

          <ContentWindow
            title="Skills"
            titleIcon={<BookText size={18} />}
            contentClassName={styles.resumeContent}
          >
            <Languages styles={styles} />
            <Frameworks styles={styles} />
          </ContentWindow>
        </div>

        <div className={styles.column}>
          <ContentWindow
            title="History"
            titleIcon={<Briefcase size={18} />}
            className={styles.history}
            contentClassName={[
              styles.resumeContent,
              styles.historyContent,
            ].join(' ')}
          >
            <Experience styles={styles} />
            <Education styles={styles} />
          </ContentWindow>
        </div>
      </main>

      <ContentWindow
        Tag="article"
        id="siteCreditsPopover"
        title="About This Site"
        contentClassName={styles.popoverContent}
        popover="auto"
      >
        <Credits styles={styles} />
      </ContentWindow>

      <ContentWindow
        Tag="article"
        id="likesPopover"
        title="Things I Like"
        titleIcon={<ThumbsUp size={18} />}
        contentClassName={styles.popoverContent}
        popover="auto"
      >
        <Likes styles={styles} />
      </ContentWindow>

      <WindowInactive />
    </div>
  )
}

/* TODO generate this dynamically */
const blurDataURL =
  'data:image/webp;base64,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dHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJEYXRhVmVyc2lvbj4zPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyRGF0YVZlcnNpb24+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyQXBwbGljYXRpb24+cGl4ZWxtYXRvclBybzwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckFwcGxpY2F0aW9uPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckRldmljZT5NYWMxNCwxNTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckRldmljZT4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJPUz4xNC41LjA8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJPUz4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJFbmFibGVkPlRydWU8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJFbmFibGVkPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlclBsYXRmb3JtPm1hY09TPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyUGxhdGZvcm0+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyVVRJPmNvbS5waXhlbG1hdG9ydGVhbS5waXhlbG1hdG9yLmRvY3VtZW50LXByby1zaWRlY2FyLmJpbmFyeTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhclVUST4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJQcm9jZXNzSUQ+NzIzMDI8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJQcm9jZXNzSUQ+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyVmVyc2lvbj4yPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyVmVyc2lvbj4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJCdWlsZD4xNzhjMzYyPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyQnVpbGQ+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FySWRlbnRpZmllcj4yQUU2MjQwMC1GNjM2LTQwNEEtOTBBQy0xMUMyOTA4NDEzMTM8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJJZGVudGlmaWVyPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhckxvY2F0aW9uPmxvY2FsPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyTG9jYXRpb24+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyQmFzZUZpbGVuYW1lPjEwLTQtYmx1cnJlZDwvUGl4ZWxtYXRvclRlYW06U2lkZWNhckJhc2VGaWxlbmFtZT4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJTaG9ydEhhc2g+MkFFNjI0MDA8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJTaG9ydEhhc2g+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyVmVyc2lvbj4zLjYuMTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlclZlcnNpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjQtMDUtMzFUMjA6NTM6MTEtMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciBQcm8gMy42LjE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cg=='
