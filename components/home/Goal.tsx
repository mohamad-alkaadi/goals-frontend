import React from "react"
import { CiCalendar } from "react-icons/ci"
import { FaCheck } from "react-icons/fa6"
import { GoDotFill, GoPersonAdd } from "react-icons/go"
import { IoMdStarOutline } from "react-icons/io"

const Goal = () => {
  return (
    <div className="w-full h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2">
      <div className="flex space-x-3">
        <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-1">
          <FaCheck className="text-[10px] text-[#cbcbcb] hidden group-hover:block" />
        </div>
        <div className="flex flex-col">
          <div className="text-white text-[15px]">finish 5 videos german</div>
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
  )
}

export default Goal
