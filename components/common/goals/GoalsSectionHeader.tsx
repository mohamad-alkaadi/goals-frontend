import FriendsSheet from "@/components/common/sheets/FriendsSheet";
import SuggestionsSheet from "@/components/common/sheets/SuggestionsSheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const GoalsSectionHeader = ({ title }: { title: string }) => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <div className="text-[30px] font-[600] text-[#8795a0] capitalize">{title}</div>
        <div className="text-[15px] font-[400] text-[#8795a0]">{date}</div>
      </div>
      <div className="flex space-x-1 text-white">
        <FriendsSheet />
        {/*<SuggestionsSheet />*/}
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
            <BsThreeDots />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            className="bg-[#212121] text-white border-0 mt-1 rounded-sm "
          >
            <DropdownMenuItem className="hover:bg-[#333333] cursor-pointer rounded-t-sm py-2 px-4">
              Sort by
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#2a2a2a]" />
            <DropdownMenuItem className="hover:bg-[#333333] cursor-pointer py-2 px-4  rounded-b-sm">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default GoalsSectionHeader;
