import { put } from "redux-saga/effects";
import { toggleTheme } from "../reducers/themeSlice";

function* handleToggleTheme(){
    yield put(toggleTheme());
}

export {handleToggleTheme};