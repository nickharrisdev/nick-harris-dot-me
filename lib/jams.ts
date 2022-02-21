import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const jamsDirectory = path.join(process.cwd(), 'jams')

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
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort jams by date
  // @ts-ignore
  return allJamsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}