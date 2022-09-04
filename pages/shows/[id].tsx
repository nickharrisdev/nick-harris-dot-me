import format from "date-fns/format";
import { Show } from "../../domain/types/show.interface";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllShowIds, getShowData } from "../../lib/shows";

interface ShowPageParams {
  params: {id: string}
}

export async function getStaticProps({ params }: ShowPageParams) {
  const showData = getShowData(params.id)

  const getHtmlContent = async () => {
    return await markdownToHtml(showData.contentMd || '');
  }
  const htmlContent = await getHtmlContent();

  return {
    props: {
      showData: JSON.parse(JSON.stringify(showData)),
      htmlContent
    }
  }
}

interface ShowPageProps {
  showData: Show;
  htmlContent: string;
}

export default function ShowNotes({ showData, htmlContent }: ShowPageProps) {
  return (
    <>
      <div className="my-3">
        <h4>{showData.venue} with {showData.group}</h4>
        <h5>{format(new Date(showData.date), "MMM dd, yyyy")}</h5>
      </div>
      <div className="max-w-lg w-full">
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    {/* image */}
    { showData.images && 
        showData.images.map((image, index) => {
          return (
            <div key={index}>
              <figure className="max-w-lg mb-3" >
                  <img src={image.src} alt={image.alt} width="512" height="384" loading="lazy" className="shadow-md show-img rounded" />
                <figcaption className="text-xs">{image.caption}</figcaption>
              </figure>
            </div>
          )
        })
      }
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllShowIds()
  return {
    paths,
    fallback: false
  }
}