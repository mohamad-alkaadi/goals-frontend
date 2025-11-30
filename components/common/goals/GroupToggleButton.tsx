import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const GroupToggleButton = ({
  length,
  active,
  setGroupButtonOpen,
  title,
  width,
  rounded,
}: {
  length: number;
  active: boolean;
  setGroupButtonOpen: () => void;
  title: string;
  width: string;
  rounded: string;
}) => {
  return (
    <div
      onClick={() => setGroupButtonOpen()}
      className={`capitalize flex justify-between items-center ${rounded} my-1 px-2 py-1 text-white  ${
        active ? "bg-[#3b3b3b]" : "bg-[#292929]"
      } cursor-pointer ${width} select-none hover:bg-[#3b3b3b]`}
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
