"use server"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

const decodeJWT = async (token: string) => {
  const decodedToken = jwtDecode(token)
  return decodedToken
}

const checkForTokenFromCookies = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  return token
}

const deleteTokenCookieServer = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("token")
}


export { decodeJWT, checkForTokenFromCookies, deleteTokenCookieServer }
