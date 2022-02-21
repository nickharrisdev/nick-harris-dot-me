import { CSSProperties } from "react";

export default function Colophon() {

  const toolsList = [
    {type: "Generator", name: "Next.js"},
    {type: "Host", name: "Netlify"},
    {type: "Code editor", name: "VSCode"},
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
            <p>{tool.type}</p>
            <p>{tool.name}</p>
          </div>
       )
     })}
        <p className="mt-3">
          Thank you!
        </p>
        <p>
          Nick
        </p>
      </div>
    </>
  )
}