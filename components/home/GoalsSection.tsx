import React from "react"
import AddGoal from "./AddGoal"
import GoalsSectionHeader from "./GoalsSectionHeader"
import Goals from "./Goals"
const GoalsSection = () => {
  return (
    <div className="p-10 flex flex-col w-full">
      <GoalsSectionHeader />
      <Goals />
      <AddGoal />
    </div>
  )
}

export default GoalsSection
