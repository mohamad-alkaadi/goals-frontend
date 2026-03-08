"use client";
import React, { useState } from "react";
import AddFriendBox from "./AddFriendBox";
import FriendsList from "./FriendsList";
import { GoalsType } from "@/api/goals";

const GoalsSheetContent = ({ goalItem }: { goalItem: GoalsType }) => {
  const [goalTitle, setGoalTitle] = useState<string>(goalItem.title)
  const [description, setDescription] = useState<string>(goalItem.description)
  const [goalDate, setGoalDate] = useState<Date>(goalItem.date)
  const [goalDueDateActive, setGoalDueDateActive] = useState<boolean>(goalItem.dueDateActive)
  const [goalDueDate, setGoalDueDate] = useState<Date>(goalItem.dueDate)
  const [goalOverDue, setGoalOverDue] = useState<boolean>(goalItem.overDue)
  const [goalCompleted, setGoalCompleted] = useState<boolean>(goalItem.completed)
  const [goalFavorite, setGoalFavorite] = useState<boolean>(goalItem.favorite)
  const [goalGroupName, setGoalGroupName] = useState<string>(goalItem.groupName)
  const [goalShared, setGoalShared] = useState<boolean>(goalItem.shared)
  const [goalSharedWith, setGoalSharedWith] = useState<string>(goalItem.sharedWith)
  const [goalSharedWithName, setgoalSharedWithName] = useState<string>(goalItem.sharedWithName)


  return (
    <div className="flex flex-col justify-center space-y-1 h-full">

    </div>
  );
};

export default GoalsSheetContent;
