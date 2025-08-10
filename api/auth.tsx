import { decodeJWT } from "@/utils/tokenUtils"
import { FormEvent, Dispatch, SetStateAction } from "react"
import { getCookie, setCookie } from "cookies-next"
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
    setErrors((prev) => ({
      ...prev,
      missingName: { ...errors.missingName, state: true },
    }))
    return
  }
  const email = formData.get("email")
  if (email == "") {
    setErrors((prev) => ({
      ...prev,
      missingEmail: { ...errors.missingEmail, state: true },
    }))
    return
  }
  const password = formData.get("password")
  if (password == "" || typeof password !== "string") {
    setErrors((prev) => ({
      ...prev,
      missingPassword: { ...errors.missingPassword, state: true },
    }))
    return
  }
  const passwordErrors: string[] = []
  passwordValidator(password).forEach((item) => {
    if (item.state) passwordErrors.push(item.message)
  })

  if (passwordErrors.length !== 0) {
    setErrors((prev) => ({
      ...prev,
      goodPassword: { state: true, message: [...passwordErrors] },
    }))
    return
  }

  const passwordConfirm = formData.get("passwordConfirm")
  if (passwordConfirm == "") {
    setErrors((prev) => ({
      ...prev,
      missingPasswordConfirm: {
        ...errors.missingPasswordConfirm,
        state: true,
      },
    }))
    return
  }
  if (password !== passwordConfirm) {
    setErrors((prev) => ({
      ...prev,
      passwordAndConfirmNotMatch: {
        ...errors.passwordAndConfirmNotMatch,
        state: true,
      },
    }))
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
    setErrors((prev) => ({
      ...prev,
      accountExists: { ...errors.accountExists, state: true },
    }))
    return
  }
  if (!data.token && data.status !== "success") {
    setErrors((prev) => ({
      ...prev,
      somethingWentWrong: { ...errors.somethingWentWrong, state: true },
    }))
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
