import type { GetStaticProps } from 'next'
import { getSortedProjectsData } from '../lib/projects'
import { Projects } from '../domain/types/projects.interface'

/**
 * I'm a product-minded software engineer who believes the most important part of software is the people — both those who build it and those who use it. I see software as a medium for communicating intentions, reflecting human relationships, and solving real-world problems with empathy and purpose. Technology excites me most when it's used effectively to meet meaningful needs and bring people closer together.

Specializing in front-end development, I create user interfaces that are beautiful, accessible, intuitive, and performant — for users — and reusable, extensible, and maintainable — for developers. I care deeply about building thoughtful tools that last, empower, and inspire.
 */

export default function Home({
  allProjectsData
}: {
  allProjectsData: Projects[]
}){
  return (
    <>
      <img src="/me.jpeg" alt="A picture of Nick Harris in a red hat." width="200" height="200" className="shadow-md rounded my-4"/>
      <p >
        I&apos;m a product-minded software engineer who believes the most important part of software is the people — both those who build it and those who use it. I see software as a medium for communicating intentions, reflecting human relationships, and solving real-world problems with empathy and purpose. Technology excites me most when it's used effectively to meet meaningful needs and bring people closer together.
      </p>
      <p> 
       Specializing in front-end development, I create user interfaces that are beautiful, accessible, intuitive, and performant — for users — and reusable, extensible, and maintainable — for developers. I care deeply about building thoughtful tools that last, empower, and inspire.
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