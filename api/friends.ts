import { getTokenCookieClient } from "@/utils/tokenUtilsClient";
import { Dispatch, SetStateAction } from "react";

export interface FriendsType {
  _id: string;
  name: string;
}

const getAllFriends = async () => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const friends = await fetch(`${url}/api/v1/friends/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.data as FriendsType[]);

  return friends;
};

const deleteFriend = async (id: string) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  await fetch(`${url}/api/v1/friends/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      friendId: id,
    }),
  });
};

const addFriend = async (
  email: string,
  setSearchResult: Dispatch<SetStateAction<string>>
) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const result = await fetch(`${url}/api/v1/friends/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
    }),
  }).catch((err) => console.log("err:", err));
  console.log("result:", result);
};

export { getAllFriends, deleteFriend, addFriend };
