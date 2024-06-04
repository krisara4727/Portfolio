import { all, takeLatest } from "redux-saga/effects";
import { handleToggleTheme } from "./themeSaga";
import { TOGGLE_THEME } from "../constants/themeConstants";
import watchAboutData from "./portfolioSaga";

function* rootSaga() {
    yield all([
        takeLatest(TOGGLE_THEME, handleToggleTheme),
        watchAboutData(),
    ])
}

export default rootSaga;