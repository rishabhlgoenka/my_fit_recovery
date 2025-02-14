import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Recovery Kit",
  description: "Customizable recovery kits for athletes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'