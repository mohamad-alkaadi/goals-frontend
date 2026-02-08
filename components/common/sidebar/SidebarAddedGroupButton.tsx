"use client"
import { usePathname } from "next/navigation"
import React from "react"

const SidebarAddedGroupButton = ({
  title,
  nOfGoals,
}: {
  title: string
  nOfGoals: number
}) => {
  const urlPath = usePathname()
  const pathname = urlPath.replaceAll('/', '')
  return (
    <div className={`flex justify-between items-center px-4 py-2 text-white hover:bg-[#333333] ${title === pathname ? 'bg-[#333333]' : ''}`}>
      <div className="capitalize">{title}</div>
      <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center capitalize">
        {nOfGoals}
      </div>
    </div>
  )
}

export default SidebarAddedGroupButton
