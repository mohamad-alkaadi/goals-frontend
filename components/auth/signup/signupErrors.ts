export const signupInitialErrors = {
  missingName: { state: false, message: ["please enter a name"] },
  missingEmail: { state: false, message: ["please enter an email"] },
  missingPassword: { state: false, message: ["please enter a password"] },
  missingPasswordConfirm: {
    state: false,
    message: ["please confirm your password"],
  },
  passwordAndConfirmNotMatch: {
    state: false,
    message: ["passwords do not match"],
  },
  goodPassword: { state: false, message: [] },
  accountExists: { state: false, message: ["account already exists"] },
  somethingWentWrong: { state: false, message: ["something went wrong"] },
  incorrectToken: {
    state: false,
    message: ["invalid token, try logging in"],
  },
}
