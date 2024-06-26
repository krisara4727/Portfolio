import { ThemeReducerType } from "../redux/reducers/themeSlice";

export type themeType = "light" | "dark";

export interface ThemeInitialStateType {
    mode: themeType;
}

export interface themeSliceInitialStateType {
    mode: themeType
}

export interface ThemeSliceType {
    name: string;
    initialState: themeType,
    reducers: ThemeReducerType
}