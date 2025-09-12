import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

const FriendsSheetContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-1 h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex justify-center items-center w-full border-[1px] border-[#9b9b9b] space-x-1"
      >
        <label htmlFor="add-friend" className="py-2 px-2">
          <IoIosSearch />
        </label>
        <input
          type="text"
          id="add-friend"
          name="add-friend"
          className="flex-grow outline-0 py-2"
          placeholder="Add Friend"
        />
        <button className="cursor-pointer hover:bg-[#373737] h-full py-2 px-2">
          <IoAdd />
        </button>
      </form>
      <div className="w-full flex-grow overflow-auto ">
        <div className="w-full flex space-x-2 py-3 hover:bg-[#373737] px-2 cursor-pointer">
          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-300">
            UN
          </div>
          <div className="flex justify-center items-center text-[17px] font-[500]">
            User Name
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsSheetContent;
