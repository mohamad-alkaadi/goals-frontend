import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import { FriendsType, getAllFriends, RequestsType } from "@/api/friends";
import GroupToggleButton from "../goals/GroupToggleButton";

const FriendsList = () => {
  const [activeList, setActiveList] = useState({
    requests: false,
    friends: false,
    sentRequests: false,
  });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [requests, setRequests] = useState<RequestsType[]>([]);
  const [sent, setSent] = useState<RequestsType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllFriends();
      setFriends(data);
    };
    getData();
  }, []);

  return (
    <div className="w-full flex-grow overflow-auto h-[80vh]">
      <GroupToggleButton
        length={friends.length}
        active={activeList.friends}
        setGroupButtonOpen={() => {
          setActiveList((prev) => ({ ...prev, friends: !prev.friends }));
        }}
        title={"Friends"}
        width={"w-full"}
      />
      {activeList.friends && (
        <Friends friends={friends} setFriends={setFriends} />
      )}
      <GroupToggleButton
        length={friends.length}
        active={activeList.friends}
        setGroupButtonOpen={() => {
          setActiveList((prev) => ({
            ...prev,
            sentRequests: !prev.sentRequests,
          }));
        }}
        title={"Pending"}
        width={"w-full"}
      />
      {activeList.sentRequests && (
        <Friends friends={friends} setFriends={setFriends} />
      )}
    </div>
  );
};

export default FriendsList;
