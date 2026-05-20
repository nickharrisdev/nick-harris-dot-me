import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ReleaseDetail from '../components/release-detail'
import { discography } from '../domain/static-data/discography'
import { Release } from '../domain/types/release.interface'

const sortKey = (r: Release) => r.date ?? `${r.year}-00-00`;
const releases = [...discography].sort((a, b) => sortKey(b).localeCompare(sortKey(a)));

export default function Discography() {
  const [selected, setSelected] = useState<Release | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current as any;
    if (selected) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [selected]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handler = () => setSelected(null);
    dialog?.addEventListener('cancel', handler);
    return () => dialog?.removeEventListener('cancel', handler);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) setSelected(null);
  };

  return (
    <>
      <h2 className="my-3">Discography</h2>
      <table className="w-full max-w-2xl border-collapse">
        <tbody>
          {releases.map((release, index) => {
            const { title, artist, year, links } = release;
            return (
              <tr key={index} className="align-top">
                <td className="pr-6 py-1  tabular-nums whitespace-nowrap">
                  {year !== releases[index - 1]?.year ? year : ''}
                </td>
                <td className="pr-6 py-1">
                  <button
                    onClick={() => setSelected(release)}
                    className="font-bold text-left bg-transparent border-none p-0 cursor-pointer underline decoration-[#53beba]"
                  >
                    {title}
                  </button>
                  <span className="block sm:hidden font-normal">{artist}</span>
                </td>
                <td className="pr-6 py-1 hidden sm:table-cell">{artist}</td>
                <td className="py-1">
                  <div className="flex gap-2">
                    {links?.bandcamp   && <a href={links.bandcamp}   target="_blank" rel="noreferrer" title="Bandcamp">🔷</a>}
                    {links?.spotify    && <a href={links.spotify}    target="_blank" rel="noreferrer" title="Spotify">🟢</a>}
                    {links?.appleMusic && <a href={links.appleMusic} target="_blank" rel="noreferrer" title="Apple Music">🍎</a>}
                    {links?.download   && <a href={links.download}   target="_blank" rel="noreferrer" title="Free download">🆓</a>}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <dialog
        ref={dialogRef}
        className="p-6 max-w-sm w-full shadow-xl rounded-xl"
        onClick={handleBackdropClick}
      >
        <button
          onClick={() => setSelected(null)}
          className="float-right bg-transparent border-none cursor-pointer text-base leading-none p-3 -mr-3 -mt-3 focus-visible:outline-none"
          aria-label="Close"
        >
          ✕
        </button>
        {selected && <ReleaseDetail release={selected} />}
      </dialog>

      <Link href="/"><a className="mt-4 block">Go to homepage</a></Link>
    </>
  )
}
