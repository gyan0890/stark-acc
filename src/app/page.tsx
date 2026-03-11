import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Program from '@/components/Program'
import Partners from '@/components/Partners'
import Ecosystem from '@/components/Ecosystem'
import FAQ from '@/components/FAQ'
import ApplyCTA from '@/components/ApplyCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-sn-navy text-white-flare overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Section separator */}
      <div className="section-sep mx-6 lg:mx-10" />

      <Program />

      <div className="section-sep mx-6 lg:mx-10" />

      <Partners />

      <div className="section-sep mx-6 lg:mx-10" />

      <Ecosystem />

      <div className="section-sep mx-6 lg:mx-10" />

      <FAQ />

      <div className="section-sep" />

      <ApplyCTA />

      <Footer />
    </main>
  )
}
