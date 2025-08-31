import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const GoalDate = ({
  dueDateActive,
  overdue,
  dueDate,
}: {
  dueDateActive: boolean;
  overdue: boolean;
  dueDate: Date;
}) => {
  {
    return dueDateActive ? (
      <div className="flex items-center space-x-2">
        <GoDotFill className="text-[10px] mt-[2px]" />
        <div
          className={`flex justify-center items-center ${
            overdue ? "text-red-500" : "text-green-500"
          }  space-x-1`}
        >
          <CiCalendar className="text-[12px]" />
          <div className="text-[13px]">
            {new Date(dueDate).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    ) : null;
  }
};

export default GoalDate;
