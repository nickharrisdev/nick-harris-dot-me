import { CSSProperties } from "react";

export default function Colophon() {

  const toolsList = [
    {type: "Generator", name: "Next.js"},
    {type: "Host", name: "Netlify"},
    {type: "Code editor", name: "VSCode"},
    {type: "Git host", name: "Github"},
    {type: "Typeface", name: "Roboto"},
    {type: "Registrar", name: "Google Domains"},
    // {type: "", name: ""},
  ]

  const styles: CSSProperties = {
    width: "225px",
  };

  return (
    <>
      <div className="my-3">
     {toolsList.map((tool, index) => {
       return (
          <div className="flex max-w-xs justify-between" style={styles} key={index}>
            <p className="mb-0 font-bold">{tool.type}</p>
            <p className="mb-0">{tool.name}</p>
          </div>
       )
     })}
        <p className="mb-1 mt-4 font-bold">
          <a href="https://agitated-hoover-87d428.netlify.app/nickharris.me/" target="_blank" rel="noopener noreferrer">
            Lighthouse scores and performance data
          </a>
        </p>
          {/* @ts-ignore */}
        <speedlify-score speedlify-url="https://agitated-hoover-87d428.netlify.app/" url="https://www.nickharris.me/"></speedlify-score>  
        <p className="mt-3 mb-0">
          Thanks for stopping by.
        </p>
        <p>
          Nick
        </p>
      </div>
    </>
  )
}