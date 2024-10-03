"use client"

import Button from "@/components/ui/button"
import Title from "@/components/ui/title"
import ArrowRight from "@/assets/arrow-right.svg"

import starSrc from "@/assets/star.png"
import springSrc from "@/assets/spring.png"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const CallToAction = () => {
  const ref = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={ref}
      className="bg-white bg-[linear-gradient(180deg,_#FFF_0%,_#D2DCFF_100%)] pt-24"
    >
      <div className="__container">
        <div className="call-to relative flex flex-col items-center py-24">
          <motion.img
            className="absolute left-0 z-0 hidden md:block"
            width={360}
            height={360}
            src={starSrc.src}
            alt="star"
            style={{ translateY }}
          />
          <motion.img
            width={360}
            height={360}
            className="absolute right-0 z-0 hidden md:block"
            src={springSrc.src}
            alt="springSrc"
            style={{ translateY }}
          />
          <div className="relative z-10 max-w-[540px] backdrop-blur-sm">
            <Title>Sign up for free today</Title>
            <p className="subtitle pt-5 !text-center">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>
          <div className="relative z-10 mt-8 flex items-center gap-1">
            <Button>Get for free</Button>
            <Button variant="text" className="flex items-center gap-1">
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
