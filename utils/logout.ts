import React from "react"
import { deleteTokenCookieServer } from "./tokenUtils"
import { deleteTokenCookieClient } from "./tokenUtilsClient"
import { useRouter } from "next/navigation"
const logout = async () => {
  const router = useRouter()
  deleteTokenCookieClient()
  await deleteTokenCookieServer()
  router.push("/")
}

export { logout }
