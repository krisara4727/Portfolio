import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  loading: false,
  error: false,
  data: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    requestProjectsData: (state: RootState) => {
      state.loading = true;
    },
    getProjectsData: (state: RootState, action) => {
      state.loading = false;
      if (Array.isArray(action.payload?.data) && action.payload.data.length)
        state.data = action.payload.data;
    },
    failedProjectsData: (state: RootState, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export type SkillsReducer = typeof projectSlice.reducer;
export const { requestProjectsData, getProjectsData, failedProjectsData } =
  projectSlice.actions;
export default projectSlice.reducer;
