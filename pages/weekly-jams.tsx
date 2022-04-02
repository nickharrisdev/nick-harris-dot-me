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
      <p>Short blog posts about the music that intersected with my life over the course of the last week.</p>
      <div className="my-3">
        {allJamsData?.map(({ id, date, title }) => (
          <div className="flex" key={id}>
            <p className="mb-0">{format(new Date(date), "MMM d, yyyy")}&nbsp;-&nbsp;
            <Link href={`/jams/${id}`}>
              <a>{title}</a>
            </Link>
            </p>
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