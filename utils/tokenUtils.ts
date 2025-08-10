"use server"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

const decodeJWT = (token: string) => {
  const decodedToken = jwtDecode(token)
  return decodedToken
}

const checkForTokenFromCookies = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  return token
}

export { decodeJWT, checkForTokenFromCookies }
