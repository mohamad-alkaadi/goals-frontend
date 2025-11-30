import { FriendsType } from "@/api/friends";
import { getInitials } from "@/utils/stringUtils";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

const Friend = ({
  id,
  name,
  setFriends,
  closeButtonAction,
  checkMarkButtonAction,
}: {
  id: string;
  name: string;
  setFriends: Dispatch<SetStateAction<FriendsType[]>>;
  closeButtonAction: (id: string) => void;
  checkMarkButtonAction?: (id: string) => void;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  console.log("checkMarkButtonAction:", checkMarkButtonAction);

  return (
    <div
      key={id}
      className="w-full flex justify-between items-center space-x-2 py-3 hover:bg-[#373737] px-2 cursor-pointer"
      onClick={() => {
        setShowOptions(!showOptions);
      }}
    >
      <div className=" flex space-x-2">
        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-300">
          {getInitials(name)}
        </div>
        <div className="flex justify-center items-center text-[17px] font-[500] capitalize">
          {name}
        </div>
      </div>
      {showOptions && (
        <div className="flex space-x-1">
          <div
            onClick={(e) => {
              e.stopPropagation();
              closeButtonAction(id);
              setFriends((prev) => prev.filter((item) => item._id !== id));
            }}
            className="flex justify-center items-center border-1 border-[#e81123] hover:bg-[#f03948] cursor-pointer"
          >
            <IoMdClose />
          </div>
          {checkMarkButtonAction && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                checkMarkButtonAction(id);
                setFriends((prev) => prev.filter((item) => item._id !== id));
              }}
              className="flex justify-center items-center border-1 border-green-600 hover:bg-green-500 cursor-pointer"
            >
              <IoMdCheckmark />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Friend;
