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
        <div className="flex">
          <div className="bg-[#303030]">
            <LuEarth />
          </div>
          <div className="bg-[#303030]">
            <FaRegLightbulb />
          </div>
          <div className="bg-[#303030]">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="w-full h-[20px] flex-grow overflow-auto mt-4">
        <div className="w-full h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2">
          <div className="flex space-x-3">
            <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-1">
              <FaCheck className="text-[10px] text-[#cbcbcb] hidden group-hover:block" />
            </div>
            <div className="flex flex-col">
              <div className="text-white text-[15px]">
                finish 5 videos german
              </div>
              <div className="text-[#cbcbcb] flex items-center space-x-2">
                <div className="text-[13px]">Tasks</div>
                <GoDotFill className="text-[10px] mt-[2px]" />
                <div className="flex justify-center items-center text-red-500 space-x-1">
                  <CiCalendar className="text-[12px]" />
                  <div className="text-[13px]">Mon, Mar 24</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <GoPersonAdd className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0]" />
            <IoMdStarOutline className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalsSection
