import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ThemeInitialStateType } from "../../types/themeTypes";

const initialState: ThemeInitialStateType = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: RootState) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export type ThemeReducerType = typeof themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
