import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AddGoalAddDueDate = ({
  dueDate,
  setDueDate,
}: {
  dueDate: number;
  setDueDate: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger className="hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer">
        <MdOutlineCalendarMonth />
      </TooltipTrigger>
      <TooltipContent className="bg-[#484848] rounded-sm">
        <p>Add due date</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AddGoalAddDueDate;
