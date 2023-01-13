import Link from "next/link"
import { useEffect } from "react";

export default function Links() { 
  useEffect(() => {
    document.documentElement.classList.add("dark");
  })
  const linksData = [{label: "Personal website", href: "https://www.nickharris.me"}, {label: "Upcoming shows", href: "https://www.nickharris.me/shows"}, {label: "latest ricky mirage  single", href:"https://rickymirage.bandcamp.com/album/degeneration-b-w-doomsday-clock"}]

  return (  
   <>
    <div className="flex justify-center flex-col items-center">
      <img src="/me.jpeg" alt="A picture of Nick Harris in a red hat." width="115" height="115" className="shadow-md rounded-full my-4"/>
      <h4>Nick Harris</h4>
      <p className="text-xs">Software engineer | Musician</p>
    </div>
    <div className="flex flex-col items-center mt-2">
      {linksData.map(({label, href}, index) => {
        return (  
          <Link href={href} key={index}>
            <a target="_blank">{label}</a>
          </Link>
        )
      })}
    </div>
  </>
  )   
}