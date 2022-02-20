const formatArtistName = (name: string) => {
  const regex = /[0-9]/g;
  const formattedName = name.replaceAll(regex, "").replaceAll("(", "").replaceAll(")", "");
  return formattedName;
}

export default function List(props: {type?: string}) {
  if (props.type === "artist-list") {
    return (
      <>
        {/* @ts-ignore */}
        <h3>Credited as {formatArtistName(props.artistDetails.name)}</h3>
        <div>
        {/* @ts-ignore */}
        {props.list?.map(({ title, artist, year }, index) => {
          return (
            <p key={index}>
              {title} by {formatArtistName(artist)} ({year})
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
