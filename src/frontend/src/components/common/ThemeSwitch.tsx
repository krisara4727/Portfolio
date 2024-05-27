import "./themeSwitch.css";
import { themeType } from "../../types/themeTypes";

interface ThemeSwitchTypes {
  theme: themeType;
  handleTheme: () => void;
}

function ThemeSwitch(props: ThemeSwitchTypes) {
  const { theme, handleTheme } = props;
  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          value={theme}
          onClick={handleTheme}
        />
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </label>
  );
}

export default ThemeSwitch;
