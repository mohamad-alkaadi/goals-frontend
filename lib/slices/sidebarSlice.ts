import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

const sidebarSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    changeOpen: (state, action: PayloadAction<boolean>) => {
      return !action.payload;
    },
  },
});

export const { changeOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
