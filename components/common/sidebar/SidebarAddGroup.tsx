"use client"
import React from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const SidebarAddGroup = () => {
  return (
    <div className="flex items-center text-white">
      <Popover>
        <PopoverTrigger className="flex items-center space-x-2 w-[85%] hover:bg-[#333333] pl-4 py-2 cursor-pointer">
          <div className="text-[25px]">+</div>
          <div className="mt-[5px]">Add Group</div>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-[#333333] py-2 flex-grow flex justify-center items-center h-full cursor-pointer">
          <HiOutlineDotsVertical className="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          className="bg-[#212121] text-white border-0 mt-1 rounded-sm"
        >
          <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-[#343434]" />
          <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SidebarAddGroup
