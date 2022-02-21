import { GetStaticProps } from "next"
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

export const getStaticProps: GetStaticProps = async () =>{
  const allJamsData = getSortedJamsData()
  return {
    props: {
      allJamsData
    }
  }
}