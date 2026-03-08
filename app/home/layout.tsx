import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import Sidebar from "@/components/common/sidebar/Sidebar"

export const metadata: Metadata = {
  title: "My day",
  description: "My day",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex bg-[#1c1c1c]">
      <Sidebar />
      {children}
    </div>
  )
}
