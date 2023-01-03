import format from "date-fns/format";
import { GetServerSideProps } from "next"
import Link from "next/link"
import { Jam } from "../domain/types/jam.interface";
import { getJamsByYearPosted, yearsOfPosts } from "../lib/jams"

export default function WeeklyJams({
  jamsData,
  selectedYear,
  years,
  yearSetViaQueryString
}: {
  jamsData: Jam[],
  selectedYear: number,
  years: string[],
  yearSetViaQueryString: boolean;
}) {
  const showSelectedYear = yearSetViaQueryString && selectedYear !== new Date().getFullYear();
  return (
    <>
      <h2 className="mt-3">
        Weekly Jams 
        {showSelectedYear &&
          <>
            &nbsp;({selectedYear})
          </>
        }
      </h2>
      <p className="mb-0">Short blog posts about the music that intersects with my life over the course of each week. Updated most weekends.</p>
      <p><a href="https://open.spotify.com/playlist/5BWFJGx0U1a93zP5dWj3Zn?si=d08b42e4b99d4f65" target="_blank" rel="noopener noreferrer">Follow the playlist on Spotify</a></p>
      <div className="my-3">
        {jamsData?.map(({ id, date, title, artist, releaseYear, yearPosted }) => (
          <div className="grid grid-cols-3 max-w-lg sm:grid-cols-5" key={id}>
            <p className="mb-0 col-span-1">{format(new Date(date), "MMM dd, yyyy")}</p>
            <div className="flex flex-wrap w-auto col-span-2 sm:col-span-4">
            <Link href={`/jams/${yearPosted}/${id}`}>
              <a>{title} by {artist} ({releaseYear})</a>
            </Link>
            </div>
          </div>
          ))}
      </div> 
      <h4 className="mb-0">Posts from other years</h4>
      {years?.map((year, index) => {
        if (year !== String(selectedYear)) {
          return (
            <Link href={`/weekly-jams?year=${year}`} key={index}><a className="mr-1">{year}</a></Link>
          )
        }
      })}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const selectedYear = Number(context.query?.year) || new Date().getFullYear();
  const jamsData = getJamsByYearPosted(selectedYear);
  const years = yearsOfPosts;
  return {
    props: {
      jamsData,
      selectedYear,
      years,
      yearSetViaQueryString: !!context.query?.year,
    }
  }
}
