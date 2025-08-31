"use client";
import { getTokenCookieClient } from "@/utils/tokenUtilsClient";
import { Dispatch, SetStateAction } from "react";
// this function takes id and favorite state and favorite state setter
// and makes a patch request to change the favorite to the opposite of the previous state
const changeGoalFavorite = async (
  id: string,
  favorite: boolean,
  setFavoriteState: Dispatch<SetStateAction<boolean>>
) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  await fetch(`${url}/api/v1/goals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      favorite: !favorite,
    }),
  });
  setFavoriteState(!favorite);
};

export { changeGoalFavorite };
