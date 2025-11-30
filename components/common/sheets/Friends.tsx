import {
  acceptFriend,
  cancelFriendRequest,
  deleteFriend,
  FriendsType,
  rejectFriend,
} from "@/api/friends";
import React, { Dispatch, SetStateAction } from "react";
import Friend from "./Friend";

const handleCloseButtonAction = (id: string, listType: string) => {
  if (listType == "friends") return deleteFriend(id);
  if (listType == "received") return rejectFriend(id);
  if (listType == "sent") return cancelFriendRequest(id);
  return undefined;
};

const Friends = ({
  friends,
  setFriends,
  listType,
}: {
  friends: FriendsType[];
  setFriends: Dispatch<SetStateAction<FriendsType[]>>;
  listType: string;
}) => {
  return (
    <div className="flex flex-col">
      {friends.map((item) => (
        <Friend
          key={item._id}
          id={item._id}
          name={item.name}
          setFriends={setFriends}
          closeButtonAction={() => handleCloseButtonAction(item._id, listType)}
          checkMarkButtonAction={
            listType === "received" ? acceptFriend : undefined
          }
        />
      ))}
    </div>
  );
};

export default Friends;
