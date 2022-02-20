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
        <p>I love making records! And I have had to priveldge to contribute to many and produce some of my own over the years. I cataloged all of the released albums that I have been a part of on Discogs.com, and use their public api to populate the list below. </p>
        {/* list the releases */}
        {data?.map((artistData, index) => {
          return (
            // @ts-ignore
            <List list={artistData.releases} artistDetails={artistData.artistDetails} type={"artist-list"} key={index}></List>
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
