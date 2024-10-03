"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Cog from "@/assets/cog.png"
import CylinderImage from "@/assets/cylinder.png"
import Noodle from "@/assets/noodle.png"
import Button from "@/components/ui/button"
import Title from "@/components/ui/title"

import { motion, useScroll, useTransform } from "framer-motion"

import { useRef } from "react"

export const Hero = () => {
  const ref = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

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
              <Title className="text-start text-5xl tracking-[-0.15rem]">
                Pathway to productivity
              </Title>
              <p className="subtitle">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-1">
              <Button>Get for free</Button>
              <Button variant="text" className="flex items-center gap-1">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative mt-20 flex flex-1 justify-center md:mt-0 md:h-[40rem] md:w-[40rem]">
            <motion.img
              className="hero-image"
              src={Cog.src}
              alt="cog"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              className="cylinder absolute hidden md:-top-8 md:block"
              width={220}
              height={220}
              src={CylinderImage.src}
              style={{ translateY }}
              alt="cylinder"
            />
            <motion.img
              className="absolute hidden rotate-[30deg] md:-bottom-8 md:block"
              width={220}
              height={220}
              src={Noodle.src}
              style={{ translateY, rotate: 30 }}
              alt="Noodle"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
