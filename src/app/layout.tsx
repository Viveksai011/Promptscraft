import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/header/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PromptCraft - Expert AI Prompts for Creative & Productive Results",
  description: "Boost your AI output with PromptCraft. Explore a vast library of expert-crafted AI prompts designed to improve creativity, productivity, and efficiency. Perfect for writers, developers, marketers, and more!",
  metadataBase: new URL("https://promptscraft.vercel.app"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className }  overflow-y-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
