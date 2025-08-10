import { decodeJWT } from "@/utils/tokenUtils"
import { FormEvent, Dispatch, SetStateAction } from "react"
import { setCookie } from "cookies-next"
import { passwordValidator } from "@/utils/passwordValidator"

interface Errors {
  missingName: {
    state: boolean
    message: string[]
  }
  missingEmail: {
    state: boolean
    message: string[]
  }
  missingPassword: {
    state: boolean
    message: string[]
  }
  missingPasswordConfirm: {
    state: boolean
    message: string[]
  }
  passwordAndConfirmNotMatch: {
    state: boolean
    message: string[]
  }
  goodPassword: {
    state: boolean
    message: string[]
  }
  accountExists: {
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

const validatePassword = (password: string): string[] => {
  return passwordValidator(password)
    .filter((item) => item.state)
    .map((item) => item.message)
}

const signupFunction = async (
  e: FormEvent<HTMLFormElement>,
  errors: Errors,
  setErrors: Dispatch<SetStateAction<Errors>>,
  initialErrors: Errors
) => {
  e.preventDefault()
  setErrors(() => initialErrors)
  const formData = new FormData(e.currentTarget)
  const name = formData.get("name")
  if (name == "") {
    flagError("missingName", setErrors)
    return
  }
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

  const passwordErrors = validatePassword(password)

  if (passwordErrors.length !== 0) {
    // setErrors((prev) => ({
    //   ...prev,
    //   goodPassword: { state: true, message: [...passwordErrors] },
    // }))
    flagError("missingPasswordConfirm", setErrors, [...passwordErrors])

    return
  }

  const passwordConfirm = formData.get("passwordConfirm")
  if (passwordConfirm == "") {
    flagError("missingPasswordConfirm", setErrors)
    return
  }
  if (password !== passwordConfirm) {
    flagError("passwordAndConfirmNotMatch", setErrors)
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

  if (data.error && data.error.code === 11000) {
    flagError("accountExists", setErrors)
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

export { signupFunction }
