import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import userOptionsSlice from "./slices/userSettingsSlice"; // Import your slice

export const makeStore = (
  initialSettings: {
    accountType?: string;
    preferredAccount?: string;
    preferredCurrency?: string;
    loading?: boolean;
  } = {
      accountType: "simple",
      preferredAccount: "simple",
      preferredCurrency: "",
      loading: true,
    }
) => {
  return configureStore({
    reducer: {
      sidebarSlice: sidebarSlice,
      userSettings: userOptionsSlice,
    },
    preloadedState: {
      userSettings: {
        accountType: initialSettings.accountType ?? "simple",
        preferredAccount: initialSettings.preferredAccount ?? "simple",
        preferredCurrency: initialSettings.preferredCurrency ?? "",
        loading: initialSettings.loading ?? true,
      },
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
