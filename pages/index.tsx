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
      <img src="/me.jpeg" alt="A picture of Nick Harris in a red hat." width="200" height="200" className="shadow-md rounded my-4"/>
      <p >
        I&apos;m a Senior Software Engineer specializing in front-end development. I craft UIs that are beautiful, accessible, and performant for users while ensuring they are reusable, extensible, and maintainable for engineering teams.
      </p>
      <p> 
        Beyond building great software, I&apos;m passionate about mentoring, improving developer experience, and contributing to technology that makes a meaningful impact. I also volunteer my expertise to support nonprofit organizations whose missions inspire me.
      </p>
      <p> 
        When not making stuff on the internet, I can usually be found playing music with <a href="https://moonerband.com/" target="_blank" rel="noopener noreferrer"> Mooner</a>, <a href="https://youngmaninahurry.com" target="_blank" rel="noopener noreferrer">Young Man in a Hurry</a>, or attending a local show. 
      </p>
      {/* projects list */}
      {/* <h2 id="projects">
        Recent projects
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
      </ul> */}
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