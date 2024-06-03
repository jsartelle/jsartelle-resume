import styles from './page.module.css'
import Image from 'next/image'
import { Phone, Mail, Github, Linkedin, Link } from 'lucide-react'
import MenuBar from '@/app/components/MenuBar'
import ContentWindow from '@/app/components/ContentWindow'
import SkillCard from '@/app/components/SkillCard'

import Photo from '@/public/photo.jpg'
import HTML5Logo from '@/public/logos/HTML5.svg'
import CSSLogo from '@/public/logos/CSS.svg'
import SassLogo from '@/public/logos/Sass.svg'
import JavaScriptLogo from '@/public/logos/JavaScript.svg'
import TypeScriptLogo from '@/public/logos/TypeScript.svg'
import DatabaseLogo from '@/public/logos/database.svg'
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

      <main className={styles.desktop}>
        {/* print only bio */}
        <ContentWindow className="print-only" title="About Me">
          {bio}
          <br />
          <br />
          {printBioContacts}
        </ContentWindow>

        <ContentWindow title="Skills" contentClassName={styles.resumeContent}>
          {languagesSection}
          {frameworksSection}
        </ContentWindow>

        <ContentWindow title="History" contentClassName={styles.resumeContent}>
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
      </main>

      <ContentWindow
        tag="article"
        id="aboutWindowPopover"
        className="print-hidden"
        popover="auto"
        contentClassName={styles.popoverBio}
        title="About Me"
      >
        <Image
          className={styles.popoverBioImage}
          src={Photo}
          alt="A photo of myself"
          height={75}
          width={75}
        ></Image>

        <div className={styles.popoverBioName}>James Sartelle</div>
        {bio}

        <button popoverTarget="siteCreditsPopover">Site Credits...</button>

        <footer className={styles.popoverBioFooter}>
          <div>©️ 2024 James Sartelle</div>
          <div>All Rights Reserved.</div>
        </footer>
      </ContentWindow>

      <ContentWindow
        tag="article"
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

/* TODO make this HTML and add hobbies and stuff */
const bio =
  "A full stack developer based in Oklahoma City, OK, with a focus on front-end. I'm passionate about user experience, accessibility, and making software feel delightful!"

const printBioContacts = (
  <ul className={styles.printBioContacts}>
    <li>
      <Phone size={15} />
      <a target="_blank" href="tel:9806229704">
        980-622-9704
      </a>
    </li>
    <li>
      <Mail size={15} />
      <a target="_blank" href="mailto:jamessartelle@me.com">
        jamessartelle@me.com
      </a>
    </li>
    <li>
      <Github size={15} />
      <a target="_blank" href="https://github.com/jsartelle">
        jsartelle
      </a>
    </li>
    <li>
      <Linkedin size={15} />
      <a target="_blank" href="https://www.linkedin.com/in/james-sartelle/">
        https://www.linkedin.com/in/james-sartelle/
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
      <SkillCard logo={DatabaseLogo} title="MySQL" progress={3} />
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
        <strong>Node</strong> and <strong>Express</strong> using TypeScript.
        Wrote unit tests using <strong>Jest</strong>.
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
      <h4>The University of North Carolina at Charlotte</h4>
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
        <li>SQL:</li>
      </ul>
      <p>
        Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as
        part of Feather (MIT). All other copyright (c) for Lucide are held by
        Lucide Contributors 2022.
      </p>
      <p>
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
      </p>
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
