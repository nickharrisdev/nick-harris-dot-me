import format from "date-fns/format";
import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router";
import { Jam } from "../domain/types/jam.interface";
import { getSortedJamsData } from "../lib/jams"

export default function WeeklyJams({
  allJamsData,
  yearsOfPosts
}: {
  allJamsData: Jam[],
  yearsOfPosts: number[]
}) {
  const router = useRouter()
  const currentYear = new Date().getFullYear();
  const selectedYear = router.query?.year ?? currentYear;
  const jamsFilteredByYear =  allJamsData.filter(jam => jam.yearPosted === Number(selectedYear))

  return (
    <>
      <h2 className="mt-3">Weekly Jams</h2>
      <p className="mb-0">Short blog posts about the music that intersects with my life over the course of each week. Updated most weekends.</p>
      <p><a href="https://open.spotify.com/playlist/5BWFJGx0U1a93zP5dWj3Zn?si=d08b42e4b99d4f65" target="_blank" rel="noopener noreferrer">Follow the playlist on Spotify</a></p>
      <div className="my-3">
        {jamsFilteredByYear?.map(({ id, date, title, artist, releaseYear }) => (
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
      <h4 className="mb-0">Posts from other years</h4>
      {yearsOfPosts?.map((year, index) => {
        if (year !== Number(selectedYear)) {
          return (
            <Link href={`/weekly-jams?year=${year}`} key={index}><a className="mr-1">{year}</a></Link>
          )
        }
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const allJamsData = getSortedJamsData()
  let yearsOfPosts: number[] = [];
  allJamsData.forEach((jam) => {
    if (!yearsOfPosts.includes(jam.yearPosted)) {
      yearsOfPosts.push(jam.yearPosted);
    }
  })
  return {
    props: {
      allJamsData,
      yearsOfPosts
    }
  }
}