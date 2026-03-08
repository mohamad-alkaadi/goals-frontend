import { checkForTokenFromCookies } from "@/utils/tokenUtils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import Sidebar from "@/components/common/sidebar/Sidebar";
import GoalsSection from "@/components/common/goals/GoalsSection";
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params

  const title = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: title,
    description: `Viewing the ${title} page`,
  }
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const token = await checkForTokenFromCookies();
  if (!token) redirect("/auth/signin");
  const { slug } = await params
  const title = slug.replaceAll("-", " ")
  return (
    <GoalsSection title={title} groupName={slug} />
  );
}
