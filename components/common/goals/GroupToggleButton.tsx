import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const GroupToggleButton = ({
  length,
  active,
  setGroupButtonOpen,
  title,
}: {
  length: number;
  active: boolean;
  setGroupButtonOpen: () => void;
  title: string;
}) => {
  return (
    <div
      onClick={() => setGroupButtonOpen()}
      className="capitalize flex justify-between items-center px-2 py-1 text-white bg-[#292929] rounded-sm cursor-pointer w-[150px] select-none hover:bg-[#3b3b3b]"
    >
      <div className="flex justify-center items-center space-x-1">
        <p>{active ? <IoIosArrowDown /> : <IoIosArrowForward />}</p>
        <p>{title}</p>
      </div>
      <p>{length}</p>
    </div>
  );
};

export default GroupToggleButton;
