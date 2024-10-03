"use client"
import Title from "@/components/ui/title"
import product from "@/assets/product-image.png"
import pyramid from "@/assets/pyramid.png"
import tube from "@/assets/tube.png"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const ProductShowcase = () => {
  const ref = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

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
          <motion.img
            className="first"
            src={tube.src}
            alt="tube"
            width={248}
            height={248}
            style={{ translateY }}
          />
          <Image src={product} alt="product" />
          <motion.img
            className="last"
            src={pyramid.src}
            alt="pyramid"
            width={262}
            height={262}
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  )
}
