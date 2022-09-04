import fs from 'fs'
import matter from "gray-matter";
import path from 'path'
import shows from "../domain/static-data/shows";
import { getShowId } from './utilities/get-show-id';

const showNotesDirectory = path.join(process.cwd(), 'show-notes')

export function getShowData(id: string) {
  const fullPath = path.join(showNotesDirectory, `${id}.md`)
  console.log(fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const showData = shows.find((show) => {
    return getShowId(show.date) === id;
  })
  return { ...showData, ...matterResult.data, contentMd: matterResult.content }
}

export const getAllShowIds = () => {
  return shows.map(show => {
    return {
      params: {
        id: getShowId(show.date)
      }
    }
  })
}