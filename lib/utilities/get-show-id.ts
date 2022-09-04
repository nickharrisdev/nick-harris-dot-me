import { format } from "date-fns"

export const getShowId = (date: Date) => {
  return format(new Date(date), "MM-dd-yyyy")
}