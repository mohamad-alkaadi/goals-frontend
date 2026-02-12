"use client";
import React, { ReactElement } from "react";
import { LuEarth } from "react-icons/lu";
import SheetTemplate from "./SheetTemplate";
import FriendsSheetContent from "./FriendsSheetContent";

const FriendsSheet = ({ actionButton }: { actionButton: ReactElement }) => {
  return (
    <SheetTemplate
      trigger={
        actionButton
      }
      contentClassName="bg-[#272727] border-0 text-white"
      headerClassName="flex flex-col justify-center space-y-1 h-full"
      title="Friends"
    >
      <FriendsSheetContent />
    </SheetTemplate>
  );
};

export default FriendsSheet;
