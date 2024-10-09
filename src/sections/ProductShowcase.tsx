"use client"
import Title from "@/components/ui/title"
import product from "@/assets/product-image.png"
import pyramid from "@/assets/pyramid.png"
import tube from "@/assets/tube.png"
import Image from "next/image"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import animateMainContent from "@/lib/gsap/animateMainContent"

import gsap from "gsap"

export const ProductShowcase = () => {
  const ref = useRef<HTMLElement>(null)

  function animateImages() {
    const tl = gsap.timeline({ defaults: { ease: "back" } })

    const array = gsap.utils.toArray([".tube", ".pyramid"])

    tl.from(".main-image", {
      scale: 0,
      duration: 1.5,
    }).from(
      array,
      {
        scale: 0,
        stagger: 0.3,
      },
      ">-0.8",
    )

    return tl
  }

  useGSAP(
    () => {
      const master = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom bottom",
        },
      })

      master.add(animateMainContent()).add(animateImages(), "<0.5")

      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      const parallaxItems = gsap.utils.toArray([".tube", ".pyramid"])

      parallaxTl.to(parallaxItems, {
        yPercent: -50,
      })
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="pt-24 [background:linear-gradient(180deg,#FFF_0%,#D2DCFF_100%)]"
    >
      <div className="__container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex max-w-[34rem] flex-col items-center justify-center gap-[20px]">
            <p className="label">Boost your productivity</p>
            <Title>A more effective way to track progress</Title>
            <p className="subtitle !text-center">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>
        </div>
        <div className="ProductShowcase-image">
          <Image
            className="tube first"
            src={tube.src}
            alt="tube"
            width={248}
            height={248}
          />
          <Image
            className="main-image aspect-[208/133]"
            src={product}
            alt="product"
          />
          <Image
            className="pyramid last"
            src={pyramid.src}
            alt="pyramid"
            width={262}
            height={262}
          />
        </div>
      </div>
    </section>
  )
}
