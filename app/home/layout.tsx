import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import Sidebar from "@/components/common/sidebar/Sidebar"
import MobileSidebar from "@/components/common/sidebar/MobileSidebar"

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
    <div className="flex bg-[#1c1c1c] min-h-screen max-w-[100vw] overflow-x-hidden">
      <div className="hidden md:block shrink-0">
        <Sidebar />
      </div>
      <MobileSidebar>
        <Sidebar />
      </MobileSidebar>
      <main className="flex-1 w-full max-w-full min-w-0 flex flex-col h-screen overflow-hidden">
        {children}
      </main>
    </div>
  )
}
