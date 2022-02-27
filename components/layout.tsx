import Footer from './footer'
import Navbar from './navbar'
import ThemeToggle from './theme-toggle'

// @ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1 className="text-xl">
          Nick Harris
        </h1>
        <p className="mb-0">
          Software developer | Musician
        </p>
        <p className="mb-0">
          Chicago, Illinois
        </p>
      </header>
      <Navbar />
      <main>{children}</main>
      <div className="flex justify-between items-center max-w-lg w-full">
        <Footer />
        <ThemeToggle />
      </div>
    </>
  )
}