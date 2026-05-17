import Link from 'next/link'
import List from '../components/list';
import { discography } from '../domain/static-data/discography';

export default function Discography() {
  return (
    <>
      <h2 className="my-3">
        Discography
      </h2>
      {discography.map((artistData, index) => (
        <List list={artistData.releases} creditedAs={artistData.creditedAs} type="artist-list" key={index} />
      ))}
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </>
  )
}
