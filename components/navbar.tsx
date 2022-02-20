import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <>
      {/* top section */}
      <div className={styles.titleSummaryContainer}>
        <h1>
          Nick Harris
        </h1>
        <p>
          Web developer | Musician
        </p>
        <p>
          Chicago, Illinois
        </p>
      </div>

      {/* nav */}
      <nav className={styles.nav}>
        {/* projects */}
        <Link href="/">
          <a>Projects</a>
        </Link>
        {/* discography */}
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