"use client";

import { getTokenCookieClient } from "@/utils/tokenUtilsClient";

const changeGoalFavorite = async (id: string, favorite: boolean) => {
  const token = await getTokenCookieClient();
  console.log(token);
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
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export { changeGoalFavorite };
