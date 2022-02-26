import List from "../components/list"
import { Show } from "../domain/types/show.interface"

export default function Shows() {

  // list of shows with their dates, sorted into past shows and upcoming based on dates. 
  // may have a link or may not! 

  const shows: Show[] = [
    {venue: "Golden Dagger", group: "Lee Ketch", date: new Date("2022-03-11"), link: "https://goldendagger.com/event-detail/11802305/lee-ketch-album-release-show/"}
  ]
  
  return (  
   <>
    <h2 className="my-3">
      Shows
    </h2>
    <List type="shows-list" list={shows}></List>
  </>
  )   
}