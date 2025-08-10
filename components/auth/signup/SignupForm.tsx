"use client"
import { signupFunction } from "@/api/auth"
import { useState } from "react"
import { TbUser, TbMail, TbLock, TbLockPassword } from "react-icons/tb"
import AuthInput from "../AuthInput"
import { useRouter } from "next/navigation"
import { MdErrorOutline } from "react-icons/md"
import AuthErrorMsg from "../AuthErrorMsg"

const SignupForm = () => {
  const [errors, setErrors] = useState({
    missingName: { state: false, message: ["please enter a name"] },
    missingEmail: { state: false, message: ["please enter an email"] },
    missingPassword: { state: false, message: ["please enter a password"] },
    missingPasswordConfirm: {
      state: false,
      message: ["please confirm your password"],
    },
    passwordAndConfirmNotMatch: {
      state: false,
      message: ["passwords do not match"],
    },
    goodPassword: { state: false, message: [] as string[] },
    accountExists: { state: false, message: ["account already exists"] },
    somethingWentWrong: { state: false, message: ["something already exists"] },
    incorrectToken: {
      state: false,
      message: ["something already exists, try logging in"],
    },
  })
  const initialErrors = {
    missingName: { state: false, message: ["please enter a name"] },
    missingEmail: { state: false, message: ["please enter an email"] },
    missingPassword: { state: false, message: ["please enter a password"] },
    missingPasswordConfirm: {
      state: false,
      message: ["please confirm your password"],
    },
    passwordAndConfirmNotMatch: {
      state: false,
      message: ["passwords do not match"],
    },
    goodPassword: { state: false, message: [] as string[] },
    accountExists: { state: false, message: ["account already exists"] },
    somethingWentWrong: { state: false, message: ["something already exists"] },
    incorrectToken: {
      state: false,
      message: ["something already exists, try logging in"],
    },
  }
  const router = useRouter()

  return (
    <form
      onSubmit={(e) => {
        signupFunction(e, errors, setErrors, initialErrors).then((result) => {
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

export default SignupForm
