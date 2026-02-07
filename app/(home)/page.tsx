import { checkForTokenFromCookies } from "@/utils/tokenUtils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import Sidebar from "@/components/common/sidebar/Sidebar";
import GoalsSection from "@/components/common/goals/GoalsSection";

export default async function Home() {
  const token = await checkForTokenFromCookies();
  if (!token) redirect("/auth/signin");

  return (
    <GoalsSection title={"my day"} groupName={'ungrouped'} />
  );
}
