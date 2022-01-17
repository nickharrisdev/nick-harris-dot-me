import type { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getSortedProjectsData } from '../lib/projects'
import { AllProjectsData } from '../domain/props.interface'


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
        <a href="https://www.linkedin.com/in/nick-harris-web-dev/" rel="noreferrer" aria-label="Linked In" className="no-underline" target="_blank">
          <i className="fab fa-linkedin fa-3x mr-2 text-primary-500" aria-hidden></i>
        </a>
        <a href="https://www.github.com/nickharrisdev" className="no-underline" target="_blank" rel="noreferrer" aria-label="Github">
          <i className="fab fa-github fa-3x mx-2 text-primary-500" aria-hidden></i>
        </a>
        <a href="https://fosstodon.org/@nickharris" className="no-underline" target="_blank" rel="noreferrer" aria-label="Mastadon">
          <i className="fab fa-mastodon fa-3x mx-2 text-primary-500" aria-hidden></i>
        </a>
        <a href="mailto:nick@nickharris.me" className="no-underline" target="_blank" rel="noreferrer" aria-label="Email">
          <i className="far fa-envelope fa-3x mx-2 text-primary-500" aria-hidden></i>
        </a>
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