import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  loading: false,
  error: false,
  data: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState: initialState,
  reducers: {
    requestFilesData: (state: RootState) => {
      state.loading = true;
    },
    getFilesData: (state: RootState, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    failureFilesData: (state: RootState, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export type FileSliceType = typeof fileSlice.reducer;
export const { requestFilesData, getFilesData, failureFilesData } =
  fileSlice.actions;
export default fileSlice.reducer;
