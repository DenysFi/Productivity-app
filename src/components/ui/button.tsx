import { cn } from "@/lib/cn"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
	"px-4 py-2 rounded-md  font-medium tracking-tight text-base leading-6",
	{
		variants: {
			variant: {
				primary: "text-white bg-dark",
				text: "bg-transparent text-dark",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
} & VariantProps<typeof buttonVariants>

function Button({ children, variant, className, ...props }: ButtonProps) {
	return (
		<button className={cn(buttonVariants({ className, variant }))} {...props}>
			{children}
		</button>
	)
}

export default Button
