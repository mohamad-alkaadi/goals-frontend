"use client";
import { getTokenCookieClient } from "@/utils/tokenUtilsClient";
import { Dispatch, SetStateAction } from "react";
// this function takes goal id and favorite state and favorite state setter
// and makes a patch request to change the favorite to the opposite of the previous state
// also it change is the state on the client side for instant changes without reload
// it does not return anything
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

// this function takes goal id and the state of the goal completion and its setter
// and makes a patch request to change the completion to opposite
// also it change is the state on the client side for instant changes without reload
// it does not return anything

const changeGoalCompletion = async (
  id: string,
  completedGoal: boolean,
  setCompletedGoal: Dispatch<SetStateAction<boolean>>
) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;
  const isCompleted = !completedGoal
  await fetch(`${url}/api/v1/goals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      completed: !completedGoal,
      completedAt: Date.now(),
      ...(isCompleted && { overDue: false })
    }),
  });
  setCompletedGoal(!completedGoal);
};

export { changeGoalFavorite, changeGoalCompletion };
