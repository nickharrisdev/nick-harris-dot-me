import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Jam } from '../domain/types/jam.interface'

const getDirectories = (source: string) => {
  return readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

const jamsDirectory = path.join(process.cwd(), 'jams')
export const yearsOfPosts = getDirectories(jamsDirectory);

export function getJamsByYearPosted(year: number) {
  const postedYearDirectory = path.join(process.cwd(), `jams/${year}`);
  // Get file names under /jams
  const fileNames = fs.readdirSync(postedYearDirectory)
  const jamDataFromGivenYear = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postedYearDirectory, fileName)
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

  jamDataFromGivenYear.sort(function (a, b) {
    return (new Date(b.date) as any) - (new Date(a.date) as any);
  })
  return jamDataFromGivenYear;
}

export function getAllJamIds() {
  let files: { fileName: string, year: string }[] = [];

  getDirectories(jamsDirectory).forEach((dir) => {
    fs.readdirSync(`${jamsDirectory}/${dir}`).forEach((file) => {
      files.push({ fileName: `${file}`, year: dir })
    })
  })
  return files.map(file => {
    return {
      params: {
        id: [file.fileName.replace(/\.md$/, '')],
        slug: [file.year, file.fileName],
        year: file.year,
      }
    }
  })
}

export function getJamData(id: string, year: string) {
  const fullPath = path.join(jamsDirectory, `${year}/${id}.md`)
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