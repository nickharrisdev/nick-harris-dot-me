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
      {jamData.bonusLink && 
        <>
          <h4 className="mt-4">Bonus jam</h4>
          <div className="video-container mt-2">
            <iframe className="responsive-iframe" src={jamData.bonusLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </>
      }
      {jamData.moresongs && 
        <>
          <h4 className="mt-3">Honorable mentions</h4>
        {/* @ts-ignore */}  
         {jamData.moresongs.map(({title, artist, link, description, year}, index)=> {
           return(
             <div key={index}>
              <a className='max-w-fit' href={link} target="_blank" rel="noopener noreferrer">
                <p className="mb-0">{title} by {artist} ({year})</p>
              </a>
              <p>
                {description}
              </p>
             </div>
           )
         })}
        </>
      }
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