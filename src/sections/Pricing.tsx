"use client"

import Button from "@/components/ui/button"
import Title from "@/components/ui/title"
import Check from "@/assets/check.svg"
import { cn } from "@/lib/cn"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import animateMainContent from "@/lib/gsap/animateMainContent"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
]

export const Pricing = () => {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const articles = gsap.utils.toArray(".article")

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom bottom",
        },
      })

      tl.add(animateMainContent())
        .from(
          ".main-image",
          {
            scale: 0,
            ease: "back",
            duration: 1.5,
          },
          "<0.5",
        )
        .from(
          articles,
          {
            ease: "back",
            opacity: 0,
            stagger: 0.2,
          },
          "<0.5",
        )
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="__container">
        <div className="mx-auto mb-[40px] w-full max-w-[540px]">
          <Title>Pricing</Title>
          <p className="subtitle mt-5 !text-center">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-end">
          {pricingTiers.map((tier, index) => (
            <article
              className={
                "article flex max-w-[20rem] flex-col justify-end md:basis-[33%]"
              }
              key={tier.title}
            >
              <div
                className={cn(
                  "rounded-3xl border border-[#EAEAEA] bg-[#fff] p-4 shadow-[0px_7px_14px_0px_#EAEAEA] lg:p-10",
                  {
                    "bg-dark text-dark": tier.inverse,
                  },
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-lg font-bold leading-7 tracking-[-0.9px] text-black/50",
                      { "text-white/50": tier.inverse },
                    )}
                  >
                    {tier.title}
                  </span>
                  {tier.popular && (
                    <div className="label !border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(90deg,_#DD7DFF_0%,_#E1CD86_20%,_#8BCB92_40%,_#71C2EF_60%,_#3BFFFF_80%,_#DD7DFF_100%)] bg-clip-text text-transparent"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div
                  className={cn(
                    "py-7 text-4xl font-bold tracking-[-1.8px] text-dark",
                    {
                      "text-white": tier.inverse,
                    },
                  )}
                >
                  ${tier.monthlyPrice}
                  <span
                    className={cn(
                      "ml-1 font-bold leading-7 tracking-[-0.9px] text-black/50",
                      {
                        "text-white/50": tier.inverse,
                      },
                    )}
                  >
                    /month
                  </span>
                </div>
                <Button
                  className={cn("w-full", {
                    "bg-white text-dark": tier.inverse,
                  })}
                >
                  {tier.buttonText}
                </Button>
                <ul
                  className={cn("flex flex-col gap-5 pt-8", {
                    "text-white": tier.inverse,
                  })}
                >
                  {tier.features.map((feature) => (
                    <li className="flex items-center gap-4" key={feature}>
                      <Check className="h-6 w-6" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
