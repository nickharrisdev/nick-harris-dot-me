import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Link from 'next/link'
import { HttpClient } from '../data-access/http-client'

export default function Discography({
  props
}: {
  props: any;
}){
  // need to use this combination of urls to get all the data needed from discogs.
  // first get releases of mine, then get more data about those releases for specifcs about my role
  // might be a good usecase for promise.all, but unsure why SWR doesn't use promises
  // todo: move this func to another section of the app to handle data getting
  // todo: handle error
  // https://api.discogs.com/artists/6067515
  // https://api.discogs.com/artists/6067515/releases

  const httpClient = new HttpClient();

  const { data, error } = useSWR(
    "https://api.discogs.com/artists/6067515/releases",
    httpClient.get
  );

  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  // console.log(data, "data")

  return (
    <>
        <h2>
          Discography
        </h2>

        {/* list the releases */}
        <div>
          {/* @ts-ignore */}
          {data?.releases.map(({ title, artist }, index) => {
            const regex = /[0-9]/g;
            artist = artist.replaceAll(regex, "").replaceAll("(", "").replaceAll(")", "");
            return (
              <p key={index}>
                {title} by {artist}
              </p>
            )})}
        </div>
        <Link href="/">
          <a>Go back</a>
        </Link>
    </>
  )
}
