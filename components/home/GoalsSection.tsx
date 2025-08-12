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
          <div className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
            <LuEarth />
          </div>
          <div className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
            <FaRegLightbulb />
          </div>
          <div className="hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="w-full h-[20px] flex-grow overflow-auto mt-4 flex flex-col space-y-1">
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
      </div>
      <div className="h-[47px] bg-[#2a2a2a] hover:bg-[#373737] text-[#bac8d4] mt-2 rounded-sm flex items-center">
        <FaPlus className="mx-3 text-[18px]" />
        <div className="text-[15px] font-[400]">Add a task</div>
      </div>
    </div>
  )
}

export default GoalsSection
