import React from "react"
import { GoPeople, GoPersonAdd } from "react-icons/go"
import { IoMdStar, IoMdStarOutline } from "react-icons/io"

const GoalOptions = ({ favorite }: { favorite: boolean }) => {
  return (
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
  )
}

export default GoalOptions
