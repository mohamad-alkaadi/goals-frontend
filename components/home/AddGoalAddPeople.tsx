import React from "react"
import { GoPeople } from "react-icons/go"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const AddGoalAddPeople = () => {
  return (
    <Tooltip>
      <TooltipTrigger className="hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer">
        <GoPeople />
      </TooltipTrigger>
      <TooltipContent className="bg-[#484848] rounded-sm">
        <p>Add people</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default AddGoalAddPeople
