import { lazy, Suspense } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'

const About    = lazy(() => import('../components/sections/About'))
const TechStack = lazy(() => import('../components/sections/TechStack'))
const Projects = lazy(() => import('../components/sections/Projects'))
const Team     = lazy(() => import('../components/sections/Team'))
const Contact  = lazy(() => import('../components/sections/Contact'))

function Divider() {
  return <hr className="section-divider mx-auto max-w-4xl" />
}

function SectionFallback() {
  return <div className="py-24 flex items-center justify-center opacity-0" />
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Divider />
          <About />
          <Divider />
          <TechStack />
          <Divider />
          <Projects />
          <Divider />
          <Team />
          <Divider />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
