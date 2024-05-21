import { themeType } from "./themeTypes";

export interface IHeaderProps {
    handleTheme: () => void;
    theme: themeType
}