import Link from 'next/link'
import { discography } from '../domain/static-data/discography';

const releases = discography
  .flatMap(a => a.releases)
  .sort((a, b) => b.year - a.year);

export default function Discography() {
  return (
    <>
      <h2 className="my-3">Discography</h2>
      <table className="w-full max-w-2xl border-collapse">
        <tbody>
          {releases.map(({ title, artist, year, links }, index) => (
            <tr key={index} className="align-top">
              <td className="pr-6 py-1 text-sm tabular-nums whitespace-nowrap">{year !== releases[index - 1]?.year ? year : ''}</td>
              <td className="pr-6 py-1">
                <span className="font-bold">{title}</span>
                <span className="block sm:hidden text-sm font-normal">{artist}</span>
              </td>
              <td className="pr-6 py-1 text-sm hidden sm:table-cell">{artist}</td>
              <td className="py-1">
                <div className="flex gap-2">
                  {links?.bandcamp && <a href={links.bandcamp} target="_blank" rel="noreferrer" title="Bandcamp">🔷</a>}
                  {links?.spotify && <a href={links.spotify} target="_blank" rel="noreferrer" title="Spotify">🟢</a>}
                  {links?.appleMusic && <a href={links.appleMusic} target="_blank" rel="noreferrer" title="Apple Music">🍎</a>}
                  {links?.download && <a href={links.download} target="_blank" rel="noreferrer" title="Free download">🆓</a>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/">
        <a className="mt-4 block">Go to homepage</a>
      </Link>
    </>
  )
}
