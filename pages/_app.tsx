import '../styles/globals.css'
import '../styles/custom-properties.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nick Harris</title>
        <meta name="description" content="Personal website of musician and software engineer Nick Harris" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.89em%22 font-size=%22100%22>🧑🏻‍💻</text></svg>"
        />
            {/* @ts-ignore */}
        <link rel="stylesheet" href="https://unpkg.com/speedlify-score@1.0.2/speedlify-score.css" media="print" onLoad="this.media='all'" />
        <script src="https://unpkg.com/speedlify-score@1.0.2/speedlify-score.js" async defer></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153547809-1"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-153547809-1');`}}>
      </script>
      </Head>
      <div className="container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
    </>
  )
}

export default MyApp
