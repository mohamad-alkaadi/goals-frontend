import React from "react";
import AddGoal from "./AddGoal";
import Goals from "./Goals";
import GoalsSectionHeader from "./GoalsSectionHeader";
const GoalsSection = () => {
  return (
    <div className="p-10 flex flex-col w-full">
      <GoalsSectionHeader />
      <Goals />
      <AddGoal />
    </div>
  );
};

export default GoalsSection;
