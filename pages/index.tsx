import type { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import { getSortedProjectsData } from '../lib/projects'
import { AllProjectsData } from '../domain/props.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Home({
  allProjectsData
}: {
  allProjectsData: AllProjectsData[]
}){
  return (
    <>
      {/* projects list */}
      <h2 id="projects">
        Projects
      </h2>
      <ul>
        {allProjectsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>

      {/* links */}
      <div id="contact" className={styles.contactIconsContainer}>
        <h2>Get in touch</h2>
        <div className={styles.iconsContainer}>
          <a href="https://www.linkedin.com/in/nick-harris-web-dev/" rel="noreferrer" aria-label="Linked In" className="no-underline" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={styles.faIcon}/>
          </a>
          <a href="https://www.github.com/nickharrisdev" className="no-underline" target="_blank" rel="noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className={styles.faIcon}/>
          </a>
          <a href="https://fosstodon.org/@nickharris" className="no-underline" target="_blank" rel="noreferrer" aria-label="Mastadon">
            <FontAwesomeIcon icon={faMastodon} className={styles.faIcon}/>
          </a>
          <a href="mailto:nick@nickharris.me" className="no-underline" target="_blank" rel="noreferrer" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
          </a>
        </div>
      </div>  
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}