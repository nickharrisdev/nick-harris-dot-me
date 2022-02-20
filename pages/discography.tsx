import useSWR from 'swr'
import Link from 'next/link'
import { DiscogService } from '../domain/services/discog-service';
import List from '../components/list';

export default function Discography(){
  // need to use this combination of urls to get all the data needed from discogs.
  // first get releases of mine, then get more data about those releases for specifcs about my role
  // might be a good usecase for promise.all, but unsure why SWR doesn't use promises
  // need to do a separate call to get Ricky Mirage releases
  // todo: move this func to another section of the app to handle data getting
  // todo: handle error
  // https://api.discogs.com/artists/6067515
  // https://api.discogs.com/artists/6067515/releases

  const discogService = new DiscogService();

  const baseUrl = "https://api.discogs.com/";

  const {data, error} = useSWR(baseUrl, discogService.getDiscogData);

  // TODO:
  // Loop over each artist,
  // within the loop, pass the releases to a new LinkList component
  // The List component will loop over the releases data
  // utilize loading and error states from useSWR
  // see here: https://swr.vercel.app/
  // use id to get artist info -- name, etc. "Credited as Nick Harris, Credited as Ricky Mirage". 

  if (data) {
    return (
      <>
        <h2>
          Discography
        </h2>
        {/* list the releases */}
        {data?.map((artistData) => {
          return (
            // @ts-ignore
            <List list={artistData.releases} artistDetails={artistData.artistDetails} type={"artist-list"}></List>
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
