import React from "react"
import { MdErrorOutline } from "react-icons/md"

const AuthErrorMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="self-start max-w-[360px] ml-1 text-red-500 flex items-center justify-start space-x-0.5">
      <MdErrorOutline className="text-[9px] mt-[2.5px]" />
      <p className="text-[14px]">{msg}</p>
    </div>
  )
}

export default AuthErrorMsg
