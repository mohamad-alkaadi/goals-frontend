import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  accountType: "",
  preferredAccount: "",
  preferredCurrency: "",
  loading: true,
};

const userOptionsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setUserSettings: (
      state,
      action: PayloadAction<{
        accountType: string;
        preferredAccount: string;
        preferredCurrency: string;
        loading: boolean;
      }>
    ) => {
      state.accountType = action.payload.accountType;
      state.preferredAccount = action.payload.preferredAccount;
      state.preferredCurrency = action.payload.preferredCurrency;
      state.loading = action.payload.loading;
    },
  },
});

export const { setUserSettings } = userOptionsSlice.actions;
export default userOptionsSlice.reducer;
