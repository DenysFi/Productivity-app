"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Cog from "@/assets/cog.png"
import CylinderImage from "@/assets/cylinder.png"
import Noodle from "@/assets/noodle.png"
import Button from "@/components/ui/button"
import Title from "@/components/ui/title"
import animateMainContent from "@/lib/gsap/animateMainContent"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"

export const Hero = () => {
  const ref = useRef(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  function animateHeroImages() {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 1 },
    })

    const array = gsap.utils.toArray([".noodle", ".cylinder"])
    tl.from(".hero-image", {
      scale: 0,
      ease: "elastic.out",
      duration: 2.5,
    })
      .to(
        ".hero-image",
        {
          y: -50,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
        },
        "<",
      )
      .from(array, { ease: "back", scale: 0, stagger: 0.3 }, "<0.5")
      .to(
        ".hero-image",
        {
          y: 50,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
        },
        "<",
      )

    return tl
  }

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1 },
      })

      tl.add(animateHeroImages(), "<").add(animateMainContent(), "<")

      tl.to([".cylinder", ".noodle"], {
        yPercent: "-=50",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="hero__container">
        <div className="block items-center md:flex">
          <div>
            <div className="flex w-full max-w-[30rem] flex-col gap-6 md:gap-8">
              <p className="label">Version 2.0 is here</p>
              <Title
                ref={titleRef}
                className="text-start text-5xl tracking-[-0.15rem]"
              >
                Pathway to productivity
              </Title>
              <p className="subtitle">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
            </div>
            <div className="buttons mt-8 flex items-center gap-1">
              <Button>Get for free</Button>
              <Button variant="text" className="flex items-center gap-1">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative mt-20 flex flex-1 justify-center md:mt-0 md:h-[40rem] md:w-[40rem]">
            <Image
              className="hero-image"
              src={Cog.src}
              alt="cog"
              width={600}
              height={600}
            />
            <Image
              className="cylinder absolute hidden md:-top-8 md:block"
              width={220}
              height={220}
              src={CylinderImage.src}
              alt="cylinder"
            />
            <Image
              className="noodle absolute hidden rotate-[30deg] md:-bottom-8 md:block"
              width={220}
              height={220}
              src={Noodle.src}
              alt="Noodle"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
