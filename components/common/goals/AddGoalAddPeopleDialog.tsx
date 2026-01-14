import React, { useState, useEffect } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { GoPeople } from "react-icons/go"
import { FriendsApiResponse, FriendsType, getAllFriends } from "@/api/friends";
const AddGoalAddPeopleDialog = () => {
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [activeFriends, setActiveFriends] = useState<String[]>([])
  useEffect(() => {
    const getData = async () => {
      const data: FriendsApiResponse = await getAllFriends();
      setFriends(data.friends);
    };
    getData();
  }, []);
  useEffect(() => {
    console.log("friends yoyo: ", friends)
  }, [friends])

  const handleFriendClick = (friendId: string) => {
    setActiveFriends((prev) => {
      if (prev.includes(friendId)) {
        return prev.filter((id) => id !== friendId);
      } else {
        return [...prev, friendId];
      }
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className={`hover:bg-[#474747] h-[47px] w-[32px] flex justify-center items-center cursor-pointer rounded-md`} >
        <GoPeople />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#1c1c1c] border-0 text-white h-[300px] flex flex-col">
        <AlertDialogHeader>
          <AlertDialogTitle>Add People</AlertDialogTitle>
          <AlertDialogDescription className="h-[170px] overflow-auto flex flex-col space-y-1">
            {friends.map(item => (
              <button key={item._id} onClick={() => handleFriendClick(item._id)} className={`w-full cursor-pointer ${activeFriends.includes(item._id) ? "bg-[#373737]" : "bg-[#2a2a2a]"} h-[40px] flex items-center text-[17px] text-white capitalize pl-2 rounded-sm shrink-0`}>
                {item.name}
              </button>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddGoalAddPeopleDialog
