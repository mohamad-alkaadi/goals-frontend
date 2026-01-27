"use client";
import { GoalsType } from "@/api/goals";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Goal from "./Goal";
import GroupToggleButton from "./GroupToggleButton";

const FilteredGoals = ({
  goals,
  setGoalsState,
}: {
  goals: GoalsType[],
  setGoalsState: Dispatch<SetStateAction<GoalsType[]>>;
}) => {
  const [completedGoals, setCompletedGoals] = useState<GoalsType[]>([]);
  const [activeGoals, setActiveGoals] = useState<GoalsType[]>([]);
  const [groupOpen, setGroupOpen] = useState({
    active: true,
    completed: false,
  });

  useEffect(() => {
    setActiveGoals(goals.filter((g) => !g.completed));
    setCompletedGoals(goals.filter((g) => g.completed));
  }, [goals]);


  return (
    <div className="w-full h-[20px] flex-grow overflow-auto pr-1 mt-4 flex flex-col space-y-1">
      {activeGoals.length != 0 && (
        <GroupToggleButton
          length={activeGoals.length}
          active={groupOpen.active}
          setGroupButtonOpen={() => {
            setGroupOpen((prev) => ({ ...prev, active: !prev.active }));
          }}
          title={"Active Goals"}
          width="w-[150px]"
          rounded={"rounded-sm"}
        />
      )}
      {activeGoals.map((item) => (
        <div key={item._id}>
          <Goal
            goal={item.title}
            groupName={item.groupName}
            favorite={item.favorite}
            dueDateActive={item.dueDateActive}
            overdue={item.overDue}
            dueDate={item.dueDate}
            shared={item.shared}
            sharedWithName={item.sharedWithName}
            id={item._id}
            completed={item.completed}
            key={item._id}
            setGoalsState={setGoalsState}
            goalDisplay={groupOpen.active}
          />
        </div>
      ))}
      {completedGoals.length != 0 && (
        <GroupToggleButton
          length={completedGoals.length}
          active={groupOpen.completed}
          setGroupButtonOpen={() => {
            setGroupOpen((prev) => ({ ...prev, completed: !prev.completed }));
          }}
          title={"completed"}
          width="w-[150px]"
          rounded={"rounded-sm"}
        />
      )}

      {completedGoals.map((item) => (
        <Goal
          goal={item.title}
          groupName={item.groupName}
          favorite={item.favorite}
          dueDateActive={item.dueDateActive}
          overdue={item.overDue}
          dueDate={item.dueDate}
          shared={item.shared}
          sharedWithName={item.sharedWithName}
          id={item._id}
          completed={item.completed}
          key={item._id}
          setGoalsState={setGoalsState}
          goalDisplay={groupOpen.completed}
        />
      ))}
    </div>
  );
};

export default FilteredGoals;
