"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Button from "@/components/ui/button"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-10 backdrop-blur-sm">
      <Label />
      <NavBar />
    </header>
  )
}

function NavBar() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.timeline().from(ref.current, {
      x: -100,
      duration: 1.5,
      opacity: 0,
      rotate: -360,
      ease: "back",
    })
  }, [])

  return (
    <div className="header__container">
      <div className="flex items-center justify-between py-5">
        <a
          ref={ref}
          href="#"
          className="relative before:absolute before:bottom-0 before:left-0 before:z-0 before:h-8 before:w-full before:bg-gradient-to-r before:from-pink-500 before:via-pink-300 before:to-yellow-500 before:blur-sm before:content-['']"
        >
          <div className="z-1 relative">
            <Image src={Logo} alt="logosaas" height={40} width={40} />
          </div>
        </a>
        <nav className="hidden gap-6 md:flex">
          <ul className="flex items-center gap-6 leading-6 text-black/60">
            <li className="hover:underline">
              <a href="#">About</a>
            </li>
            <li className="hover:underline">
              <a href="#">Features</a>
            </li>
            <li className="hover:underline">
              <a href="#">Customers</a>
            </li>
            <li className="hover:underline">
              <a href="#">Updates</a>
            </li>
            <li className="hover:underline">
              <a href="#">Help</a>
            </li>
          </ul>
          <Button>Get for free</Button>
        </nav>

        <button className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function Label() {
  return (
    <div className="flex items-center justify-center bg-dark py-3 text-white">
      <p className="mr-3 hidden text-white/60 md:block">
        Streamline your workflow and boost your productivity.
      </p>
      <button className="flex items-center">
        <p className="text-xs">Get started for free</p>
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  )
}
