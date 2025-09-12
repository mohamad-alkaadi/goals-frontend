"use client";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import SheetTemplate from "./SheetTemplate";
import SuggestionsSheetContent from "./SuggestionsSheetContent";
const SuggestionsSheet = () => {
  return (
    <SheetTemplate
      trigger={
        <span className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
          <FaRegLightbulb />
        </span>
      }
      contentClassName="bg-[#272727] border-0 text-white"
      headerClassName="flex flex-col justify-center space-y-1 h-full"
      title="Suggestions"
    >
      <SuggestionsSheetContent />
    </SheetTemplate>
  );
};

export default SuggestionsSheet;
