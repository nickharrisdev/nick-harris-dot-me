import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* links */}
      <hr className="mt-3" />
      <div id="contact" className="mt-1">
        {/* <h5>Contact</h5> */}
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
        <Link href="/colophon">
          <a className="text-xs">Colophon</a>
        </Link>
        <p className="text-xs mb-5">Copyright © {new Date().getFullYear()} Nick Harris</p>
      </div>  
    </>
  )
}