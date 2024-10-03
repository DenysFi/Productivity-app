import { cn } from "@/lib/cn"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.scss"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="relative">
      <body className={cn(dmSans.className, "bg-[#EAEEFE] antialiased")}>
        {children}
      </body>
    </html>
  )
}
