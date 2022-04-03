import format from "date-fns/format";
import Link from "next/link";
import { DiscogService } from "../domain/services/discog-service";
import { ShowService } from "../domain/services/show-service";
import { Release } from "../domain/types/release.interface";
import { Show } from "../domain/types/show.interface";

const discogService = new DiscogService()
const showService = new ShowService();

export default function List(props: {list?: Show[] | Release[], type?: string, artistDetails?: {name: string}}) {
  if (props.type === "artist-list") {
    return (
      <>
        {/* @ts-ignore */}
        <h4 className="mt-1">Credited as {discogService.formatArtistName(props.artistDetails.name)}</h4>
        <p className="mb-1">{props.list?.length} results</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-3">
        {/* @ts-ignore */}
        {props.list?.map(({ id, title, artist, year, thumb }, index) => {
          return (
              <div className="flex flex-col" key={index}>
                <a href={discogService.buildDiscogsHref(id, artist, title)} target="_blank" rel="noreferrer">
                  <img src={thumb} alt="Album cover thumbnail" loading="lazy" className="shadow-md" width="170" height="auto" />
                  <p className="mb-0">{title}</p>
                </a>
                <p className="mb-0">{discogService.formatArtistName(artist)}</p> 
                <p className="mb-0">({year})</p>
              </div>
          )})}
        </div>
      </>
   )
  } else if (props.type === "shows-list") {
    const today: Date = new Date();
    // @ts-ignore
    const pastShows: Show[] = props.list?.filter((show: Show) => show.date < today)
    // @ts-ignore
    const upcomingShows: Show[] = props.list?.filter((show: Show) => show.date > today)
    const sortedPastShows = showService.sortShowsByDate(pastShows, "asc");
    const sortedUpcomingShows = showService.sortShowsByDate(upcomingShows, "desc")

    return (
      <>
        <h3>Upcoming</h3>
        {sortedUpcomingShows?.map(({venue, group, date, link, city}, index) => {
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
        })}
        <h3 className="mt-4">Previous</h3>
        {sortedPastShows?.map(({venue, group, date, link, city}, index) => {
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
        })}
      </>
    )
  } else {
    return (
      <div>No data</div>
   )
  }
} 
