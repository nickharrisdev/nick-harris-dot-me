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

export default function List(props: {type?: string}) {
  if (props.type === "artist-list") {
    return (
      <>
        {/* @ts-ignore */}
        <h4 className="mt-1">Credited as {formatArtistName(props.artistDetails.name)}</h4>
        {/* @ts-ignore */}
        <p className="mb-1">{props.list.length} results</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {/* @ts-ignore */}
        {props.list?.map(({ id, title, artist, year, thumb }, index) => {
          return (
              <div className="flex flex-col" key={index}>
                <a href={formatHref(id, artist, title)} target="_blank" rel="noreferrer">
                  <img src={thumb} alt="Album cover thumbnail" loading="lazy" className="shadow-md" width="170" height="auto" />
                  <p>{title}</p>
                </a>
                <p>{formatArtistName(artist)}</p> 
                <p>({year})</p>
              </div>
          )})}
        </div>
      </>
   )
  } else {
    return (
      <div>No data</div>
   )
  }
} 
