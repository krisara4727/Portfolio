import { all, takeLatest } from "redux-saga/effects";
import { handleToggleTheme } from "./themeSaga";
import { TOGGLE_THEME } from "../constants/themeConstants";

function* rootSaga() {
    yield all([
        takeLatest(TOGGLE_THEME, handleToggleTheme)
    ])
}

export default rootSaga;