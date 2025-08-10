import { jwtDecode } from "jwt-decode"

const decodeJWT = (token: string) => {
  const decodedToken = jwtDecode(token)
  return decodedToken
}
export { decodeJWT }
