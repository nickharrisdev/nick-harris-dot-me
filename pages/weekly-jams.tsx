import { GetStaticProps } from "next"
import Link from "next/link"
import { getSortedJamsData } from "../lib/jams"

export default function WeeklyJams({
  allJamsData
}: {
  allJamsData: any[]
}) {
  return (
    <>
      <h2 className="my-3">Weekly Jams</h2>
      <div>
        {allJamsData?.map(({ id, date, title }) => (
          <div key={id}>
            <Link href={`jams/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {date}
          </div>
          ))}
      </div> 
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