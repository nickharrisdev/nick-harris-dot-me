import format from 'date-fns/format';
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
  return (
    <>
      <div className="my-3">
        <h4 >{jamData.title}</h4>
        <p>{format(new Date(jamData.date), "MMM d, yyyy")}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <iframe width="560" height="315" src={jamData.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="my-3">
        <h4>Context for this week's jam</h4>
        <p>Chicago weather: {jamData.weather}</p>
        <p>Top news: {jamData.headline}</p>
      </div>
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