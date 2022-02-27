import { Show } from "../types/show.interface";

export class ShowService {
  sortShowsByDate = (shows: Show[], sortDirection: string) => {
    // @ts-ignore
    shows.sort(function (a, b) {
      if (sortDirection === "asc") {
        // @ts-ignore
        return b.date - a.date;
      } else if (sortDirection === "desc") {
        // @ts-ignore
        return a.date - b.date;
      }
    })
    return shows;
  }
}