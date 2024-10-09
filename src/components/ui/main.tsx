"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

function Main({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    gsap.set(".wrapper", { visibility: "visible" })
  })

  return <main className="wrapper">{children}</main>
}

export default Main
