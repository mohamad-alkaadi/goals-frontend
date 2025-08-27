import { checkForTokenFromCookies } from "@/utils/tokenUtils";
import { cookies } from "next/headers";
interface GoalsType {
  title: string;
  description: string;
  date: Date;
  dueDateActive: boolean;
  dueDate: Date;
  overDue: boolean;
  completed: boolean;
  favorite: boolean;
  groupName: string;
  groupId: string;
  userId: string;
  shared: boolean;
  _id: string;
}

const getAllGoals = async () => {
  const token = await checkForTokenFromCookies();

  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const goals = await fetch(`${url}/api/v1/goals/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.data as GoalsType[]);

  return goals;
};

export { getAllGoals };
