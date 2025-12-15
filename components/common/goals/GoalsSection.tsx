"use client";
import React, { useEffect, useState } from "react";
import AddGoal from "./AddGoal";
import GoalsSectionHeader from "./GoalsSectionHeader";
import { getAllGoals, GoalsType } from "@/api/goals";
import FilteredGoals from "./FilteredGoals";

const GoalsSection = () => {
  const [goalsState, setGoalsState] = useState<GoalsType[]>([]);

  useEffect(() => {
    const getGoals = async () => {
      const goals = await getAllGoals();
      setGoalsState(goals);
    };
    getGoals();
  }, []);

  // useEffect(() => {
  //   const getGoals = async () => {
  //     const goals = await getAllGoals();
  //     setGoalsState(goals);
  //   };
  //   getGoals();
  // }, [goalsState]);

  return (
    <div className="p-10 flex flex-col w-full">
      <GoalsSectionHeader />
      <FilteredGoals goals={goalsState} setGoalsState={setGoalsState} />
      <AddGoal setGoalsState={setGoalsState} />
    </div>
  );
};

export default GoalsSection;
