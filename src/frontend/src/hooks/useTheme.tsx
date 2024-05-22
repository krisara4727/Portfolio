import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { RootState } from "../store";
import { themeType } from "../types/themeTypes";
import {
  darkBgColor,
  darkColor,
  darkSecondaryColor,
  lightBgColor,
  lightColor,
  lightSecondaryColor,
} from "../constants/styles";

interface ThemePropertiesTypes {
  bg: string;
  color: string;
  secondaryColor: string;
}

function useTheme() {
  const [themeProperties, setThemeProperties] = useState<ThemePropertiesTypes>({
    color: lightColor,
    bg: lightBgColor,
    secondaryColor: lightSecondaryColor,
  });
  const theme: themeType = useSelector((state: RootState) => state.theme.mode);
  const getThemeBg = () => (theme === "dark" ? darkBgColor : lightBgColor);
  const getThemeColor = () => (theme === "dark" ? darkColor : lightColor);
  const getThemeSecondaryColor = () =>
    theme === "dark" ? darkSecondaryColor : lightSecondaryColor;

  useEffect(() => {
    if (theme) {
      const themeProps = {
        bg: getThemeBg(),
        color: getThemeColor(),
        secondaryColor: getThemeSecondaryColor(),
      };
      setThemeProperties(themeProps);
    }
  }, [theme]);

  return { themeProperties };
}

export default useTheme;
