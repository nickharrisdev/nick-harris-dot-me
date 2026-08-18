import Link from "next/link"
import { useEffect } from "react";

export default function Links() { 
  useEffect(() => {
    document.documentElement.classList.add("dark");
  })
  const linksData = [
    {label: "NEW ALBUM: Faster Years", href: "https://yourfriendnick.bandcamp.com", emoji: "🎧"},
    {label: "Why Try lyrics video", href: "https://www.youtube.com/watch?v=GEn1NRN2L1k", emoji: "🎨"},
    {label: "Broken Down music video", href: "https://www.youtube.com/watch?v=f2uJRP_yB98", emoji: "🎬"},
    {label: "Upcoming shows", href: "https://www.nickharris.me/shows", emoji: "🎸"}, 
    {label: "Website", href: "https://www.nickharris.me", emoji: "👨🏻‍💻"},   
  ]

  /**
   * Old
   *     {label: "Songwriting Club Holiday Comp 2022", href: "https://chisongwritingclub.bandcamp.com/album/holiday-compilation-2022", emoji: "🎧"},
    {label: "Latest ricky single", href:"https://rickymirage.bandcamp.com/album/degeneration-b-w-doomsday-clock", emoji: "🎧"},

        {label: "New YMIAH Single - Looking For Life (In All The Wrong Places)", href: "https://www.youtube.com/watch?v=qI57SiRu20g&list=OLAK5uy_nl_PZqioTq6AbOHX21NIozuuXBH2NVpUs", emoji: "🎹"},

  {label: "Lee Ketch @ Hungry Brain 3/21/2025", href: "https://hungrybrainchicago.com/seetickets-event/lee-ketch-and-ryan-donlin/" , emoji: "🥁"},

 {label: "Songwriting Club Holiday Comp 2024", href: "https://chisongwritingclub.bandcamp.com/album/holiday-compilation-2024", emoji: "🎧"},

 {label: "With Arms Wide Open Cover feat. Grace Kuhl", href: "https://soundcloud.com/my-friend-nick/with-arms-wide-open-creed-cover-feat-grace-kuhl" , emoji: "🎤"},

 {label: "Three Little Birds Cover", href: "https://soundcloud.com/my-friend-nick/three-little-birds-bob-marley-cover", emoji: "🕊️"},

    {label: "New YMIAH album! PAY ATTENTION PAY ATTENTION", href: "https://youngmaninahurry.bandcamp.com/album/pay-attention-pay-attention", emoji: "💿"},

   */

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
