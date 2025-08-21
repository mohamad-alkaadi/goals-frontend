"use client"
import React from "react"
import { CiCalendar } from "react-icons/ci"
import { FaCheck } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import GoalOptions from "./GoalOptions"

const Goal = ({
  goal,
  groupName,
  favorite,
  dueDate,
  overdue,
  overDueDate,
  shared,
}: {
  goal: string
  groupName: string
  favorite: boolean
  dueDate: boolean
  overdue: boolean
  overDueDate: string
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
            <div className="text-[13px]">{groupName}</div>
            {dueDate ? (
              <div className="flex items-center space-x-2">
                <GoDotFill className="text-[10px] mt-[2px]" />
                <div
                  className={`flex justify-center items-center ${
                    overdue ? "text-red-500" : "text-green-500"
                  }  space-x-1`}
                >
                  <CiCalendar className="text-[12px]" />
                  <div className="text-[13px]">{overDueDate}</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <GoalOptions favorite={favorite} />
    </div>
  )
}

export default Goal
