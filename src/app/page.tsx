import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Program from '@/components/Program'
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

      <Partners />

      <div className="section-sep mx-6 lg:mx-10" />

      <Program />

      <div className="section-sep mx-6 lg:mx-10" />

      <FAQ />

      <div className="section-sep" />

      <ApplyCTA />

      <Footer />
    </main>
  )
}
