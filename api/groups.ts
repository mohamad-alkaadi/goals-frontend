import { checkForTokenFromCookies } from "@/utils/tokenUtils";
export interface GroupsType {
  name: string,
  slug: string,
  _id: string
}

const createGroup = async (name: string) => {
  const token = await checkForTokenFromCookies();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  await fetch(`${url}/api/v1/groups/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      name: name,
    })
  });
};

const getAllGroups = async () => {
  const token = await checkForTokenFromCookies();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const groups = await fetch(`${url}/api/v1/groups/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
  }).then(res => res.json())
    .then(data => data.data)
  return groups
};

export { createGroup, getAllGroups }
