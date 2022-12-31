import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Jam } from '../domain/types/jam.interface'

const jamsDirectory = path.join(process.cwd(), 'jams')
// TODO: see if I can change the return value to a map -- postedYear to jam array? significantly less looping. 
export function getSortedJamsData() {
  // Get file names under /jams
  const fileNames = fs.readdirSync(jamsDirectory)
  const allJamsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(jamsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the jam metadata section
    const matterResult = matter(fileContents) as unknown as { data: Jam }

    const postDate = matterResult.data.date;
    const yearPosted = new Date(postDate).getFullYear();
    return {
      id,
      yearPosted,
      ...matterResult.data
    }
  })

  allJamsData.sort(function (a, b) {
    return (new Date(b.date) as any) - (new Date(a.date) as any);
  })
  return allJamsData;
}

export function getAllJamIds() {
  const fileNames = fs.readdirSync(jamsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getJamData(id: string) {
  const fullPath = path.join(jamsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
    contentMd: matterResult.content
  }
}