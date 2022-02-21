import { GetStaticProps } from "next"
import Link from "next/link"
import { getSortedJamsData } from "../lib/jams"

export default function WeeklyJams({
  allJamsData
}: {
  allJamsData: any[]
}) {
  console.log(allJamsData, "allJams Data")
  return (
    <>
      <h2>Weekly Jams</h2>
      <ul>
        {allJamsData?.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`jams/${id}`}>
              <a>{title}</a>
            </Link>
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

export const getStaticProps: GetStaticProps = async () =>{
  const allJamsData = getSortedJamsData()
  return {
    props: {
      allJamsData
    }
  }
}