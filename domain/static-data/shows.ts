import { Groups } from "../types/groups.enum";
import { Show } from "../types/show.interface";

// Templates
//  { city: "Chicago, IL", venue: "A friend's wedding", group: Groups.MOONER, date: new Date("06/25/2022"), link: "https://en.wikipedia.org/wiki/Wedding" }
// { city: "Chicago, IL", venue: "Burlington", group: Groups.YMIAH, date: new Date("11/11/2022"), link: "https://www.bucktownartsfest.com/", notes: { emoji: "😎🤘🏻🎤❓❓" } },
// Add notes: {emoji: ""} to link to show notes

const shows: Show[] = [
  {
    city: "Chicago, IL",
    venue: "Constellation",
    group: Groups.MOONER,
    date: new Date("05/15/2025"),
    link: "https://wl.seetickets.us/event/dpcd-and-mooner/642974?afflky=ConstellationChicago"
  },
  {
    city: "Milwaukee, WI",
    venue: "Linneman's Riverwest Inn",
    group: Groups.LK,
    date: new Date("05/09/2025"),
    link: "https://linnemans.com/event/caley-conway-w-lee-ketch-matthu-may-9-2025/"
  },
  {
    city: "Chicago, IL",
    venue: "Color Club",
    group: Groups.LK,
    date: new Date("05/08/2025"),
    link: "https://dice.fm/event/v3my26-caley-conway-lee-ketch-ben-mcfadden-8th-may-color-club-chicago-tickets?pid=d285d692&_branch_match_id=1283916922601128083&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1fc1TzU3N0s1tExLSbQvyEyxTTGyME0xszRSqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA5YUdIEgAAAA%3D"
  },
  {
    city: "Chicago, IL",
    venue: "Montrose Saloon",
    group: Groups.SteveSlagg,
    date: new Date("05/01/2025"),
    link: "https://montrosesaloon.com/event/international-pop-overthrow-day-seven/"
  },
  {
    city: "Chicago, IL",
    venue: "Hungry Brain",
    group: Groups.LK,
    date: new Date("03/21/2025"),
    link: "https://hungrybrainchicago.com/seetickets-event/lee-ketch-and-ryan-donlin/"
  },
  {
    city: "Chicago, IL",
    venue: "Constellation",
    group: Groups.LK,
    date: new Date("01/09/2025"),
    link: "https://www.seetickets.us/event/daniel-knox-with-lee-ketch/625413"
  },
  { city: "Chicago, IL", venue: "Contorno", group: Groups.Contorno, date: new Date("01/05/2025"), link: "https://tonedeafrecs.com/" },
  { city: "Chicago, IL", venue: "California Clipper", group: Groups.SteveSlagg, date: new Date("11/16/2024"), link: "https://californiaclipper.com/" },
  { city: "Chicago, IL", venue: "The Hideout", group: Groups.LK, date: new Date("09/26/2024"), link: "https://hideoutchicago.com/events/?rhp_paged=1&rhp_event_display=list&view=list&rhp_bar_rhp_gen=0&rhp_bar_rhp_venue=0&rhp_bar_rhp_month=09" },
  { city: "Chicago, IL", venue: "Voice (R)evolution", group: Groups.SteveSlagg, date: new Date("09/21/2024"), link: "https://www.voicerevolution.com/services" },
  { city: "Chicago, IL", venue: "Color Club - PRF BBQ", group: Groups.MOONER, date: new Date("07/18/2024"), link: "https://prfbbq.com/" },
  { city: "Chicago, IL", venue: "Pylon in the Chicago River Near Belmont bridge", group: Groups.SteveSlagg, date: new Date("07/07/2024"), link: "https://blockclubchicago.org/2023/11/09/chicagos-hottest-music-venue-is-a-concrete-pillar-in-the-chicago-river/" },
  // notes: { emoji: "💀🎺🍕" } 
  { city: "Chicago, IL", venue: "Fallen Log", group: Groups.LK, date: new Date("06/01/2024"), link: "https://kitchen17.com/events/" },
  { city: "Chicago, IL", venue: "Sleeping Village", group: Groups.MOONER, date: new Date("04/26/2024"), link: "https://sleeping-village.com/events/" },
  { city: "Chicago, IL", venue: "Schuba's", group: Groups.YMIAH, date: new Date("01/06/2024"), link: "https://lh-st.com/shows/01-06-2024-the-vulgar-boatmen/" },
  { city: "Highwood, IL", venue: "Mojo's Vinyl Bar", group: Groups.YMIAH, date: new Date("12/02/2023"), link: "https://www.facebook.com/events/1570534920421911/" },
  { city: "Glen Ellyn, IL", venue: "Saint Barnabas Episcopal Church", group: Groups.SteveSlagg, date: new Date("11/11/2023"), link: "https://barnabasencourager.org/upstairs-downstairs-benefit-concerts" },
  { city: "Chicago, IL", venue: "Constellation", group: Groups.YMIAH, date: new Date("10/14/2023"), link: "https://constellation-chicago.com/seetickets-event/ymiah-with-jason-stein/" },
  { city: "Chicago, IL", venue: "Voice (R)evolution", group: Groups.SteveSlagg, date: new Date("07/28/2023"), link: "https://www.voicerevolution.com/services" },
  { city: "Chicago, IL", venue: "Golden Dagger", group: Groups.MOONER, date: new Date("06/15/2023"), link: "https://bit.ly/3qrLDdM" },
  { city: "Chicago, IL", venue: "Burlington", group: Groups.SteveSlagg, date: new Date("02/23/2023"), link: "http://www.theburlingtonbar.com/" }, { city: "Chicago, IL", venue: "Burlington", group: Groups.YMIAH, date: new Date("11/11/2022"), link: "http://www.theburlingtonbar.com/" },
  { city: "Chicago, IL", venue: "A friend's wedding", group: Groups.MOONER, date: new Date("06/25/2022"), link: "https://en.wikipedia.org/wiki/Wedding" },
  { city: "Chicago, IL", venue: "Porchfest", group: Groups.MOONER, date: new Date("08/21/2022"), link: "https://www.lakeviewroscoevillage.org/community-events/porchfest-lakeview-1-h7gbg", notes: { emoji: "🌳🐈🏍" } },
  { city: "Chicago, IL", venue: "Bucktown Arts Fest", group: Groups.MOONER, date: new Date("08/27/2022"), link: "https://www.bucktownartsfest.com/", notes: { emoji: "😎🤘🏻🎤❓❓" } },
  { city: "Elmhurst, IL", venue: "Elmhurst Hall", group: Groups.YMIAH, date: new Date("04/07/2022"), link: "https://elmhursthall.com/event/young-man-in-a-hurry/" },
  { city: "Chicago, IL", venue: "The Hideout", group: Groups.YMIAH, date: new Date("06/24/2022"), link: "https://hideoutchicago.com/event/young-man-in-a-hurry-%c2%b7-neptunes-core/" },
  { city: "Chicago, IL", venue: "Lakeview Festival of the Arts", group: Groups.MOONER, date: new Date("09/10/2022"), link: "https://lakevieweastfestivalofthearts.com/" },
  { city: "Chicago, IL", venue: "Golden Dagger", group: Groups.LK, date: new Date("03/11/2022"), link: "https://goldendagger.com/event-detail/11802305/lee-ketch-album-release-show/" },
  { city: "Chicago, IL", venue: "Golden Dagger", group: Groups.YMIAH, date: new Date("03/22/2022"), link: "https://do312.com/events/2022/3/22/young-man-in-a-hurry-em-spel-tickets" },
  { city: "Chicago, IL", venue: "Schuba's", group: Groups.YMIAH, date: new Date("02/10/2022"), link: "https://lh-st.com/shows/02-10-2022-young-man-in-a-hurry/" },
  { city: "Madison, WI", venue: "Bur Oak", group: Groups.YMIAH, date: new Date("02/11/2022"), link: "https://theburoakmadison.com/shows/young-man-in-a-hurry" },
  { city: "New York City, NY", venue: "Bowery Electric", group: Groups.YMIAH, date: new Date("02/14/2022"), link: "https://dice.fm/event/oxrvr-young-man-in-a-hurry-album-release-ft-mary-hood-olivia-reid-mannequin-heist-14th-feb-the-bowery-electric-new-york-tickets?lng=en-US" }
]

export default shows;
