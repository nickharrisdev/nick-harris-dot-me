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

export function getAllJamIds() {
  const fileNames = fs.readdirSync(jamsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
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