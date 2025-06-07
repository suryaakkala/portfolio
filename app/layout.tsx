import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akkala Surya Venkata Deepak - Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Akkala Surya Venkata Deepak, a visionary full-stack developer with expertise in Python, Django, React, and Next.js. Experienced in architecting software solutions and leading development teams.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "python",
    "django",
    "react",
    "nextjs",
    "java",
    "spring boot",
    "software engineer",
  ],
  authors: [{ name: "Akkala Surya Venkata Deepak" }],
  openGraph: {
    title: "Akkala Surya Venkata Deepak - Full-Stack Developer & Software Engineer",
    description: "Portfolio showcasing software development projects, certifications, and professional experience",
    type: "website",
  },
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
