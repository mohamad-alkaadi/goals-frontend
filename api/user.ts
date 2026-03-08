"use client"
import { checkForTokenFromCookies } from "@/utils/tokenUtils";
export interface UserDetails {
  name: string;
  email: string;
  initials: string;
}

export const getUserDetails = async () => {
  const token = await checkForTokenFromCookies();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const userDetails = await fetch(`${url}/api/v1/users/details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.data as UserDetails);
  return userDetails;
};


