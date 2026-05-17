import Link from 'next/link'
import List from '../components/list';
import { discography } from '../domain/static-data/discography';

export default function Discography() {
  return (
    <>
      <h2 className="my-3">
        Discography
      </h2>
      <p>
        I&apos;ve had the privilege to contribute to many recordings and produced some of my own over the years. Here are some of the releases I&apos;ve been a part of.
      </p>
      {discography.map((artistData, index) => (
        <List list={artistData.releases} creditedAs={artistData.creditedAs} type="artist-list" key={index} />
      ))}
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </>
  )
}
