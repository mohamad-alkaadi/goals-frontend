"use client";
import { changeGoalFavorite } from "@/api/goalsClient";
import React, { useState } from "react";
import { GoPeople, GoPersonAdd } from "react-icons/go";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const GoalOptions = ({
  favorite,
  id,
  shared,
}: {
  favorite: boolean;
  id: string;
  shared: boolean;
}) => {
  const [favoriteState, setFavoriteState] = useState<boolean>(favorite);

  return (
    <div className="flex justify-center items-center space-x-2">
      {shared ? (
        <GoPeople
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        />
      ) : (
        <GoPersonAdd
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
