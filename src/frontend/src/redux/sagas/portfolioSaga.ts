import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axios";
import { aboutUrl, filesUrl, projectUrl, skillsUrl } from "../../api/urls";
import {
  failedAboutData,
  getAboutData,
  requestAboutData,
} from "../reducers/portfolioReducer";
import {
  failedSkillsData,
  getSkillsData,
  requestSkillData,
} from "../reducers/skillSlice";
import {
  failedProjectsData,
  getProjectsData,
  requestProjectsData,
} from "../reducers/projectSlice";
import {
  failureFilesData,
  getFilesData,
  requestFilesData,
} from "../reducers/filesSlice";

function* handleGetAboutData(): any {
  try {
    const data: any = yield call(axiosInstance.get, aboutUrl);
    yield put(getAboutData(data));
  } catch (e: any) {
    yield put(failedAboutData(e.message));
  }
}

function* handleGetSkillsData(): any {
  try {
    const data: any = yield call(axiosInstance.get, skillsUrl);
    yield put(getSkillsData(data));
  } catch (e: any) {
    yield put(failedSkillsData(e.message));
  }
}

function* handleGetProjectsData(): any {
  try {
    const data: any = yield call(axiosInstance.get, projectUrl);
    yield put(getProjectsData(data));
  } catch (e: any) {
    yield put(failedProjectsData(e.message));
  }
}

function* handleGetFilesData(): any {
  try {
    const data: any = yield call(axiosInstance.get, filesUrl);
    yield put(getFilesData(data));
  } catch (err: any) {
    yield put(failureFilesData(err.message));
  }
}

function* watchAboutData() {
  yield takeLatest(requestAboutData.type, handleGetAboutData);
  yield takeLatest(requestSkillData.type, handleGetSkillsData);
  yield takeLatest(requestProjectsData.type, handleGetProjectsData);
  yield takeLatest(requestFilesData.type, handleGetFilesData);
}

export default watchAboutData;
