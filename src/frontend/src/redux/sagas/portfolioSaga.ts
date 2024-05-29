import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axios";
import { aboutUrl } from "../../api/urls";
import { failedAboutData, getAboutData,requestAboutData } from "../reducers/portfolioReducer";

function* handleGetAboutData(): any{
    try{
        const data: any = yield call(axiosInstance.get, aboutUrl)
        yield put(getAboutData(data));
    }catch(e: any){
        console.log("error in getting about data saga",e);
        yield put(failedAboutData(e.message));
    }
}

function* watchAboutData() {
    yield takeLatest(requestAboutData.type, handleGetAboutData);
}

export default watchAboutData;