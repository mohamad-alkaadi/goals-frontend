import { decodeJWT } from "@/utils/tokenUtils"
import { FormEvent, Dispatch, SetStateAction } from "react"
import { getCookie, setCookie } from "cookies-next"
import { passwordValidator } from "@/utils/passwordVaildator"

interface Errors {
  missingName: boolean
  missingEmail: boolean
  missingPassword: boolean
  missingPasswordConfirm: boolean
  passwordAndConfirmNotMatch: boolean
  goodPassword: boolean
  accountExists: boolean
  somethingWentWrong: boolean
  incorrectToken: boolean
}
const signupFunction = async (
  e: FormEvent<HTMLFormElement>,
  errors: Errors,
  setErrors: Dispatch<SetStateAction<Errors>>
) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const name = formData.get("name")
  if (name == "") {
    setErrors({ ...errors, missingName: true })
    return
  }
  const email = formData.get("email")
  if (email == "") {
    setErrors({ ...errors, missingEmail: true })
    return
  }
  const password = formData.get("password")
  if (password == "" || typeof password !== "string") {
    setErrors({ ...errors, missingPassword: true })
    return
  }
  if (passwordValidator(password).length !== 0) {
    setErrors({ ...errors, goodPassword: true })
    return
  }

  const passwordConfirm = formData.get("passwordConfirm")
  if (password !== passwordConfirm) {
    setErrors({ ...errors, passwordAndConfirmNotMatch: true })
    return
  }
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL
  const data = await fetch(`${url}/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      passwordConfirm,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)

  console.log(data)
  console.log("done")
  if (data.error && data.error.code === 11000) {
    setErrors({ ...errors, accountExists: true })
    return
  }
  if (!data.token && data.status !== "success") {
    setErrors({ ...errors, somethingWentWrong: true })
    return
  }
  const decodedToken = decodeJWT(data.token)
  if (!decodedToken.exp || !decodedToken.iat) {
    return
  }
  const tokenExp = decodedToken.exp - decodedToken.iat
  setCookie("token", data.token, { maxAge: tokenExp })
  return true
}

export { signupFunction }
