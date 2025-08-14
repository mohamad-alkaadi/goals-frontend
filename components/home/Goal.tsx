"use client"
import React from "react"
import { CiCalendar } from "react-icons/ci"
import { FaCheck } from "react-icons/fa6"
import { GoDotFill, GoPersonAdd } from "react-icons/go"
import { IoMdStar, IoMdStarOutline } from "react-icons/io"
import { GoPeople } from "react-icons/go"

const Goal = ({
  goal,
  group,
  overdue,
  overDueDate,
  favorite,
  shared,
}: {
  goal: string
  group: string
  overdue: boolean
  overDueDate: string
  favorite: boolean
  shared: boolean
}) => {
  return (
    <div
      onClick={() => alert("goal clicked")}
      className="w-full h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2 cursor-pointer"
    >
      <div className="flex space-x-3">
        <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-1">
          <FaCheck
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              alert("check clicked")
            }}
            className="text-[10px] text-[#cbcbcb] hidden group-hover:block"
          />
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-white text-[15px]">{goal}</div>
          <div className="text-[#cbcbcb] flex items-center space-x-2">
            <div className="text-[13px]">{group}</div>
            <GoDotFill className="text-[10px] mt-[2px]" />
            <div className="flex justify-center items-center text-red-500 space-x-1">
              <CiCalendar className="text-[12px]" />
              <div className="text-[13px]">Mon, Mar 24</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        {favorite ? (
          <GoPeople
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              alert("multiple people clicked")
            }}
            className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
          />
        ) : (
          <GoPersonAdd
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              alert("one person clicked")
            }}
            className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
          />
        )}
        {favorite ? (
          <IoMdStar
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              alert("full star clicked")
            }}
            className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
          />
        ) : (
          <IoMdStarOutline
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              alert("empty star clicked")
            }}
            className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
          />
        )}
      </div>
    </div>
  )
}

export default Goal
