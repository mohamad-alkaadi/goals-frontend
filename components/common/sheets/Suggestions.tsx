import React from "react";
import { IoAdd } from "react-icons/io5";

const Suggestions = () => {
  return (
    <div className="w-full flex-grow overflow-auto">
      <div className="w-full flex justify-center items-center space-x-2 py-3 hover:bg-[#373737] px-2  border-b-[1px] border-[#393939]">
        <div className="flex justify-start items-center text-[17px] font-[500] flex-grow">
          User Name
        </div>
        <IoAdd className="text-[#76b9ed] text-[25px] hover:bg-[#3e4347]  cursor-pointer" />
      </div>
    </div>
  );
};

export default Suggestions;
