"use client"
import { UserDetails, getUserDetails } from "@/api/user"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useEffect, useState } from "react"

const SidebarUser = () => {
  const [user, setUser] = useState<UserDetails | null>(null)
  useEffect(() => {
    const getUser = async () => {
      const data = await getUserDetails()
      setUser(data)
    }
    getUser()
  }, [])
  return (
    //<DropdownMenu>
    //<DropdownMenuTrigger>
    <div className="flex items-center space-x-2 mb-3 px-2 select-none">
      <div className="bg-green-300 w-[45px] h-[45px] flex justify-center items-center rounded-full">
        {user?.initials}
      </div>
      <div className="flex flex-col text-white space-y-[-4px]">
        <div className="capitalize font-[500] text-start">
          {user?.name}
        </div>
        <div className="text-[12px] text-slate-300 font-[400]">
          {user?.email}
        </div>
      </div>
    </div>)
  {/*</DropdownMenuTrigger>
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
    </DropdownMenu>*/}
  //)
}

export default SidebarUser
