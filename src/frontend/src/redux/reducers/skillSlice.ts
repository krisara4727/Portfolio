import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
    loading: false,
    error: false,
    data: null,
}

const skillSlice=createSlice({
    name: "skills",
    initialState: initialState,
    reducers:{
      requestSkillData:(state: RootState)=> {
        state.loading=true;
      },
      getSkillsData: (state: RootState, action) => {
        state.loading=false;
        if(Array.isArray(action.payload?.data) && action.payload.data.length)
        state.data=action.payload.data;
      },
      failedSkillsData: (state: RootState,action) => {
        state.loading= false;
        state.error=action.payload;
      }
    }
});

export type SkillsReducer= typeof skillSlice.reducer;
export const {requestSkillData,getSkillsData,failedSkillsData} = skillSlice.actions;
export default skillSlice.reducer;




