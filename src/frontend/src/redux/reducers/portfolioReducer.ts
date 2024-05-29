import { createSlice } from "@reduxjs/toolkit";
import { PersonalDataType } from "../../types/dataTypes";
import { RootState } from "../../store";

interface PortfolioInitialState {
    personalData: PersonalDataType
    loading: boolean;
    error: string;
}

const initialState: PortfolioInitialState = {
  personalData: {
    age: 0,
    experience: "",
    degree: "",
    specialization: "",
    graduation: "",
    city: "",
    phone: 0,
    email: "",
    experienceData: [
      {
        company: "",
        designation: "",
        startDate: "",
        endDate: "",
        location: "",
        timePeriod: "",
        type: "",
        description: "",
      },
    ],
    education: [
      {
        company: "",
        designation: "",
        startDate: "",
        endDate: "",
        location: "",
        timePeriod: "",
        type: "",
        description: "",
      },
    ],
  },
  loading: false,
  error: "",
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialState,
  reducers: {
    requestAboutData: (state:RootState) => {
        state.loading = true;
    },
    getAboutData: (state: RootState, action) => {
        state.loading = false;
        if(Array.isArray(action.payload?.data) && action.payload.data.length)
        state.personalData = action.payload.data[0];
    },
    failedAboutData: (state: RootState, action) => {
        state.loading = false;
        state.error = action.payload;
    }
  },
});

export type PortfolioReducer = typeof portfolioSlice.reducer;
export const {getAboutData, requestAboutData, failedAboutData} = portfolioSlice.actions;
export default portfolioSlice.reducer;
