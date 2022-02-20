import type { GetStaticProps } from 'next'
import { getSortedProjectsData } from '../lib/projects'
import { Projects } from '../domain/types/projects.interface'


export default function Home({
  allProjectsData
}: {
  allProjectsData: Projects[]
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