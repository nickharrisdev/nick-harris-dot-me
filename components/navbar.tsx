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
        <a href="/">Projects</a>
        {/* discography */}
        <Link href="/discography">
          <a>Discography</a>  
        </Link>
      </nav>
    </>
  )
}