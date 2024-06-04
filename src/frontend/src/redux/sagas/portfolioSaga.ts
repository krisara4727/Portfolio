import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axios";
import { aboutUrl, skillsUrl } from "../../api/urls";
import { failedAboutData, getAboutData,requestAboutData } from "../reducers/portfolioReducer";
import { failedSkillsData, getSkillsData, requestSkillData } from "../reducers/skillSlice";

function* handleGetAboutData(): any{
    try{
        const data: any = yield call(axiosInstance.get, aboutUrl)
        yield put(getAboutData(data));
    }catch(e: any){
        yield put(failedAboutData(e.message));
    }
}

function* handleGetSkillsData(): any{
    try{
        const data: any= yield call(axiosInstance.get, skillsUrl);
        yield put(getSkillsData(data));
    }catch(e:any) {
        yield put(failedSkillsData(e.message));
    }
}

function* watchAboutData() {
    yield takeLatest(requestAboutData.type, handleGetAboutData);
    yield takeLatest(requestSkillData.type, handleGetSkillsData);
}

export default watchAboutData;