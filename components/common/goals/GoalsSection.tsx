"use client";
import React, { useEffect, useState } from "react";
import AddGoal from "./AddGoal";
import GoalsSectionHeader from "./GoalsSectionHeader";
import { getAllGoals, GoalsType } from "@/api/goals";
import FilteredGoals from "./FilteredGoals";

const GoalsSection = ({ title, groupName }: { title: string, groupName: string }) => {
  const [goalsState, setGoalsState] = useState<GoalsType[]>([]);

  useEffect(() => {
    const getGoals = async () => {
      const goals = await getAllGoals(groupName);
      setGoalsState(goals);
    };
    getGoals();
  }, []);

  return (
    <div className="p-10 flex flex-col w-full">
      <GoalsSectionHeader title={title} />
      <FilteredGoals goals={goalsState} setGoalsState={setGoalsState} />
      <AddGoal />
    </div>
  );
};

export default GoalsSection;
