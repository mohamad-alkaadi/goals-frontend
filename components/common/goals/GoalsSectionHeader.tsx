import FriendsSheet from "@/components/common/sheets/FriendsSheet";
import SuggestionsSheet from "@/components/common/sheets/SuggestionsSheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import React, { Dispatch, SetStateAction } from "react";
import { BsThreeDots } from "react-icons/bs";
import { SortTypes } from "./GoalsSection";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

const GoalsSectionHeader = ({ title, sortActive, setSortActive, sortDescending, setSortDescending, sortType, setSortType }: { title: string; sortActive: boolean; setSortActive: Dispatch<SetStateAction<boolean>>; sortDescending: boolean; setSortDescending: Dispatch<SetStateAction<boolean>>; sortType: SortTypes; setSortType: Dispatch<SetStateAction<SortTypes>> }) => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const changeSort = (sortTypeClick: SortTypes) => {
    setSortType(sortTypeClick)
    if (sortTypeClick == "none")
      setSortActive(false)
    else
      setSortActive(true)
  }

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <div className="text-[30px] font-[600] text-[#8795a0] capitalize">{title}</div>
        <div className="text-[15px] font-[400] text-[#8795a0]">{date}</div>
      </div>
      <div className="flex space-x-1 text-white">
        {sortType != "none" && <div onClick={() => setSortDescending((prev) => (!prev))} className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
          {sortDescending ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </div>}
        <FriendsSheet />
        {/*<SuggestionsSheet />*/}
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
            <BsThreeDots />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            className="bg-[#212121] text-white border-0 mt-1 mr-2 rounded-sm "
          >
            <DropdownMenuLabel className="py-2 px-2 rounded-t-sm bg-[#333338]">Sort By</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => changeSort("importance")} className={`hover:bg-[#333333] cursor-pointer py-2 px-4 ${sortType == "importance" ? "bg-[#333333]" : ""}`}>
              Importance
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2a2a2a]" />
            <DropdownMenuItem onClick={() => changeSort("dueDate")} className={`hover:bg-[#333333] cursor-pointer py-2 px-4 ${sortType == "dueDate" ? "bg-[#333333]" : ""}`}>
              Due date
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2a2a2a]" />
            <DropdownMenuItem onClick={() => changeSort("alphabet")} className={`hover:bg-[#333333] cursor-pointer py-2 px-4 ${sortType == "alphabet" ? "bg-[#333333]" : ""}`}>
              Alphabetically
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2a2a2a]" />
            <DropdownMenuItem onClick={() => changeSort("creation")} className={`hover:bg-[#333333] cursor-pointer py-2 px-4 ${sortType == "creation" ? "bg-[#333333]" : ""}`}>
              Creation date
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2a2a2a]" />
            <DropdownMenuItem onClick={() => changeSort("none")} className={`hover:bg-[#333333] cursor-pointer py-2 px-4 rounded-b-sm ${sortType == "none" ? "bg-[#333333]" : ""}`}>
              None
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default GoalsSectionHeader;
