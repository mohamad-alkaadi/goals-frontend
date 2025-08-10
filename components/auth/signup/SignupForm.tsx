"use client"
import { signupFunction } from "@/api/auth"
import { useState } from "react"
import { TbUser, TbMail, TbLock, TbLockPassword } from "react-icons/tb"
import AuthInput from "../AuthInput"
import { useRouter } from "next/navigation"

const SignupForm = () => {
  const [errors, setErrors] = useState({
    missingName: false,
    missingEmail: false,
    missingPassword: false,
    missingPasswordConfirm: false,
    passwordAndConfirmNotMatch: false,
    goodPassword: false,
    accountExists: false,
    somethingWentWrong: false,
    incorrectToken: false,
  })
  const router = useRouter()

  return (
    <form
      onSubmit={(e) => {
        signupFunction(e, errors, setErrors).then((result) => {
          if (result) {
            router.push("/")
          }
        })
      }}
      autoComplete="false"
      className="flex flex-col justify-center items-center space-y-1"
    >
      <AuthInput
        Icon={TbUser}
        inputType={"text"}
        inputNameId={"name"}
        inputPlaceholder={"Enter your name"}
      />

      <AuthInput
        Icon={TbMail}
        inputType={"email"}
        inputNameId={"email"}
        inputPlaceholder={"Enter your email"}
      />

      <AuthInput
        Icon={TbLock}
        inputType={"password"}
        inputNameId={"password"}
        inputPlaceholder={"Enter your password"}
      />

      <AuthInput
        Icon={TbLockPassword}
        inputType={"password"}
        inputNameId={"passwordConfirm"}
        inputPlaceholder={"Confirm your password"}
      />
      <button
        type="submit"
        className="cursor-pointer w-[360px] text-[15px] bg-[#035fb6] hover:bg-[#0076da] h-[50px] rounded-md"
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignupForm
