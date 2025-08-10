import React from "react"
import { IconType } from "react-icons"
const AuthInput = ({
  Icon,
  inputType,
  inputNameId,
  inputPlaceholder,
}: {
  Icon: IconType
  inputType: string
  inputNameId: string
  inputPlaceholder: string
}) => {
  return (
    <div className="w-[360px] flex justify-center h-[50px] items-center bg-black rounded-md">
      <Icon className="text-[#808080] text-[26px] mx-1 mt-[1.5px]" />
      <input
        type={inputType}
        name={inputNameId}
        id={inputNameId}
        placeholder={inputPlaceholder}
        className="text-[14px] w-full text-white outline-none mr-1"
      />
    </div>
  )
}

export default AuthInput
