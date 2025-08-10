import { decodeJWT } from "@/utils/tokenUtils"
import { FormEvent, Dispatch, SetStateAction } from "react"
import { setCookie } from "cookies-next"
import { passwordValidator } from "@/utils/passwordValidator"
import { signupInitialErrors } from "@/components/auth/signup/signupErrors"
import { signinInitialErrors } from "@/components/auth/signin/signinErrors"

interface Errors {
  missingEmail: {
    state: boolean
    message: string[]
  }
  missingPassword: {
    state: boolean
    message: string[]
  }
  somethingWentWrong: {
    state: boolean
    message: string[]
  }
  incorrectToken: {
    state: boolean
    message: string[]
  }
  incorrectEmailOrPassword: {
    state: boolean
    message: string[]
  }
}

const flagError = (
  key: keyof Errors,
  setErrors: Dispatch<SetStateAction<Errors>>,
  msg?: string[]
) => {
  setErrors((prev) => ({
    ...prev,
    [key]: { ...prev[key], state: true, message: msg ?? prev[key].message },
  }))
}

const signinFunction = async (
  e: FormEvent<HTMLFormElement>,
  errors: Errors,
  setErrors: Dispatch<SetStateAction<Errors>>
) => {
  e.preventDefault()
  setErrors(() => signinInitialErrors)
  const formData = new FormData(e.currentTarget)
  const email = formData.get("email")
  if (email == "") {
    flagError("missingEmail", setErrors)
    return
  }
  const password = formData.get("password")
  if (password == "" || typeof password !== "string") {
    flagError("missingPassword", setErrors)
    return
  }

  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL
  const data = await fetch(`${url}/api/v1/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
  if (
    data.error &&
    data.error.statusCode === 401 &&
    data.message === "Incorrect email or password"
  ) {
    flagError("incorrectEmailOrPassword", setErrors)
    return
  }
  if (!data.token && data.status !== "success") {
    flagError("somethingWentWrong", setErrors)
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
// incorrect password or email
export { signinFunction }
