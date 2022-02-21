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
        I&apos;m a self-taught software developer with a diverse professional background. Specializing on the front end, I create UIs that are beautiful, accessible, intuitive, and performant for users, while also reusable, extensible, and maintainable for other developers. 
      </p>
      <p> 
        I&apos;m inspired by technology that actively strives to make the world a better place. In addition, I volunteer my expertise regularly to help non profit organizations with missions that move me.
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