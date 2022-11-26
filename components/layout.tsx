import Link from 'next/link';
import Footer from './footer'
import Navbar from './navbar'
import ThemeToggle from './theme-toggle'

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <h1 className="text-xl">
          <Link href="/">
            <a>Nick Harris</a>
          </Link>
        </h1>
        <p className="mb-0">
          Software engineer | Musician
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