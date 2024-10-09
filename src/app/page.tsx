import { CallToAction } from "@/sections/CallToAction"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { Pricing } from "@/sections/Pricing"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Testimonials } from "@/sections/Testimonials"
import { Suspense } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Main from "@/components/ui/main"

gsap.registerPlugin(useGSAP)

export default function Home() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Main>
        <Header />
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <Footer />
      </Main>
    </Suspense>
  )
}
