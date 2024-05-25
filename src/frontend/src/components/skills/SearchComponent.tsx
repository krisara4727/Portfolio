import React from "react";
import { searchText } from "../../constants/projects";
import Seperator from "../common/Seperator";
import Mic from "../../assets/svg/google-mic.svg";
import Lens from "../../assets/svg/lens.svg";
import SearchIcon from "@mui/icons-material/Search";
import GoogleLogo from "../../assets/svg/google.svg";

function SearchComponent() {
  return (
    <div className="flex gap-1 md:gap-2 items-center">
      <img
        src={GoogleLogo}
        alt="google"
        className="md:w-16 md:h-16 w-12 h-12"
      ></img>
      <div className="w-full flex p-2 md:p-4 secondary__background rounded-3xl justify-between items-center">
        <p className="font-medium">{searchText}</p>
        <div className="flex gap-1 md:gap-2 items-center">
          <p className="text-lg pr-1 md:pr-2">X</p>
          <Seperator width="1px" height="24px" />
          <img src={Mic} alt="mic" className="w-8 h-8" />
          <img src={Lens} alt="lens" className="w-8 h-8" />
          <div className="rotate-90">
            <SearchIcon fontSize="medium" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
