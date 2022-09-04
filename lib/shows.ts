import fs from 'fs'
import matter from "gray-matter";
import path from 'path'
import shows from "../domain/static-data/shows";
import { getShowId } from './utilities/get-show-id';

const showNotesDirectory = path.join(process.cwd(), 'show-notes')

export function getShowData(id: string) {
  const fullPath = path.join(showNotesDirectory, `${id}.md`)

  const fileContents = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : undefined;

  const matterResult = fileContents ? matter(fileContents) : undefined;

  const showData = shows.find((show) => {
    return getShowId(show.date) === id;
  })
  return { ...showData, ...matterResult?.data, contentMd: matterResult?.content }
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