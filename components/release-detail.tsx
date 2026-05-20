import { Release } from '../domain/types/release.interface';

export default function ReleaseDetail({ release }: { release: Release }) {
  const { title, artist, year, date, image, format, label, role, links } = release;
  const displayDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : String(year);

  return (
    <div>
      <img src={image} alt={title} className="w-full mb-3 shadow-sm aspect-square object-cover" />
      <h3 className="mb-0">{title}</h3>
      <p className="mb-0">{artist}</p>
      <p className="mb-3">{displayDate}</p>
      {/* {(role || format || label) && (
        <div className="text-sm mb-3">
          {role   && <p className="mb-0">{role}</p>}
          {format && <p className="mb-0">{format}</p>}
          {label  && <p className="mb-0">{label}</p>}
        </div>
      )} */}
      {links && (
        <div className="flex flex-col gap-1 text-sm">
          {links.bandcamp   && <a href={links.bandcamp}   target="_blank" rel="noreferrer">🔷 Bandcamp</a>}
          {links.spotify    && <a href={links.spotify}    target="_blank" rel="noreferrer">🟢 Spotify</a>}
          {links.appleMusic && <a href={links.appleMusic} target="_blank" rel="noreferrer">🍎 Apple Music</a>}
          {links.download   && <a href={links.download}   target="_blank" rel="noreferrer">🆓 Free download</a>}
        </div>
      )}
    </div>
  );
}
