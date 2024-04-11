import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DarkModeState } from "./dark-mode-state";

export const initialState: DarkModeState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    darkModePressed: (state: DarkModeState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});

export const { darkModePressed } = darkModeSlice.actions;
export default darkModeSlice.reducer;
