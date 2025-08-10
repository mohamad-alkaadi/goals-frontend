"use client"
import React, { useState } from "react"
import { TbMail, TbLock, TbLockPassword, TbUser } from "react-icons/tb"
import { useRouter } from "next/navigation"
import { signinFunction } from "@/api/signinAuth"
import AuthErrorMsg from "../AuthErrorMsg"
import AuthInput from "../AuthInput"

const SigninForm = () => {
  const [errors, setErrors] = useState({
    missingEmail: { state: false, message: ["please enter an email"] },
    missingPassword: { state: false, message: ["please enter a password"] },
    somethingWentWrong: {
      state: false,
      message: ["something went wrong, please try again"],
    },
    incorrectToken: {
      state: false,
      message: ["something went wrong, please try again"],
    },
    incorrectEmailOrPassword: {
      state: false,
      message: ["incorrect email or password"],
    },
  })

  const router = useRouter()
  return (
    <form
      onSubmit={(e) => {
        signinFunction(e, errors, setErrors).then((result) => {
          if (result) {
            router.push("/")
          }
        })
      }}
      autoComplete="false"
      className="flex flex-col justify-center items-center space-y-1"
    >
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

      <button
        type="submit"
        className="cursor-pointer w-[360px] text-[15px] bg-[#035fb6] hover:bg-[#0076da] h-[50px] rounded-md"
      >
        Sign Up
      </button>
      <>
        {Object.values(errors).flatMap((item, index) =>
          item.state
            ? item.message.map((msg, msgIndex) => {
                return <AuthErrorMsg key={`${index}-${msgIndex}`} msg={msg} />
              })
            : []
        )}
      </>
    </form>
  )
}

export default SigninForm
