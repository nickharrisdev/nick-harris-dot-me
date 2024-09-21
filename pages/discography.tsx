import useSWR from 'swr'
import Link from 'next/link'
import { DiscogService } from '../domain/services/discog-service';
import List from '../components/list';

export default function Discography(){

  const discogService = new DiscogService();

  const baseUrl = "https://api.discogs.com/";

  const {data, error} = useSWR(baseUrl, discogService.getDiscogData);

  if (data) {
    return (
      <>
        <h2 className="my-3">
          Discography
        </h2>
        <p>
          I&apos;ve had the privilege to contribute to many recordings and produced some of my own over the years. Here are some of the releases I&apos;ve been a part of.
        </p>
        {/* list the releases */}
        {data?.map((artistData, index) => {
          return (
            // @ts-ignore
            <List list={artistData.releases} artistDetails={artistData.artistDetails} type={"artist-list"} key={index}></List>
          )
        })}
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
      </>
    )
  } else if (error) {
    return (
      <div>There has been an error.</div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}
