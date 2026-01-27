"use client";
import { changeGoalFavorite } from "@/api/goalsClient";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import React, { useState } from "react";
import { GoPeople, GoPerson } from "react-icons/go";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const GoalOptions = ({
  favorite,
  id,
  shared,
  sharedWithName
}: {
  favorite: boolean;
  id: string;
  shared: boolean;
  sharedWithName: string;
}) => {
  const [favoriteState, setFavoriteState] = useState<boolean>(favorite);

  return (
    <div className="flex justify-center items-center space-x-2">
      {shared ? (
        <Tooltip>
          <TooltipTrigger asChild>

            <GoPeople
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
              }}
              className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
            />
          </TooltipTrigger>
          <TooltipContent className="text-white mr-[100px]">
            <p>{sharedWithName}</p>
          </TooltipContent>
        </Tooltip>

      ) : (
        <GoPerson
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        />
      )}
      <div
        className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          changeGoalFavorite(id, favoriteState, setFavoriteState);
        }}
      >
        {favoriteState ? <IoMdStar /> : <IoMdStarOutline />}
      </div>
    </div>
  );
};

export default GoalOptions;
