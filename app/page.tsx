import styles from './page.module.css'
import Image from 'next/image'
import {
  UserRound,
  Phone,
  Mail,
  Github,
  Linkedin,
  BookText,
  Briefcase,
  Database,
} from 'lucide-react'
import MenuBar from '@/app/components/MenuBar'
import ContentWindow from '@/app/components/ContentWindow'
import SkillCard from '@/app/components/SkillCard'

import TigerBG from '@/public/10-4.webp'
import Photo from '@/public/photo.jpg'
import HTML5Logo from '@/public/logos/HTML5.svg'
import CSSLogo from '@/public/logos/CSS.svg'
import SassLogo from '@/public/logos/Sass.svg'
import JavaScriptLogo from '@/public/logos/JavaScript.svg'
import TypeScriptLogo from '@/public/logos/TypeScript.svg'
import BashLogo from '@/public/logos/Bash.svg'
import SwiftLogo from '@/public/logos/Swift.svg'
import ReactLogo from '@/public/logos/React.svg'
import ReactNativeLogo from '@/public/logos/React_Native.svg'
import VueLogo from '@/public/logos/Vue.svg'
import SvelteLogo from '@/public/logos/Svelte.svg'
import TailwindLogo from '@/public/logos/Tailwind.svg'
import JestLogo from '@/public/logos/Jest.svg'

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
        draggable="false"
      />

      <main className={styles.desktop}>
        <div className={styles.column}>
          <ContentWindow
            Tag="article"
            id="aboutWindowPopover"
            className={styles.bio}
            contentClassName={styles.popoverAbout}
            title="About Me"
            titleIcon={<UserRound size={18} />}
          >
            <Image
              className={styles.popoverAboutImage}
              src={Photo}
              alt="A photo of myself"
              height={75}
              width={75}
            ></Image>

            <div className={styles.popoverAboutName}>James Sartelle</div>
            <p className={styles.popoverAboutBio}>{bio}</p>

            {bioContacts}

            {/* <button
              className={['aqua-button', styles.siteCreditsButton].join(' ')}
              popoverTarget="siteCreditsPopover"
            >
              Site Credits...
            </button> */}

            {/* FIXME move onto Site Credits page */}
            {/* <footer className={styles.popoverAboutFooter}>
          <div>©️ 2024 James Sartelle</div>
          <div>All Rights Reserved.</div>
        </footer> */}
          </ContentWindow>

          <ContentWindow
            title="Skills"
            titleIcon={<BookText size={18} />}
            contentClassName={styles.resumeContent}
          >
            {languagesSection}
            {frameworksSection}
          </ContentWindow>
        </div>

        <div className={styles.column}>
          <ContentWindow
            title="History"
            titleIcon={<Briefcase size={18} />}
            className={styles.history}
            contentClassName={styles.resumeContent}
          >
            <section>
              <h3>Experience</h3>
              {experienceExtra}
              {experienceDigichief}
              {experienceMood}
              {experienceSchwab}
            </section>

            <section>
              <h3>Education</h3>
              {experienceUNC}
            </section>
          </ContentWindow>
        </div>
      </main>

      <ContentWindow
        Tag="article"
        id="siteCreditsPopover"
        className={styles.siteCreditsPopover}
        contentClassName={styles.siteCredits}
        popover="auto"
        title="Site Credits"
      >
        {credits}
      </ContentWindow>
    </div>
  )
}

const blurDataURL =
  'data:image/webp;base64,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dHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJEYXRhVmVyc2lvbj4zPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyRGF0YVZlcnNpb24+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyQXBwbGljYXRpb24+cGl4ZWxtYXRvclBybzwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckFwcGxpY2F0aW9uPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckRldmljZT5NYWMxNCwxNTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlckRldmljZT4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJPUz4xNC41LjA8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJPUz4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJFbmFibGVkPlRydWU8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJFbmFibGVkPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlclBsYXRmb3JtPm1hY09TPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyUGxhdGZvcm0+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyVVRJPmNvbS5waXhlbG1hdG9ydGVhbS5waXhlbG1hdG9yLmRvY3VtZW50LXByby1zaWRlY2FyLmJpbmFyeTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhclVUST4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJQcm9jZXNzSUQ+NzIzMDI8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJQcm9jZXNzSUQ+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyVmVyc2lvbj4yPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyVmVyc2lvbj4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJXcml0ZXJCdWlsZD4xNzhjMzYyPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyQnVpbGQ+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FySWRlbnRpZmllcj4yQUU2MjQwMC1GNjM2LTQwNEEtOTBBQy0xMUMyOTA4NDEzMTM8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJJZGVudGlmaWVyPgogICAgICAgICA8UGl4ZWxtYXRvclRlYW06U2lkZWNhckxvY2F0aW9uPmxvY2FsPC9QaXhlbG1hdG9yVGVhbTpTaWRlY2FyTG9jYXRpb24+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyQmFzZUZpbGVuYW1lPjEwLTQtYmx1cnJlZDwvUGl4ZWxtYXRvclRlYW06U2lkZWNhckJhc2VGaWxlbmFtZT4KICAgICAgICAgPFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJTaG9ydEhhc2g+MkFFNjI0MDA8L1BpeGVsbWF0b3JUZWFtOlNpZGVjYXJTaG9ydEhhc2g+CiAgICAgICAgIDxQaXhlbG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyVmVyc2lvbj4zLjYuMTwvUGl4ZWxtYXRvclRlYW06U2lkZWNhcldyaXRlclZlcnNpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjQtMDUtMzFUMjA6NTM6MTEtMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciBQcm8gMy42LjE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cg=='
/* FIXME third window for About content with hobbies and stuff */
const bio =
  "A full stack developer based in Oklahoma City, OK, with a focus on front-end. I'm passionate about user experience, accessibility, and making software feel delightful!"

/* FIXME maybe use Aqua buttons for these? */
const bioContacts = (
  <ul className={styles.bioContacts}>
    <li>
      <Phone size={15} />
      <a target="_blank" href="tel:9806229704">
        980-622-9704
      </a>
    </li>
    <li>
      <Github size={15} />
      <a target="_blank" href="https://github.com/jsartelle">
        jsartelle
      </a>
    </li>
    <li>
      <Mail size={15} />
      <a target="_blank" href="mailto:jamessartelle@me.com">
        jamessartelle@me.com
      </a>
    </li>
    <li>
      <Linkedin size={15} />
      <a target="_blank" href="https://www.linkedin.com/in/james-sartelle/">
        https://www.linkedin.com/in/<wbr />james-sartelle/
      </a>
    </li>
  </ul>
)

const languagesSection = (
  <section>
    <h3>Languages</h3>
    <div className={styles.skillGrid}>
      <SkillCard logo={HTML5Logo} title="HTML5" progress={5} />
      <SkillCard logo={CSSLogo} title="CSS" progress={5} />
      <SkillCard logo={SassLogo} title="Sass" progress={5} />
      <SkillCard logo={JavaScriptLogo} title="JavaScript" progress={5} />
      <SkillCard logo={TypeScriptLogo} title="TypeScript" progress={5} />
      <SkillCard LogoIcon={Database} title="MySQL" progress={3} />
      <SkillCard logo={BashLogo} title="Shell" progress={2} />
      <SkillCard logo={SwiftLogo} title="Swift" progress={2} />
    </div>
  </section>
)

const frameworksSection = (
  <section>
    <h3>Frameworks</h3>
    <div className={styles.skillGrid}>
      <SkillCard
        logo={ReactLogo}
        title="React"
        secondary="Next.js"
        progress={4}
      />
      <SkillCard
        logo={ReactNativeLogo}
        title="React Native"
        secondary="Expo"
        progress={3}
      />
      <SkillCard logo={VueLogo} title="Vue" secondary="Nuxt" progress={4} />
      <SkillCard
        logo={SvelteLogo}
        title="Svelte"
        secondary="SvelteKit"
        progress={4}
      />
      <SkillCard logo={TailwindLogo} title="Tailwind" progress={4} />
      <SkillCard logo={JestLogo} title="Jest" progress={2} />
    </div>
  </section>
)

const experienceExtra = (
  <article>
    <hgroup className={styles.experienceHead}>
      <h4>
        <a target="_blank" href="https://extra.app/">
          Extra Card
        </a>
      </h4>
      <p>January 2022 - June 2024</p>
      <p>Remote</p>
      <strong>Senior Full Stack Engineer</strong>
    </hgroup>

    <ul>
      <li>
        Lead engineer for the Extra web signup funnel, built with{' '}
        <strong>Nuxt</strong>. Implemented <strong>TypeScript</strong> in the
        funnel, and worked on migrating from Nuxt 2 to 3. Regularly updated the
        funnel to align with product and compliance goals. Made major
        performance and accessibility improvements across the entire funnel, as
        well as landing pages built in Webflow.
      </li>
      <li>
        Made significant contributions to Extra&apos;s API, built on{' '}
        <strong>Node</strong> and <strong>Express</strong> using TypeScript and{' '}
        <strong>Objection ORM</strong>. Wrote unit tests using{' '}
        <strong>Jest</strong>.
      </li>
      <li>
        Implemented new screens in Extra&apos;s iOS and Android app, built with{' '}
        <strong>React Native</strong> and <strong>Expo</strong>.
      </li>
      <li>
        Led development on a new funnel prototype using <strong>Next.js</strong>{' '}
        and <strong>React Native Web</strong>, deployed on AWS Serverless.
        Helped design a new microservice architecture for the accompanying
        backend.
      </li>
      <li>
        Designed and implemented <strong>MySQL</strong> database schemas to
        support new feature launches, and wrote complex queries to diagnose bugs
        and answer questions from product and marketing teams.
      </li>
      <li>
        Led design and implementation on a new API service and PostgreSQL
        database for a planned feature launch.
      </li>
      <li>
        Tracked application performance and user experience using{' '}
        <strong>Datadog</strong> dashboards, alerting, and Real User Monitoring,
        and <strong>Sentry</strong> error tracking.
      </li>
      <li>
        Consistently met tight deadlines, often with little advance notice.
        Adapted to mid-sprint scope changes and P0 issues. Drove acceptance
        testing sessions for project managers.
      </li>
    </ul>
  </article>
)

const experienceDigichief = (
  <article>
    <hgroup className={styles.experienceHead}>
      <h4>
        <a target="_blank" href="https://www.digichief.com/">
          Digichief
        </a>
      </h4>
      <p>May 2018 - March 2024</p>
      <p>Remote</p>
      <strong>Freelance Web Developer</strong>
    </hgroup>

    <ul>
      <li>
        Built over 50 digital signage applications in vanilla{' '}
        <strong>HTML5, CSS, and JavaScript</strong>, helping Digichief leverage
        their content APIs into a full digital signage platform. Translated
        designs into responsive markup. Optimized content for strict network and
        memory usage limits.
      </li>
    </ul>
  </article>
)

const experienceMood = (
  <article>
    <hgroup className={styles.experienceHead}>
      <h4>
        <a target="_blank" href="https://us.moodmedia.com/">
          Mood Media
        </a>
      </h4>
      <p>June 2016 - January 2022</p>
      <p>Fort Mill, SC</p>
      <strong>Senior Web Developer, Visuals</strong>
    </hgroup>

    <ul>
      <li>
        Created 1000+ pieces of digital signage content using{' '}
        <strong>HTML5, CSS, and JavaScript</strong>. Made heavy use of CSS and
        JavaScript animation, and data fetched from APIs. Optimized performance
        for low-powered media players.
      </li>
      <li>
        Developed interactive touch applications using <strong>Vue</strong> for
        international brands including Dyson, Ferrari, and Bridgestone.
        Coordinated with clients and other developers to ensure strict deadlines
        were met and to resist scope creep.
      </li>
      <li>
        Built server applications using <strong>Node.js</strong> to process data
        for digital signage use, including integration with third party data
        providers like Facebook.
      </li>
      <li>
        Documented Mood’s platform and APIs for both internal and external
        users. Mentored and directed junior developers remotely.
      </li>
    </ul>
  </article>
)

const experienceSchwab = (
  <article>
    <hgroup className={styles.experienceHead}>
      <h4>
        <a target="_blank" href="https://www.schwab.com/">
          Charles Schwab
        </a>
      </h4>
      <p>August 2015 - June 2016</p>
      <p>Charlotte, NC</p>
      <strong>Developer, Schwab Retirement Technologies</strong>
    </hgroup>

    <ul>
      <li>
        Helped launch a consumer-facing retirement plan dashboard, including
        front-end components using <strong>Angular</strong> and back-end
        controllers using <strong>TypeScript</strong>.
      </li>
      <li>
        Designed and implemented an automated email service, including{' '}
        <strong>SQL</strong> scripts and stored procedures, and back-end code in{' '}
        <strong>C#</strong> using <strong>ASP.NET</strong>.
      </li>
      <li>
        Wrote extensive unit tests for front-end code using{' '}
        <strong>Jasmine</strong> and <strong>Sinon</strong>, and for back-end
        code using <strong>Moq</strong>.
      </li>
    </ul>
  </article>
)

const experienceUNC = (
  <article>
    <hgroup className={styles.experienceHead}>
      <h4>
        <a target="_blank" href="https://www.charlotte.edu/">
          The University of North Carolina at Charlotte
        </a>
      </h4>
      <p>May 2015</p>
      <p>Charlotte, NC</p>
      <strong>Bachelor of Science, Cum Laude, Computer Science</strong>
      <p>GPA: 3.689 / 4.0</p>
    </hgroup>
  </article>
)

const credits = (
  <>
    <section>
      <h3>Knowledge</h3>
      <ul>
        <li>
          CSS Reset:{' '}
          <a href="https://www.joshwcomeau.com/css/custom-css-reset/">
            https://www.joshwcomeau.com/css/custom-css-reset/
          </a>
        </li>
        <li>
          Font size scale:{' '}
          <a href="https://notadesigner.io/p/typographic-scales">
            https://notadesigner.io/p/typographic-scales
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3>Resources</h3>
      <ul>
        <li>
          Lunasima font:{' '}
          <a href="https://fonts.google.com/specimen/Lunasima">
            https://fonts.google.com/specimen/Lunasima
          </a>
        </li>
        <li>
          Tiger wallpaper:{' '}
          <a href="https://512pixels.net/projects/default-mac-wallpapers-in-5k/">
            https://512pixels.net/projects/default-mac-wallpapers-in-5k/
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h4>Logos</h4>
      <ul>
        <li>
          HTML5: W3C, CC BY 3.0{' '}
          <a href="https://creativecommons.org/licenses/by/3.0">
            https://creativecommons.org/licenses/by/3.0
          </a>
          , via Wikimedia Commons
        </li>
        <li>
          CSS: Rudloff, CC BY 3.0{' '}
          <a href="https://creativecommons.org/licenses/by/3.0">
            https://creativecommons.org/licenses/by/3.0
          </a>
          , via Wikimedia Commons
        </li>
        <li>
          Sass: <a href="http://sass-lang.com/">http://sass-lang.com/</a>,
          Public domain, via Wikimedia Commons
        </li>
        <li>
          JavaScript: Christopher Williams, Public domain, via Wikimedia Commons
        </li>
        <li>TypeScript: TypeScript, Public domain, via Wikimedia Commons</li>
        <li>
          Shell (Bash): Free Software Foundation, FAL, via Wikimedia Commons
        </li>
        <li>Swift: The Swift logo is a trademark of Apple Inc.</li>
        <li>React: Meta Platforms, Public domain, via Wikimedia Commons</li>
        <li>React Native: Facebook, Public domain, via Wikimedia Commons</li>
        <li>
          Vue: Evan You,{' '}
          <a href="https://github.com/yyx990803">
            https://github.com/yyx990803
          </a>
          , CC BY 4.0{' '}
          <a href="https://creativecommons.org/licenses/by/4.0">
            https://creativecommons.org/licenses/by/4.0
          </a>
          , via Wikimedia Commons
        </li>
        <li>
          Svelte:{' '}
          <a href="https://github.com/sveltejs/svelte/graphs/contributors">
            these people
          </a>
          , MIT{' '}
          <a href="http://opensource.org/licenses/mit-license.php">
            http://opensource.org/licenses/mit-license.php
          </a>
          , via Wikimedia Commons
        </li>
        <li>
          Tailwind: Tailwind CSS, CC BY-SA 4.0{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">
            https://creativecommons.org/licenses/by-sa/4.0
          </a>
          , via Wikimedia Commons
        </li>
        <li>Jest: Copyright OpenJS Foundation and Jest contributors.</li>
        <li>Lucide Icons:</li>
      </ul>
      <br />
      <p>
        Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as
        part of Feather (MIT). All other copyright (c) for Lucide are held by
        Lucide Contributors 2022.
      </p>
      <br />
      <p>
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND THE AUTHOR DISCLAIMS ALL
        WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
        OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
        FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
        DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER
        IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING
        OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
      </p>
    </section>
  </>
)
