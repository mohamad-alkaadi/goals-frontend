import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

const SidebarUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center space-x-2 mb-3 px-2  hover:bg-[#1f1f1f] cursor-pointer">
          <div className="bg-green-300 w-[45px] h-[45px] flex justify-center items-center rounded-full">
            MA
          </div>
          <div className="flex flex-col text-white space-y-[-4px]">
            <div className="capitalize font-[500] text-start">
              mohamad alkaadi
            </div>
            <div className="text-[12px] text-slate-300 font-[400]">
              mohamadalkaadi@gmail.com
            </div>
          </div>
        </div>
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
  )
}

export default SidebarUser
