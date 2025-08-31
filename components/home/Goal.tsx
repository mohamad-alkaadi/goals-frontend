"use client";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import GoalOptions from "./GoalOptions";

const Goal = ({
  goal,
  groupName,
  favorite,
  dueDateActive,
  overdue,
  dueDate,
  shared,
  key,
  id,
}: {
  goal: string;
  groupName: string;
  favorite: boolean;
  dueDateActive: boolean;
  overdue: boolean;
  dueDate: Date;
  shared: boolean;
  key: string;
  id: string;
}) => {
  return (
    <div
      onClick={() => alert("goal clicked")}
      className="w-full min-h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2 cursor-pointer"
      key={key}
    >
      <div className="flex space-x-3">
        <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-[2px]">
          <FaCheck
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              alert("check clicked");
            }}
            className="text-[10px] text-[#cbcbcb] hidden group-hover:block"
          />
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-white text-[15px]">{goal}</div>
          <div className="text-[#cbcbcb] flex items-center space-x-2 ml-[1px]">
            <div className="text-[13px]">
              {groupName == "ungrouped" ? null : groupName}
            </div>
            {dueDateActive ? (
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
            ) : null}
          </div>
        </div>
      </div>
      <GoalOptions favorite={favorite} id={id} shared={shared} />
    </div>
  );
};

export default Goal;
