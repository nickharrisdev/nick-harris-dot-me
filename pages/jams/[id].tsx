import { getAllJamIds, getJamData } from '../../lib/jams'

// @ts-ignore
export async function getStaticProps({ params }) {
  const jamData = getJamData(params.id)
  return {
    props: {
      jamData
    }
  }
}

// @ts-ignore
export default function Jam({jamData}) {
  return (
    <>
      <div>testing</div>
      <div>{jamData.title}</div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllJamIds()
  return {
    paths,
    fallback: false
  }
}