import { checkForTokenFromCookies } from "@/utils/tokenUtils"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Image from "next/image"
import { IoIosAdd } from "react-icons/io"
import Sidebar from "@/components/home/Sidebar"
import GoalsSection from "@/components/home/GoalsSection"

export default async function Home() {
  const token = await checkForTokenFromCookies()
  if (!token) redirect("/auth/signin")
  return (
    <div className="flex bg-[#1c1c1c]">
      <Sidebar />
      <GoalsSection />
    </div>
  )
}
