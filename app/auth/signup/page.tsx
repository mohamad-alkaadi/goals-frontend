import SignupForm from "@/components/auth/signup/SignupForm"
import Link from "next/link"

const page = () => {
  return (
    <div className="w-full h-screen bg-[#0b0b0b] flex justify-center items-center">
      <div className="bg-[#181818] rounded-md shadow-2xl flex flex-col text-white justify-center items-center w-fit py-6 px-3">
        <h1 className="text-[50px] font-[500] mb-2 great-vibes-regular">
          Goals
        </h1>
        <p className="text-[20px] font-[400] mb-2">Welcome to goals</p>
        <p className="text-[15px] font-[300] text-[#808080] mb-4">
          already have an account?{" "}
          <Link href={"/auth/signin"} className="text-white underline">
            sign in
          </Link>
        </p>
        <SignupForm />
      </div>
    </div>
  )
}

export default page
