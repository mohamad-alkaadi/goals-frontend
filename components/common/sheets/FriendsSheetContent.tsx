"use client";
import React from "react";
import AddFriendBox from "./AddFriendBox";
import FriendsList from "./FriendsList";

const FriendsSheetContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-1 h-full">
      <AddFriendBox />
      <FriendsList />
    </div>
  );
};

export default FriendsSheetContent;
