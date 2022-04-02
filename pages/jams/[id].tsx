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
      
      {/* image */}
      { jamData.image && 
      <figure className="max-w-lg mb-3">
        <img src={jamData.image.src} alt={jamData.image.alt} width="512" height="384" loading="lazy" className="shadow-md weekly-jams-img rounded" />
        <figcaption className="text-xs">{jamData.image.caption}</figcaption>
      </figure>
      }

      <div className="mb-3" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div className="max-w-md">
      {/* youtube embed */}
      { jamData.youtubeLink && 
        <div className="iframe-container">
          <iframe className="responsive-iframe" src={jamData.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      }

      {/* bandcamp embed */}
      { jamData.bandcampLink &&
        <iframe src={jamData.bandcampLink} seamless width="350" height="470"></iframe>
      }

      {/* bonus youtube embed */}
      {jamData.bonusLink && 
        <>
          <h4 className="mt-4">Bonus jam</h4>
          <div className="iframe-container mt-2">
            <iframe className="responsive-iframe" src={jamData.bonusLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </>
      }

      {/* moresongs list */}
      {jamData.moresongs && 
        <>
          <h4 className="mt-3">Some more jams</h4>
        {/* @ts-ignore */}  
         {jamData.moresongs.map(({title, artist, link, description, year}, index)=> {
           return(
             <div key={index}>
              <a className='max-w-fit' href={link} target="_blank" rel="noopener noreferrer">
                {title} by {artist} ({year})
              </a>
              <p>
                {description}
              </p>
             </div>
           )
         })}
        </>
      }

      {/* comment of the week */}
      { jamData.commentImage && 
        <>
          <h4 className="mt-4">Gold nugget comment of the week</h4>
          <figure className="max-w-lg mb-3">
            <img src={jamData.commentImage.src} alt={jamData.commentImage.alt} width="512" height="384" loading="lazy" className="shadow-md weekly-jams-img rounded" />
            <figcaption className="text-xs">{jamData.commentImage.caption}</figcaption>
          </figure>
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