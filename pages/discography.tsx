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
        <h2>
          Discography
        </h2>
        {/* list the releases */}
        {data?.map((artistData, index) => {
          return (
            // @ts-ignore
            <List list={artistData.releases} artistDetails={artistData.artistDetails} type={"artist-list"}key={index}></List>
          )
        })}
        <Link href="/">
          <a>Go back</a>
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
