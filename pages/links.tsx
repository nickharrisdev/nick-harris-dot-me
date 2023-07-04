import Link from "next/link"
import { useEffect } from "react";

export default function Links() { 
  useEffect(() => {
    document.documentElement.classList.add("dark");
  })
  const linksData = [
    {label: "Website", href: "https://www.nickharris.me", emoji: "👨🏻‍💻"}, 
    {label: "Songwriting Club Holiday Comp 2022", href: "https://chisongwritingclub.bandcamp.com/album/holiday-compilation-2022", emoji: "🎧"},
    {label: "Latest ricky single", href:"https://rickymirage.bandcamp.com/album/degeneration-b-w-doomsday-clock", emoji: "🎧"},
    {label: "Shows", href: "https://www.nickharris.me/shows", emoji: "🎸"}, 
  ]

  return (  
   <>
    <div className="flex flex-col items-center">
      <img src="/me.jpeg" alt="A picture of Nick Harris in a red hat." width="115" height="115" className="shadow-md rounded-full my-4"/>
      <h4>I am Nick Harris</h4>
      <p className="text-xs">These are my very important links</p>
    </div>
    <div className="flex flex-col items-center mt-2">
      {linksData.map(({label, href, emoji}, index) => {
        return (
          <div className="border-2 border-white rounded-full py-2 px-2 my-2" key={index}>
            {emoji}&nbsp;
          <Link href={href} >
            <a target="_blank">{label}</a>
          </Link>
          </div>
        )
      })}
    </div>
  </>
  )   
}
