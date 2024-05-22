import { Link } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { IHeaderProps } from "../../types/headerTypes";
import { appTitle, hireText } from "../../constants/header";
import { headerNavigations } from "../../utils/headerUtils";

function Header(props: IHeaderProps) {
  const { handleTheme, theme } = props;

  const GetIcon = () => {
    switch (theme) {
      case "dark":
        return <DarkModeIcon />;
      case "light":
        return <LightModeIcon />;
      default:
        return <LightModeIcon />;
    }
  };

  return (
    <nav className="flex items-end justify-between cursor-pointer py-2">
      <div className="app__title">
        <h1 className="font-rubik title__font text-xl font-bold tracking-wider">
          {appTitle}
          <span className="text-2xl text-orange-600 font-bolder rounded-2xl pl-[2px]">
            .
          </span>
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        {headerNavigations.map((item: string) => (
          <Link to={"/" + item.toLowerCase()} key={item}>
            {item}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center ">
        <div
          onClick={handleTheme}
          className="border p-1 bg-slate-200 rounded-full"
        >
          {GetIcon()}
        </div>
        <button className="small__button">{hireText}</button>
      </div>
    </nav>
  );
}

export default Header;
