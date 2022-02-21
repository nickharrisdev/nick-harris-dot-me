import format from "date-fns/format";
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
      <h2 className="mt-3">Weekly Jams</h2>
      <p>I post my favorite song(s) of the week here + one or two other notes.</p>
      <div className="my-3">
        {allJamsData?.map(({ id, date, title }) => (
          <div key={id}>
            <Link href={`jams/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {format(new Date(date), "MMM d, yyyy")}
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