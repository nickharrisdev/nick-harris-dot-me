import { Show } from "../types/show.interface";

export class ShowService {
  sortShowsByDate = (shows: Show[], sortDirection: string) => {
    shows.sort(function (a, b) {
      const aDateSeconds = a.date.getTime();
      const bDateSeconds = b.date.getTime()
      if (sortDirection === "asc") {
        return bDateSeconds - aDateSeconds;
      }
      return aDateSeconds - bDateSeconds;
    })
    return shows;
  }
}