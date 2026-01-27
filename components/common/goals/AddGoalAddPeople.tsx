import React, { Dispatch, SetStateAction } from "react"
import { GoPeople } from "react-icons/go"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import AddGoalAddPeopleDialog from "./AddGoalAddPeopleDialog"
const AddGoalAddPeople = ({ sharedWith, setShared, setSharedWith, shared }: { sharedWith: string; setShared: Dispatch<SetStateAction<boolean>>; setSharedWith: Dispatch<SetStateAction<string>>; shared: boolean; }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer">
        <AddGoalAddPeopleDialog sharedWith={sharedWith} setShared={setShared} setSharedWith={setSharedWith} shared={shared} />
      </TooltipTrigger>
      <TooltipContent className="bg-[#484848] rounded-sm">
        <p>Add people</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default AddGoalAddPeople
