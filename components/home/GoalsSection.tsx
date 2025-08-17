import React from "react"
import { FaCheck } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { CiCalendar } from "react-icons/ci"
import { IoMdStar, IoMdStarOutline } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GoPersonAdd } from "react-icons/go"
import { LuEarth } from "react-icons/lu"
import { FaRegLightbulb } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import { FaPlus } from "react-icons/fa6"
import Goal from "./Goal"
import AddGoal from "./AddGoal"
import FriendsSheet from "./FriendsSheet"
import SuggestionsSheet from "./SuggestionsSheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const GoalsSection = () => {
  return (
    <div className="p-10 flex flex-col w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-[30px] font-[600] text-[#8795a0]">My Day</div>
          <div className="text-[15px] font-[400] text-[#8795a0]">
            Monday, August 11
          </div>
        </div>
        <div className="flex space-x-1 text-white">
          <FriendsSheet />
          <SuggestionsSheet />
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
              <BsThreeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              className="bg-[#212121] text-white border-0 mt-1 rounded-sm"
            >
              <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
                Sort by
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#343434]" />
              <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full h-[20px] flex-grow overflow-auto pr-1 mt-4 flex flex-col space-y-1">
        <Goal
          goal={"finish 5 videos"}
          group={"tasks"}
          overdue={true}
          overDueDate={"Mon, Mar 24"}
          favorite={true}
          shared={true}
        />
        <Goal
          goal={"test num 1"}
          group={"tests"}
          overdue={false}
          overDueDate={"Mon, Mar 24"}
          favorite={false}
          shared={false}
        />
      </div>

      <AddGoal />
    </div>
  )
}

export default GoalsSection
