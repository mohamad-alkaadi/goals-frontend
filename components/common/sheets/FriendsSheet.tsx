"use client";
import React from "react";
import { LuEarth } from "react-icons/lu";
import SheetTemplate from "./SheetTemplate";
import FriendsSheetContent from "./FriendsSheetContent";

const FriendsSheet = () => {
  return (
    <SheetTemplate
      trigger={
        <span className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
          <LuEarth />
        </span>
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
