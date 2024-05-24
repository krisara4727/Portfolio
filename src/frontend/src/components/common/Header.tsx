import { Link, useLocation } from "react-router-dom";

// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

import { IHeaderProps } from "../../types/headerTypes";
import { appTitle, hireText } from "../../constants/header";
import { headerNavigations } from "../../utils/headerUtils";
import ThemeSwitch from "./ThemeSwitch";
import { baseUrl } from "../../constants/appRoutes";
import { useState } from "react";

function Header(props: IHeaderProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const location = useLocation();
  const { handleTheme, theme } = props;

  // const GetIcon = () => {
  //   switch (theme) {
  //     case "dark":
  //       return <DarkModeIcon />;
  //     case "light":
  //       return <LightModeIcon />;
  //     default:
  //       return <LightModeIcon />;
  //   }
  // };

  const getHamburgerIcon = () => {
    return showMenu ? (
      <path
        x-show="open"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    ) : (
      <path
        x-show="!open"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    );
  };

  const RenderNavOptions = () => {
    return headerNavigations.map((item: string) => (
      <Link
        to={"/" + item.toLowerCase()}
        key={item}
        className={`${
          location.pathname === "/" + item.toLowerCase() && "custom__underline"
        } p-2 z-20 glass__hover`}
      >
        {item}
      </Link>
    ));
  };

  const headerOptions = () => {
    return (
      <div className="flex flex-col md:flex-row gap-4 md:items-center items-start  z-20">
        <ThemeSwitch theme={theme} handleTheme={handleTheme} />
        {/* <div
      onClick={handleTheme}
      className="border p-1 bg-slate-200 rounded-full"
    >
      {GetIcon()}
    </div> */}
        <button className="small__button">{hireText}</button>
      </div>
    );
  };

  return (
    <nav className=" flex items-end cursor-pointer py-2">
      <div className="app__title">
        <Link to={baseUrl}>
          <h1 className="font-rubik title__font text-xl font-bold tracking-wider">
            {appTitle}
            <span className="text-2xl text-orange-600 font-bolder rounded-2xl pl-[2px]">
              .
            </span>
          </h1>
        </Link>
      </div>
      <div className="hidden w-full items-end justify-between pl-6 md:flex ">
        <div className="flex gap-4 items-center ml-auto mr-auto">
          <RenderNavOptions />
        </div>
        {headerOptions()}
      </div>

      <div className="md:hidden ml-auto">
        <button
          className="focus:outline-none flex"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {getHamburgerIcon()}
          </svg>
        </button>
        {showMenu && (
          <div className="absolute flex flex-col gap-2 right-4 mt-2 w-48 z-10 glass__background p-2">
            {RenderNavOptions()}
            {headerOptions()}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
