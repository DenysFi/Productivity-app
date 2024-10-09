import { cn } from "@/lib/cn"
import { cva, VariantProps } from "class-variance-authority"
import React, { forwardRef } from "react"

const titleVariants = cva(
  "bg-clip-text font-bold text-black text-transparent bg-gradient-to-b from-black to-[#001E80]  gradient font-bald text-center",
  {
    variants: {
      size: {
        lg: "text-[3.3rem] tracking-[-2.7px] leading-[111%] ",
        sm: "text-[1.8rem] tracking-[-1.5px] leading-[120%]  ",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
)

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
} & VariantProps<typeof titleVariants>

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, className, id = "title", ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(titleVariants({ className, size }))}
        id={id}
        {...props}
      >
        {children}
      </h2>
    )
  },
)

Title.displayName = "Title"

export default Title
