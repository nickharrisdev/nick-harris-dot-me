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
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div className="max-w-md">
      <div className="video-container">
        <iframe className="responsive-iframe" src={jamData.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </div>
      <div className="my-3">
        <h4>Context for this week&apos;s jam</h4>
        <p className="mb-0"><span className="font-bold">Chicago weather:</span> {jamData.weather}</p>
        <p className="mb-0"><span className="font-bold">Top news:</span> {jamData.headline}</p>
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