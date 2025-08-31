"use client";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import GoalOptions from "./GoalOptions";
import GoalCheck from "./GoalCheck";
import GoalDate from "./GoalDate";

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
  completed,
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
  completed: boolean;
}) => {
  const [completedGoal, setCompletedGoal] = useState<boolean>(completed);
  return (
    <div
      onClick={() => alert("goal clicked")}
      className="w-full min-h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2 cursor-pointer"
      key={key}
    >
      <div className="flex space-x-3">
        <GoalCheck
          completedGoal={completedGoal}
          setCompletedGoal={setCompletedGoal}
        />
        <div className="flex flex-col cursor-pointer">
          <div className="text-white text-[15px]">{goal}</div>
          <div className="text-[#cbcbcb] flex items-center space-x-2 ml-[1px]">
            <div className={`text-[13px] ${completedGoal && "overline"}`}>
              {groupName == "ungrouped" ? null : groupName}
            </div>
            <GoalDate
              dueDateActive={dueDateActive}
              overdue={overdue}
              dueDate={dueDate}
            />
          </div>
        </div>
      </div>
      <GoalOptions favorite={favorite} id={id} shared={shared} />
    </div>
  );
};

export default Goal;
