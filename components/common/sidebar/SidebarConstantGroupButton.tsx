"use client"
import { usePathname } from "next/navigation"
import React from "react"
import Link from "next/link"
const SidebarConstantGroupButton = ({
  title,
  slug
}: {
  title: string
  slug: string
}) => {
  const urlPath = usePathname()
  return (
    <Link href={slug} className={`flex justify-between items-center px-4 py-2 text-white hover:bg-[#333333] cursor-pointer ${slug === urlPath ? 'bg-[#333333]' : ''}`}>
      <div className="capitalize">{title}</div>
    </Link>
  )
}

export default SidebarConstantGroupButton
