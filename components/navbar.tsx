import Link from 'next/link'
import React from 'react';

export default function Navbar() {

  React.useEffect(() => {
    window.addEventListener('click', (event) => {
      // @ts-ignore
      if (!event.target?.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    });
  }, []);

  const toggleDropdown = () => {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  return (
    <>
      <div>
        <h1 className="text-xl">
          Nick Harris
        </h1>
        <p className="mb-0">
          Software developer | Musician
        </p>
        <p className="mb-0">
          Chicago, Illinois
        </p>
      </div>

      <nav className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="dropdown">
          <span className="dropbtn-container mr-1">
            <button onClick={toggleDropdown} className="dropbtn">Music</button>
            <span className="text-2xs mr-1"> &#9660; </span>
          </span>
          <div id="myDropdown" className="dropdown-content shadow-md">
            <Link href="/discography">
              <a className="pl-1 py-1">Discography</a>  
            </Link>
            <Link href="/weekly-jams">
              <a className="pl-1 py-1">Weekly Jams</a>  
            </Link>
            <Link href="/shows">
              <a className="pl-1 py-1">Shows</a>  
            </Link>
          </div>
        </div>
        <Link href="/portfolio-resume.pdf">
          <a target="_blank" rel="noreferrer">Resume</a>  
        </Link>
      </nav>
    </>
  )
}