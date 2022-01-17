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