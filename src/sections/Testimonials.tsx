import avatar1 from "@/assets/avatar-1.png"
import avatar2 from "@/assets/avatar-2.png"
import avatar3 from "@/assets/avatar-3.png"
import avatar4 from "@/assets/avatar-4.png"
import avatar5 from "@/assets/avatar-5.png"
import avatar6 from "@/assets/avatar-6.png"
import avatar7 from "@/assets/avatar-7.png"
import avatar8 from "@/assets/avatar-8.png"
import avatar9 from "@/assets/avatar-9.png"
import Title from "@/components/ui/title"
import Image, { StaticImageData } from "next/image"

type TestimonialsType = {
  text: string
  imageSrc: StaticImageData
  name: string
  username: string
}

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
]

export const Testimonials = () => {
  const columnCount = Math.floor(testimonials.length / 3)
  const columns = testimonials
    .map(
      (_, i) => i % columnCount === 0 && testimonials.slice(i, i + columnCount),
    )
    .filter(Boolean) as unknown as TestimonialsType[][]

  return (
    <section className="bg-white">
      <div className="__container">
        <div className="mx-auto flex max-w-[34rem] flex-col items-center gap-5">
          <span className="label">Version 2.0 is here</span>
          <Title>What our users say</Title>
          <p className="subtitle !text-center">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="testimonials-block">
          {columns.map((column, i) => (
            <div
              key={i}
              className="flex basis-[100%] flex-col gap-6 md:basis-[50%] lg:basis-[33%]"
            >
              {column.map((testimonial, index) => (
                <article
                  key={index}
                  className="w-full rounded-3xl border border-[#2222221A]/10 p-10 text-dark shadow-[0px_7px_14px_0px_#EAEAEA]"
                >
                  <p className="leading-6">{testimonial.text}</p>
                  <div className="mt-5 !flex items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        className="object-contain object-center"
                        src={testimonial.imageSrc}
                        alt={testimonial.text}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="!block leading-5 tracking-[-0.4px]">
                      <h5 className="font-medium">{testimonial.name}</h5>
                      <span>{testimonial.username}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
