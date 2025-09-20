import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FriendsType, getAllFriends } from "@/api/friends";

const FriendsList = () => {
  const [activeList, setActiveList] = useState({
    requests: false,
    friends: false,
  });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllFriends();
      setFriends(data);
    };
    getData();
  }, []);
  return (
    <div className="w-full flex-grow overflow-auto h-[80vh]">
      <div
        onClick={() => {
          setActiveList((prev) => ({ ...prev, friends: !prev.friends }));
        }}
        className="capitalize flex justify-between items-center px-2 py-1 text-white bg-[#292929] rounded-sm cursor-pointer w-full select-none hover:bg-[#3b3b3b]"
      >
        <div className="flex justify-center items-center space-x-1">
          <p>
            {activeList.friends ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </p>
          <p>{"Friends"}</p>
        </div>
        <p>{friends.length}</p>
      </div>
      {activeList.friends && (
        <Friends friends={friends} setFriends={setFriends} />
      )}
    </div>
  );
};

export default FriendsList;
