import { checkForTokenFromCookies } from "@/utils/tokenUtils"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Image from "next/image"

export default async function Home() {
  const token = await checkForTokenFromCookies()
  if (!token) redirect("/auth/signin")
  return <div className="">goals</div>
}
