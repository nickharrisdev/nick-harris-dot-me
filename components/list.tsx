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
        <h3>Credited as {formatArtistName(props.artistDetails.name)}</h3>
        <div>
        {/* @ts-ignore */}
        {props.list?.map(({ id, title, artist, year }, index) => {
          return (
            <p key={index}>
              <a href={formatHref(id, artist, title)} target="_blank">{title}</a> by {formatArtistName(artist)} ({year})
            </p>
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
