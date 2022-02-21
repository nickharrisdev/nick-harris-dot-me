import { getAllJamIds, getJamData } from '../../lib/jams'
import markdownToHtml from '../../lib/markdownToHtml'

// @ts-ignore
export async function getStaticProps({ params }) {
  const jamData = getJamData(params.id)

  const getHtmlContent = async () => {
    return await markdownToHtml(jamData.contentMd || '');
  }
  const htmlContent = await getHtmlContent();

  return {
    props: {
      jamData, 
      htmlContent
    }
  }
}

// @ts-ignore
export default function Jam({jamData, htmlContent}) {

  console.log(jamData, htmlContent, "in component")
  return (
    <>
      <div>testing</div>
      <div>{jamData.title}</div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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