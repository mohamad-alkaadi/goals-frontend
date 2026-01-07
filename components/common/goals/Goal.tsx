"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import GoalOptions from "./GoalOptions";
import GoalCheck from "./GoalCheck";
import GoalDate from "./GoalDate";
import { GoalsType } from "@/api/goals";

const Goal = ({
  goal,
  groupName,
  favorite,
  dueDateActive,
  overdue,
  dueDate,
  shared,
  id,
  completed,
  setGoalsState,
  goalDisplay,
}: {
  goal: string;
  groupName: string;
  favorite: boolean;
  dueDateActive: boolean;
  overdue: boolean;
  dueDate: Date;
  shared: boolean;
  id: string;
  completed: boolean;
  setGoalsState: Dispatch<SetStateAction<GoalsType[]>>;
  goalDisplay: boolean;
}) => {
  const [completedGoal, setCompletedGoal] = useState<boolean>(completed);
  return (
    <div
      onClick={() => alert("goal clicked")}
      className={`w-full min-h-[56px] bg-[#2a2a2a] hover:bg-[#373737] rounded-sm flex items-center justify-between px-4 py-2 cursor-pointer ${!goalDisplay && "hidden"
        }`}
      key={id}
    >
      <div className="flex space-x-3">
        <GoalCheck
          id={id}
          completedGoal={completedGoal}
          setCompletedGoal={setCompletedGoal}
          setGoalsState={setGoalsState}
        />
        <div className="flex flex-col cursor-pointer">
          <div
            className={`text-white text-[15px] ${completedGoal && "line-through"
              }`}
          >
            {goal}
          </div>
          <div className="text-[#cbcbcb] flex items-center space-x-2 ml-[1px]">
            <div className={`text-[13px] `}>
              {groupName == "ungrouped" ? null : groupName}
            </div>
            <GoalDate
              dueDateActive={dueDateActive}
              overdue={overdue}
              dueDate={dueDate}
              completedGoal={completedGoal}
            />
          </div>
        </div>
      </div>
      <GoalOptions favorite={favorite} id={id} shared={shared} />
    </div>
  );
};

export default Goal;
