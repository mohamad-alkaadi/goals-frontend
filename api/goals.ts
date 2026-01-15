import { checkForTokenFromCookies } from "@/utils/tokenUtils";
export interface GoalsType {
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

function isDateToday(timestamp: number) {
  const inputDate = new Date(timestamp);
  const today = new Date();

  return (
    inputDate.getFullYear() === today.getFullYear() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getDate() === today.getDate()
  );
}

const createGoal = async (titleValue: string, goalDate: number, shared: boolean, sharedWith: string) => {
  const token = await checkForTokenFromCookies();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  await fetch(`${url}/api/v1/goals/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      title: titleValue,
      dueDate: goalDate,
      dueDateActive: !isDateToday(goalDate),
      shared: shared,
      sharedWith: sharedWith
    }),
  });
};

export { getAllGoals, createGoal };
