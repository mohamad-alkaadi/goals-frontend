"use client"
import { usePathname } from "next/navigation"
import React from "react"
import Link from "next/link"
const SidebarConstantGroupButton = ({
  title,
  nOfGoals,
}: {
  title: string
  nOfGoals: number
}) => {
  const urlPath = usePathname()
  const pathname = urlPath.replaceAll('/', '')
  const updatedTitle = title === '' ? 'my day' : title
  return (
    <Link href={`/${title}`} className={`flex justify-between items-center px-4 py-2 text-white hover:bg-[#333333] cursor-pointer ${title === pathname ? 'bg-[#333333]' : ''}`}>
      <div className="capitalize">{updatedTitle}</div>
      {/*<div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
        {nOfGoals}
      </div>*/}
    </Link>
  )
}

export default SidebarConstantGroupButton
