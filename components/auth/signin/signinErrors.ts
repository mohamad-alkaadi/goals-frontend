export const signinInitialErrors = {
  missingEmail: { state: false, message: ["please enter an email"] },
  missingPassword: { state: false, message: ["please enter a password"] },
  somethingWentWrong: {
    state: false,
    message: ["something went wrong, please try again"],
  },
  incorrectToken: {
    state: false,
    message: ["something went wrong, please try again"],
  },
  incorrectEmailOrPassword: {
    state: false,
    message: ["incorrect email or password"],
  },
}
