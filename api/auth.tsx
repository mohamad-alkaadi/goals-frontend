import { FormEvent } from "react"

const signupFunction = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")
  const passwordConfirm = formData.get("passwordConfirm")
  if (password != passwordConfirm) {
    console.log("password:", password)
    console.log("passwordConfirm:", passwordConfirm)

    alert("Passwords do not match")
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
  console.log("data:", data)
}

export { signupFunction }
