import List from "../components/list"
import { Show } from "../domain/types/show.interface"
import shows from "../domain/static-data/shows"

export default function Shows() {

  const showsList: Show[] = shows;

  return (  
   <>
    <h2 className="my-3">
      Shows
    </h2>
    <List type="shows-list" list={showsList}></List>
  </>
  )   
}