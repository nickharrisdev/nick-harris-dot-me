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
      <p>Short blog posts about the music that intersected with my life over the course of the last week. Updated on Saturdays.</p>
      <div className="my-3">
        {allJamsData?.map(({ id, date, title }) => (
          <div className="grid grid-cols-3 max-w-lg sm:grid-cols-5" key={id}>
            <p className="mb-0 col-span-1">{format(new Date(date), "MMM dd, yyyy")}</p>


            <div className="flex flex-wrap w-auto col-span-2 sm:col-span-4">
            <Link href={`/jams/${id}`}>
              <a>{title}</a>
            </Link>
            </div>
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