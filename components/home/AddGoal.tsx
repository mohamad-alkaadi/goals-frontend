"use client"
import { useRef } from "react"
import { FaPlus } from "react-icons/fa6"
import { GoPeople } from "react-icons/go"
import { MdOutlineCalendarMonth } from "react-icons/md"

const AddGoal = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="h-[47px] bg-[#2a2a2a] hover:bg-[#373737] text-[#bac8d4] mt-2 rounded-sm flex items-center justify-between">
      <div className="flex justify-center items-center flex-grow">
        <FaPlus
          onClick={() => inputRef.current?.focus()}
          className="mx-3 text-[18px] cursor-pointer"
        />
        <input
          ref={inputRef}
          placeholder="Add a task"
          className="w-full outline-0"
        />
      </div>
      <div className="flex text-[18px]">
        <div className="hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer">
          <MdOutlineCalendarMonth />
        </div>
        <div className="hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer">
          <GoPeople />
        </div>
      </div>
    </form>
  )
}

export default AddGoal
