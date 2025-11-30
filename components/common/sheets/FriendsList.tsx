import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import { FriendsType, getAllFriends, FriendsApiResponse } from "@/api/friends";
import GroupToggleButton from "../goals/GroupToggleButton";

const FriendsList = () => {
  const [activeList, setActiveList] = useState({
    friends: false,
    requests: false,
    sentRequests: false,
  });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [received, setReceived] = useState<FriendsType[]>([]);
  const [sent, setSent] = useState<FriendsType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data: FriendsApiResponse = await getAllFriends();
      setFriends(data.friends);
      setReceived(data.received);
      setSent(data.sent);
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
        rounded={""}
      />
      {activeList.friends && (
        <Friends friends={friends} setFriends={setFriends} listType="friends" />
      )}
      <GroupToggleButton
        length={received.length}
        active={activeList.requests}
        setGroupButtonOpen={() => {
          setActiveList((prev) => ({
            ...prev,
            requests: !prev.requests,
          }));
        }}
        title={"Received"}
        width={"w-full"}
        rounded={""}
      />
      {activeList.requests && (
        <Friends
          friends={received}
          setFriends={setReceived}
          listType="received"
        />
      )}
      <GroupToggleButton
        length={sent.length}
        active={activeList.sentRequests}
        setGroupButtonOpen={() => {
          setActiveList((prev) => ({
            ...prev,
            sentRequests: !prev.sentRequests,
          }));
        }}
        title={"Sent"}
        width={"w-full"}
        rounded={""}
      />
      {activeList.sentRequests && (
        <Friends friends={sent} setFriends={setSent} listType="sent" />
      )}
    </div>
  );
};

export default FriendsList;
