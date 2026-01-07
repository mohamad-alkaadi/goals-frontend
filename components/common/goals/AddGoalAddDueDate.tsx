import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Calendar } from "@/components/ui/calendar"; // Assuming Shadcn Calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AddGoalAddDueDate = ({
  dueDate,
  setDueDate,
}: {
  dueDate: number | undefined; // Changed to allow undefined/date
  setDueDate: Dispatch<SetStateAction<number>>;
}) => {
  const originalDateRef = useRef(dueDate)
  const originalDate = originalDateRef.current
  const dateValue = dueDate ? new Date(dueDate) : undefined;

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDueDate(selectedDate.getTime());
    }
  };

  return (
    <TooltipProvider>
      <div className={`flex items-center ${originalDate !== dueDate ? "bg-[#474747]" : ""}`}>
        <Popover>
          <Tooltip>
            <PopoverTrigger asChild>
              <TooltipTrigger className={`hover:bg-[#474747]  h-[47px] w-[32px] flex justify-center items-center cursor-pointer rounded-md`}>
                <MdOutlineCalendarMonth />
              </TooltipTrigger>
            </PopoverTrigger>
            <TooltipContent className="bg-[#484848] rounded-sm">
              <p>Add due date</p>
            </TooltipContent>
          </Tooltip>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateValue}
              onSelect={handleSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  );
};

export default AddGoalAddDueDate;
