import { changeGoalFavorite } from "@/api/goalsClient";
import React from "react";
import { GoPeople, GoPersonAdd } from "react-icons/go";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const GoalOptions = ({ favorite, id }: { favorite: boolean; id: string }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {favorite ? (
        <GoPeople
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            alert("multiple people clicked");
          }}
          className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        />
      ) : (
        <GoPersonAdd
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            alert("one person clicked");
          }}
          className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        />
      )}
      <div
        className="text-[20px] text-[#cbcbcb] hover:text-[#8795a0] cursor-pointer"
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          changeGoalFavorite(id, favorite);
        }}
      >
        {favorite ? <IoMdStar /> : <IoMdStarOutline />}
      </div>
    </div>
  );
};

export default GoalOptions;
