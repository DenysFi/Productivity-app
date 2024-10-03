import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export function cn(...args: any[]): string {
	return twMerge(clsx(...args))
}
