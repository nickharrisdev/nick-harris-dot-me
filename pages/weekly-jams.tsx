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
      <p className="mb-0">Short blog posts about the music that intersects with my life over the course of each week. Updated most weekends.</p>
      <p><a href="https://open.spotify.com/playlist/5BWFJGx0U1a93zP5dWj3Zn?si=d08b42e4b99d4f65" target="_blank" rel="noopener noreferrer">Follow the playlist on Spotify</a></p>
      <div className="my-3">
        {allJamsData?.map(({ id, date, title, artist, releaseYear }) => (
          <div className="grid grid-cols-3 max-w-lg sm:grid-cols-5" key={id}>
            <p className="mb-0 col-span-1">{format(new Date(date), "MMM dd, yyyy")}</p>
            <div className="flex flex-wrap w-auto col-span-2 sm:col-span-4">
            <Link href={`/jams/${id}`}>
              <a>{title} by {artist} ({releaseYear})</a>
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