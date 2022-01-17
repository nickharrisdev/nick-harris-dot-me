import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
  const { data, error } = useSWR(
    "https://api.discogs.com/artists/6067515/releases",
    fetcher
  );

  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  console.log(data, "data")

  return (
    <div className={styles.container}>
      <Head>
        <title>Discography | Nick Harris</title>
        <meta name="description" content="Discography of Nick Harris" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.89em%22 font-size=%22100%22>🧑🏻‍💻</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Discography
        </h1>

        {/* list the releases */}
        <div>
          {/* @ts-ignore */}
          {data?.releases.map(({ title, artist }, index) => {
            // clean up artist name
            const regex = /[0-9]/g;
            artist = artist.replaceAll(regex, "");
            artist = artist.replaceAll("(", "")
            artist = artist.replaceAll(")", "")
            return (
              <p key={index}>
                {title} by {artist}
              </p>
            )})}
        </div>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
