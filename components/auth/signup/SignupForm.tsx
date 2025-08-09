"use client"
import { signupFunction } from "@/api/auth"
import React from "react"
import { TbUser, TbMail, TbLock, TbLockPassword } from "react-icons/tb"

const SignupForm = () => {
  return (
    <form
      onSubmit={(e) => signupFunction(e)}
      autoComplete="false"
      className="flex flex-col justify-center items-center space-y-1"
    >
      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbUser className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="text-[14px] w-full text-white outline-none mr-1"
        />
      </div>
      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbMail className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="text-[14px] w-full text-white outline-none mr-1"
        />
      </div>

      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbLock className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="text-[14px] w-full text-white outline-none mr-1"
        />
      </div>
      <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
        <TbLockPassword className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm your password"
          className="text-[14px] w-full text-white outline-none mr-1"
        />
      </div>
      <button
        type="submit"
        className="w-[360px] text-[15px] bg-[#035fb6] hover:bg-[#0076da] h-[50px] rounded-md"
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignupForm
