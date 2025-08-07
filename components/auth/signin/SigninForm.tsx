import React from "react"
import { TbMail, TbLock } from "react-icons/tb"

const SigninForm = () => {
  return (
    <form
      autoComplete="false"
      className="flex flex-col justify-center items-center space-y-1"
    >
      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbMail className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="text-[15px] w-full text-white outline-none mr-1"
        />
      </div>

      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbLock className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="password"
          placeholder="Enter your password"
          className="text-[15px] w-full text-white outline-none mr-1"
        />
      </div>
      <button
        type="submit"
        className="w-[360px] text-[15px] bg-[#035fb6] hover:bg-[#0076da] h-[50px] rounded-md"
      >
        Sign In
      </button>
    </form>
  )
}

export default SigninForm
