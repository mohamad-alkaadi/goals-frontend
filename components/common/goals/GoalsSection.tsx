"use client";
import React, { useEffect, useState } from "react";
import AddGoal from "./AddGoal";
import GoalsSectionHeader from "./GoalsSectionHeader";
import { getAllGoals, GoalsType } from "@/api/goals";
import FilteredGoals from "./FilteredGoals";

export type SortTypes = "importance" | "dueDate" | "alphabet" | "creation" | "none"

const GoalsSection = ({ title, groupName }: { title: string, groupName: string }) => {
  const [goalsState, setGoalsState] = useState<GoalsType[]>([]);
  const [sortActive, setSortActive] = useState<boolean>(false)
  const [sortDescending, setSortDescending] = useState<boolean>(false)
  const [sortType, setSortType] = useState<SortTypes>("none")

  useEffect(() => {
    const getGoals = async () => {
      const goals = await getAllGoals(groupName);
      setGoalsState(goals);
    };
    getGoals();
  }, []);


  useEffect(() => {
    if (sortType === "none" || goalsState.length === 0) return;

    const sortedGoals = [...goalsState].sort((a, b) => {
      let comparison = 0;

      if (sortType === "alphabet") {
        comparison = a.title.localeCompare(b.title);
      }
      else if (sortType === "dueDate") {
        comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      else if (sortType === "creation") {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      else if (sortType === "importance") {
        comparison = (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1;
      }

      return sortDescending ? comparison * -1 : comparison;
    });

    setGoalsState(sortedGoals);

  }, [sortActive, sortDescending, sortType]);
  const checkAddGoalActive = !["shared", "overdue", "completed"].includes(groupName)
  return (
    <div className="p-10 flex flex-col w-full">
      <GoalsSectionHeader title={title} sortActive={sortActive} setSortActive={setSortActive} sortDescending={sortDescending} setSortDescending={setSortDescending} sortType={sortType} setSortType={setSortType} />
      <FilteredGoals goals={goalsState} setGoalsState={setGoalsState} />
      {checkAddGoalActive && <AddGoal />}
    </div>
  );
};

export default GoalsSection;
