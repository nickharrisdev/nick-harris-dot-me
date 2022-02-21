import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mt-4">
        <div className="text-xs">
          Reach me: 
          <a href="mailto:nick@nickharris.me" target="_blank" rel="noreferrer" aria-label="Email" title="Email" className="mx-1">
            Email
          </a>
          <a href="https://www.linkedin.com/in/nick-harris-web-dev/" rel="noreferrer" aria-label="Linked In" target="_blank" title="Linked In" className="mr-1">
            LinkedIn
          </a>
          <a href="https://www.github.com/nickharrisdev" target="_blank" rel="noreferrer" aria-label="Github" title="Github" className="mr-1">
            Github
          </a>
          <a href="https://fosstodon.org/@nickharris" target="_blank" rel="noreferrer" aria-label="Mastadon" title="Fosstadon" className="mr-1">
            Fosstodon
          </a>
        </div>
        <p className="text-xs mb-5">Copyright © {new Date().getFullYear()} Nick Harris 
          <Link href="/colophon">
            <a className="text-xs ml-1">Colophon</a>
          </Link>
        </p>
      </div>  
    </>
  )
}