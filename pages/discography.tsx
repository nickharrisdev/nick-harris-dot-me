import useSWR from 'swr'
import Link from 'next/link'
import { HttpClient } from '../data-access/http-client'

export default function Discography(){
  // need to use this combination of urls to get all the data needed from discogs.
  // first get releases of mine, then get more data about those releases for specifcs about my role
  // might be a good usecase for promise.all, but unsure why SWR doesn't use promises
  // need to do a separate call to get Ricky Mirage releases
  // todo: move this func to another section of the app to handle data getting
  // todo: handle error
  // https://api.discogs.com/artists/6067515
  // https://api.discogs.com/artists/6067515/releases

  const httpClient = new HttpClient();

  const getArtistReleaseData = (id: string) => {
    const { data, error } = useSWR(
      `https://api.discogs.com/artists/${id}/releases`,
      httpClient.get
    );
    return data;
  }

  const nhReleaseData = getArtistReleaseData("6067515");
  const rmReleaseData = getArtistReleaseData("10538149");
  // console.log(nhReleaseData)

  return (
    <>
        <h2>
          Discography
        </h2>

        {/* list the releases */}
        <div>
          {/* @ts-ignore */}
          {nhReleaseData?.releases.map(({ title, artist, year }, index) => {
            const regex = /[0-9]/g;
            artist = artist.replaceAll(regex, "").replaceAll("(", "").replaceAll(")", "");
            return (
              <p key={index}>
                {title} by {artist} ({year})
              </p>
            )})}
        </div>
        <h3>As Ricky Mirage:</h3>
        <div>
          {/* @ts-ignore */}
          {rmReleaseData?.releases.map(({ title, artist, year }, index) => {
            const regex = /[0-9]/g;
            artist = artist.replaceAll(regex, "").replaceAll("(", "").replaceAll(")", "");
            return (
              <p key={index}>
                {title} by {artist} ({year})
              </p>
            )})}
        </div>
        <Link href="/">
          <a>Go back</a>
        </Link>
    </>
  )
}
