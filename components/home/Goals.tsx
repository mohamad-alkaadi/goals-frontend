import React from "react";
import Goal from "./Goal";
import { getAllGoals } from "@/api/goals";

const Goals = async () => {
  const due = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const goals = await getAllGoals();
  console.log(goals);

  return (
    <div className="w-full h-[20px] flex-grow overflow-auto pr-1 mt-4 flex flex-col space-y-1">
      {goals.map((item) => (
        <Goal
          key={item._id}
          goal={item.title}
          groupName={item.groupName}
          favorite={item.favorite}
          dueDateActive={item.dueDateActive}
          overdue={item.overDue}
          dueDate={item.dueDate}
          shared={item.shared}
        />
      ))}
    </div>
  );
};

export default Goals;
