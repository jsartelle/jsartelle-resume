import styles from './page.module.css'
import MenuBar from '@/app/components/MenuBar'
import ContentWindow from '@/app/components/ContentWindow'
import SkillCard from '@/app/components/SkillCard'

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
        <ContentWindow title="Skills">
          <section>
            <h3>Languages</h3>

            <div className={styles.skillGrid}>
              <SkillCard logo={HTML5Logo} title="HTML5" progress={5} />
              <SkillCard logo={CSSLogo} title="CSS" progress={5} />
              <SkillCard logo={SassLogo} title="Sass" progress={5} />
              <SkillCard
                logo={JavaScriptLogo}
                title="JavaScript"
                progress={5}
              />
              <SkillCard
                logo={TypeScriptLogo}
                title="TypeScript"
                progress={5}
              />
              <SkillCard logo={DatabaseLogo} title="MySQL" progress={3} />
              <SkillCard logo={BashLogo} title="Shell" progress={2} />
              <SkillCard logo={SwiftLogo} title="Swift" progress={2} />
            </div>
          </section>

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
              <SkillCard
                logo={VueLogo}
                title="Vue"
                secondary="Nuxt"
                progress={4}
              />
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
        </ContentWindow>

        {/* TODO page break? */}
        <ContentWindow title="History">
          <section>
            <h3>Experience</h3>

            <article>
              <hgroup>
                <h4>Extra Card</h4>
                <p>Remote</p>
                <p>January 2022 - June 2024</p>
              </hgroup>
              <strong>Senior Full Stack Engineer</strong>

              <ul>
                <li>
                  Lead engineer for the Extra web signup funnel, built with{' '}
                  <strong>Nuxt</strong>. Implemented <strong>TypeScript</strong>{' '}
                  in the funnel, and worked on migrating from Nuxt 2 to 3.
                  Regularly updated the funnel to align with product and
                  compliance goals. Made major performance and accessibility
                  improvements across the entire funnel, as well as landing
                  pages built in Webflow.
                </li>
                <li>
                  Made significant contributions to Extra&apos;s API, built on{' '}
                  <strong>Node</strong> and <strong>Express</strong> using
                  TypeScript. Wrote unit tests using <strong>Jest</strong>.
                </li>
                <li>
                  Implemented new screens in Extra&apos;s iOS and Android app,
                  built with <strong>React Native</strong> and{' '}
                  <strong>Expo</strong>.
                </li>
                <li>
                  Led development on a new funnel prototype using{' '}
                  <strong>Next.js</strong> and <strong>React Native Web</strong>
                  , deployed on AWS Serverless. Helped design a new microservice
                  architecture for the accompanying backend.
                </li>
                <li>
                  Designed and implemented <strong>MySQL</strong> database
                  schemas to support new feature launches, and wrote complex
                  queries to diagnose bugs and answer questions from product and
                  marketing teams.
                </li>
                <li>
                  Led design and implementation on a new API service and
                  PostgreSQL database for a planned feature launch.
                </li>
                <li>
                  Tracked application performance and user experience using{' '}
                  <strong>Datadog</strong> dashboards, alerting, and Real User
                  Monitoring, and <strong>Sentry</strong> error tracking.
                </li>
                <li>
                  Consistently met tight deadlines, often with little advance
                  notice. Adapted to mid-sprint scope changes and P0 issues.
                  Drove acceptance testing sessions for project managers.
                </li>
              </ul>
            </article>

            <article>
              <hgroup>
                <h4>Digichief</h4>
                <p>Remote</p>
                <p>May 2018 - March 2024</p>
              </hgroup>
              <strong>Freelance Web Developer</strong>

              <ul>
                <li>
                  Built over 50 digital signage applications in vanilla{' '}
                  <strong>HTML5, CSS, and JavaScript</strong>, helping Digichief
                  leverage their content APIs into a full digital signage
                  platform. Translated designs into responsive markup. Optimized
                  content for strict network and memory usage limits.
                </li>
              </ul>
            </article>

            <article>
              <hgroup>
                <h4>Mood Media</h4>
                <p>Fort Mill, SC</p>
                <p>June 2016 - January 2022</p>
              </hgroup>
              <strong>Senior Web Developer, Visuals</strong>

              <ul>
                <li>
                  Created 1000+ pieces of digital signage content using{' '}
                  <strong>HTML5, CSS, and JavaScript</strong>. Made heavy use of
                  CSS and JavaScript animation, and data fetched from APIs.
                  Optimized performance for low-powered media players.
                </li>
                <li>
                  Developed interactive touch applications using{' '}
                  <strong>Vue</strong> for international brands including Dyson,
                  Ferrari, and Bridgestone. Coordinated with clients and other
                  developers to ensure strict deadlines were met and to resist
                  scope creep.
                </li>
                <li>
                  Built server applications using <strong>Node.js</strong> to
                  process data for digital signage use, including integration
                  with third party data providers like Facebook.
                </li>
                <li>
                  Documented Mood’s platform and APIs for both internal and
                  external users. Mentored and directed junior developers
                  remotely.
                </li>
              </ul>
            </article>

            <article>
              <hgroup>
                <h4>Charles Schwab</h4>
                <p>Charlotte, NC</p>
                <p>August 2015 - June 2016</p>
              </hgroup>
              <strong>Developer, Schwab Retirement Technologies</strong>

              <ul>
                <li>
                  Helped launch a consumer-facing retirement plan dashboard,
                  including front-end components using <strong>Angular</strong>{' '}
                  and back-end controllers using <strong>TypeScript</strong>.
                </li>
                <li>
                  Designed and implemented an automated email service, including{' '}
                  <strong>SQL</strong> scripts and stored procedures, and
                  back-end code in <strong>C#</strong> using{' '}
                  <strong>ASP.NET</strong>.
                </li>
                <li>
                  Wrote extensive unit tests for front-end code using{' '}
                  <strong>Jasmine</strong> and <strong>Sinon</strong>, and for
                  back-end code using <strong>Moq</strong>.
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h3>Education</h3>

            <article>
              <hgroup>
                <h4>The University of North Carolina at Charlotte</h4>
                <p>Charlotte, NC</p>
                <p>May 2015</p>
              </hgroup>

              <div>
                <strong>
                  Bachelor of Science, Cum Laude, Computer Science
                </strong>
                <span>GPA: 3.689 / 4.0</span>
              </div>
            </article>
          </section>
        </ContentWindow>
      </main>
    </div>
  )
}
