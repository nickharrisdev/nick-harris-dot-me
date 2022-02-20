import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div>
        <h1 className="text-xl">
          Nick Harris
        </h1>
        <p>
          Web developer | Musician
        </p>
        <p>
          Chicago, Illinois
        </p>
      </div>

      <nav className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/discography">
          <a>Discography</a>  
        </Link>
        <Link href="/portfolio-resume.pdf">
          <a target="_blank" rel="noreferrer">Resume</a>  
        </Link>
      </nav>
    </>
  )
}