import Image from "next/image"
import Logo from "@/assets/logosaas.png"

import Insta from "@/assets/social-insta.svg"
import LinkedIn from "@/assets/social-linkedin.svg"
import Pin from "@/assets/social-pin.svg"
import X from "@/assets/social-x.svg"
import YT from "@/assets/social-youtube.svg"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-dark py-10">
      <nav className="__container">
        <ul className="flex flex-col items-center justify-center gap-6 text-[#BCBCBC]">
          <li>
            <a href="#" className="logo">
              <div className="z-1 relative">
                <Image src={Logo} alt="logosaas" height={40} width={40} />
              </div>
            </a>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-6 leading-6 md:flex-row">
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
          </li>
          <li className="flex gap-4">
            <Link href={"#"}>
              <X className="h-6 w-6" />
            </Link>
            <Link href={"#"}>
              <Insta className="h-6 w-6" />
            </Link>
            <Link href={"#"}>
              <LinkedIn className="h-6 w-6" />
            </Link>
            <Link href={"#"}>
              <Pin className="h-6 w-6" />
            </Link>
            <Link href={"#"}>
              <YT className="h-6 w-6" />
            </Link>
          </li>
          <li className="text-center">
            <p>© 2024 Your Company, Inc. All rights reserved.</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
