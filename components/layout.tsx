import Footer from './footer'
import Navbar from './navbar'

// @ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}