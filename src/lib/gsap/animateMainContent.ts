import gsap from "gsap"

export default function animateMainContent() {
  const tl = gsap.timeline({
    defaults: { ease: "back.out", duration: 1 },
  })

  tl.from(".label", {
    y: -50,
    opacity: 0,
  })

  gsap.set("#title", { transformOrigin: "center left" })
  tl.from(
    "#title",
    {
      scale: 0,
    },
    "<",
  )
  tl.from(
    ".subtitle",
    {
      opacity: 0,
    },
    "<0.5",
  )
  tl.from(
    ".buttons",
    {
      y: 50,
      opacity: 0,
    },
    "-=0.5",
  )

  return tl
}
