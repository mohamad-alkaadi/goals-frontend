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

  const slug = name.replaceAll(' ', '-')
  await fetch(`${url}/api/v1/goals/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      name: name,
      slug: slug
    })
  });
};


