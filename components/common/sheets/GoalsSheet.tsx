"use client";
import React, { ReactElement } from "react";
import SheetTemplate from "./SheetTemplate";
import GoalsSheetContent from "./GoalsSheetContent";
import { GoalsType } from "@/api/goals";

const GoalsSheet = ({ actionButton, goalItem }: { actionButton: ReactElement, goalItem: GoalsType }) => {
  return (
    <SheetTemplate
      trigger={
        actionButton
      }
      contentClassName="bg-[#272727] border-0 text-white"
      headerClassName="flex flex-col justify-center space-y-1 h-full w-full bg-red-400"
      title="Friends"
    >
      <GoalsSheetContent goalItem={goalItem} />
    </SheetTemplate>
  );
};

export default GoalsSheet;
