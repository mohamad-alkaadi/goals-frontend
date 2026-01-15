import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
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

const AddGoalAddPeopleDialog = ({ sharedWith, setShared, setSharedWith, shared }: { sharedWith: string; setShared: Dispatch<SetStateAction<boolean>>; setSharedWith: Dispatch<SetStateAction<string>>; shared: boolean; }) => {
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [tempId, setTempId] = useState(sharedWith);
  useEffect(() => {
    setTempId(sharedWith);
  }, [sharedWith]);

  useEffect(() => {
    const getData = async () => {
      const data: FriendsApiResponse = await getAllFriends();
      setFriends(data.friends);
    };
    getData();
  }, []);


  const handleFriendClick = (friendId: string) => {
    if (sharedWith === friendId)
      setTempId("")
    else
      setTempId(friendId)
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={`hover:bg-[#474747] flex items-center ${shared == true ? "bg-[#474747] rounded-none" : ""} h-[47px] w-[32px] flex justify-center items-center cursor-pointer rounded-md`} >
        <GoPeople />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#1c1c1c] border-0 text-white h-[300px] flex flex-col">
        <AlertDialogHeader>
          <AlertDialogTitle>Add People</AlertDialogTitle>
          <AlertDialogDescription className="h-[170px] overflow-auto flex flex-col space-y-1">
            {friends.map(item => (
              <button key={item._id} onClick={() => handleFriendClick(item._id)} className={`w-full cursor-pointer ${tempId === item._id ? "bg-[#373737]" : "bg-[#2a2a2a]"} h-[40px] flex items-center text-[17px] text-white capitalize pl-2 rounded-sm shrink-0`}>
                {item.name}
              </button>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setTempId(sharedWith)} className="px-4 py-2 rounded-md transition-colors bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-600 hover:text-white">Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={() => {
            if (tempId != "") {
              setShared(true)
              setSharedWith(tempId)
            } else {
              setShared(false)
              setSharedWith("")
            }
          }} className="px-4 py-2 rounded-md transition-all duration-200 
      bg-emerald-950/30 text-emerald-500 border border-emerald-900/50 
      hover:bg-emerald-600 hover:text-white hover:border-emerald-600">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddGoalAddPeopleDialog
