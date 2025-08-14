"use client"
import React from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"

const SidebarAddGroup = () => {
  return (
    <div className="flex items-center text-white">
      <div className="flex items-center space-x-2 w-[85%] hover:bg-[#333333] pl-4 py-2 cursor-pointer">
        <div className="text-[25px]">+</div>
        <div className="mt-[5px]">Add Group</div>
      </div>
      <div className="hover:bg-[#333333] py-2 flex-grow flex justify-center items-center h-full cursor-pointer">
        <HiOutlineDotsVertical className="" />
      </div>
    </div>
  )
}

export default SidebarAddGroup
