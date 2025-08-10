type PasswordConditions = {
  title: string
  reg: RegExp
  state: Boolean
  message: string
}
let passwordConditions: PasswordConditions[] = [
  {
    title: "numOfChars",
    reg: /^.{8,20}$/,
    state: false,
    message: "password should be between 8 and 20 characters",
  },
  {
    title: "whiteSpaces",
    reg: /\s/,
    state: false,
    message: "password shouldn't have whitespaces",
  },
  {
    title: "atLeastOneUpperCase",
    reg: /[A-Z]/,
    state: false,
    message: "password should have at least one upper case",
  },
  {
    title: "atLeastOneLowerCase",
    reg: /[a-z]/,
    state: false,
    message: "password should have at least one lower case",
  },
  {
    title: "atLeastOneDigit",
    reg: /\d/,
    state: false,
    message: "password should have at least one digit",
  },
  {
    title: "atLeastOneSpecialSymbol",
    reg: /[^A-Za-z0-9]/,
    state: false,
    message: "password should have at least one special symbol",
  },
  {
    title: "repeatedThreeTimesInARow",
    reg: /(.)\1{2,}/,
    state: false,
    message:
      "password shouldn't have three or more repeated characters in a row",
  },
]

const verifyConsecutive = (text: string): boolean => {
  for (let i = 0; i < text.length - 2; i++) {
    const a = text.charCodeAt(i)
    const b = text.charCodeAt(i + 1)
    const c = text.charCodeAt(i + 2)

    if (b === a + 1 && c === b + 1) {
      return true
    }
  }
  return false
}

const passwordValidator = (text: string) => {
  const errors: PasswordConditions[] = []

  for (let i = 0; i < passwordConditions.length; i++) {
    const cond = passwordConditions[i]
    const isInvalid =
      cond.title === "whiteSpaces" || cond.title === "repeatedThreeTimesInARow"
        ? cond.reg.test(text)
        : !cond.reg.test(text)
    if (isInvalid) {
      errors.push({ ...cond, state: true })
    }
  }
  if (verifyConsecutive(text)) {
    errors.push({
      title: "threeConsecutiveCharactersInARow",
      reg: /a^/,
      state: true,
      message: "password should not have three consecutive characters",
    })
  }

  return errors
}

export { passwordValidator }
