import format from "date-fns/format";
import { Release } from "../domain/types/release.interface";
import { Show } from "../domain/types/show.interface";

const formatArtistName = (name: string) => {
  const regex = /[0-9]/g;
  const formattedName = name.replaceAll(regex, "").replaceAll("(", "").replaceAll(")", "");
  return formattedName;
}

const formatHref = (id: string, artistName: string, title: string) => {
  const baseUrl = "https://www.discogs.com/release/"
  const path = `${id}-${artistName?.replaceAll(" ", "-")}-${title?.replaceAll(" ", "-").replaceAll("'", "")}`
  return `${baseUrl}${path}`
}

export default function List(props: {list?: Show[] | Release[], type?: string, artistDetails?: {name: string}}) {
  if (props.type === "artist-list") {
    return (
      <>
        {/* @ts-ignore */}
        <h4 className="mt-1">Credited as {formatArtistName(props.artistDetails.name)}</h4>
        <p className="mb-1">{props.list?.length} results</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-3">
        {/* @ts-ignore */}
        {props.list?.map(({ id, title, artist, year, thumb }, index) => {
          return (
              <div className="flex flex-col" key={index}>
                <a href={formatHref(id, artist, title)} target="_blank" rel="noreferrer">
                  <img src={thumb} alt="Album cover thumbnail" loading="lazy" className="shadow-md" width="170" height="auto" />
                  <p className="mb-0">{title}</p>
                </a>
                <p className="mb-0">{formatArtistName(artist)}</p> 
                <p className="mb-0">({year})</p>
              </div>
          )})}
        </div>
      </>
   )
  } else if (props.type === "shows-list") {

    // TODO: sort by date utility function --> fly it in here. 

    return (
      <>
        {/* @ts-ignore */}
        {props.list?.map(({venue, group, date, link}, index) => {
          return (
            <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
              <p className="mb-0">{format(date, "MMM d, yyyy")}</p>
              <p><strong>{venue}</strong> with {group}</p>
            </a>
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
