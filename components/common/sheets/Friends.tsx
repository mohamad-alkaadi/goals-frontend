import { FriendsType } from "@/api/friends";
import React, { Dispatch, SetStateAction } from "react";
import Friend from "./Friend";

const Friends = ({
  friends,
  setFriends,
}: {
  friends: FriendsType[];
  setFriends: Dispatch<SetStateAction<FriendsType[]>>;
}) => {
  return (
    <div className="flex flex-col">
      {friends.map((item) => (
        <Friend
          key={item._id}
          id={item._id}
          name={item.name}
          setFriends={setFriends}
        />
      ))}
    </div>
  );
};

export default Friends;
