import format from "date-fns/format";
import Link from "next/link";
import { ShowService } from "../domain/services/show-service";
import { Release } from "../domain/types/release.interface";
import { Show } from "../domain/types/show.interface";
import { getShowId } from "../lib/utilities/get-show-id";

const showService = new ShowService();

export default function List(props: {list?: Show[] | Release[], type?: string, creditedAs?: string}) {
  if (props.type === "artist-list") {
    const releases = props.list as Release[]

      return (
        <>
          <h4 className="mt-1">Credited as {props.creditedAs}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-3">
          {releases?.map(({ title, artist, year, coverUrl, image, links }, index) => {
            return (
                <div className="flex flex-col" key={index}>
                  <span>
                    <img src={image ?? coverUrl} alt="Album cover" loading="lazy" className="shadow-md" width="170" height="auto" />
                    <p className="mb-0 font-bold">{title}</p>
                  </span>
                  <p className="mb-0">{artist}</p>
                  <p className="mb-0">({year})</p>
                  {links && (
                    <div className="flex gap-2 mt-1">
                      {links.bandcamp && <a href={links.bandcamp} target="_blank" rel="noreferrer" title="Bandcamp">🔷</a>}
                      {links.spotify && <a href={links.spotify} target="_blank" rel="noreferrer" title="Spotify">🟢</a>}
                      {links.appleMusic && <a href={links.appleMusic} target="_blank" rel="noreferrer" title="Apple Music">🍎</a>}
                      {links.download && <a href={links.download} target="_blank" rel="noreferrer" title="Free download">🆓</a>}
                    </div>
                  )}
                </div>
            )})}
          </div>
        </>
     )
  } else if (props.type === "shows-list") {
    const today: Date = new Date();
    const showsList = props.list as Show[];
    const pastShows: Show[] = showsList?.filter((show: Show) => show.date < today)
    const upcomingShows: Show[] = showsList?.filter((show: Show) => show.date > today)
    const sortedPastShows = showService.sortShowsByDate(pastShows, "asc");
    const sortedUpcomingShows = showService.sortShowsByDate(upcomingShows, "desc")

    return (
      <>
        <h3>Upcoming</h3>
        {sortedUpcomingShows?.length ? sortedUpcomingShows?.map(({venue, group, date, link, city}, index) => {
          return (
            <div className="grid grid-cols-3 max-w-lg sm:grid-cols-5" key={index}>
              <p className="mb-0 col-span-1">
              {`${format(date, "MMM dd, yyyy")}`}
              </p>
              <div className="flex flex-wrap w-auto col-span-2 sm:col-span-4">
                <Link href={link as string}>
                  <a target="_blank" rel="noopener noreferrer"><strong>{venue}</strong> ({city}) with {group}</a>
                </Link>
              </div>
            </div>
          )
        }) : "No upcoming shows."}
        <h3 className="mt-4">Previous (since 2022)</h3>
        {sortedPastShows?.map(({venue, group, date, link, city, notes}, index) => {
          const showId = getShowId(date);
          return (
            <div className="grid grid-cols-3 max-w-lg sm:grid-cols-5" key={index}>
              <p className="mb-0 col-span-1">
              {`${format(date, "MMM dd, yyyy")}`}
              </p>
              <div className="flex flex-wrap w-auto col-span-2 sm:col-span-4">
                <Link href={link as string}>
                <a target="_blank" rel="noopener noreferrer"><strong>{venue}</strong> ({city}) with {group}</a>
                </Link>
              </div>
              { notes && 
                <>
                  <div className="mb-0 col-span-1"></div>
                  <div className="col-span-2 sm:col-span-4">
                    <Link href={link as string}>
                      <a  href={`/shows/${showId}`} className="text-sm m-0" rel="noopener noreferrer">Show notes</a>
                    </Link>
                    &nbsp;<span>{notes?.emoji}</span>
                  </div>
                </>
              }
            </div>
          )
        })}
      </>
    )
  } else {
    return (
      <div>No data</div>
   )
  }
} 
