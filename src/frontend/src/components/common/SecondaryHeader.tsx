import { SecondaryHeaderTypes } from "../../types/commonTypes";
import "./common.css";

function SecondaryHeader(props: SecondaryHeaderTypes) {
  return (
    <div className="flex justify-between items-center w-full pt-4">
      <div className="flex flex-col py-2 w-1/3 gap-2">
        <div className="w-full h-4  rounded-r-lg secondary__header__bars"></div>
        <div className="w-2/3 h-4 bg-red-400 rounded-r-lg secondary__header__bars"></div>
        <div className="w-1/3 h-4 bg-red-400 rounded-r-lg secondary__header__bars"></div>
      </div>
      <p className="text-center text-2xl font-rubik font-medium clip__text">
        {props.name}
      </p>
      <div className="flex flex-col items-end py-2 w-1/3 gap-2">
        <div className="w-full h-4 bg-red-400 rounded-l-lg secondary__header__bars"></div>
        <div className="w-2/3 h-4 bg-red-400 rounded-l-lg secondary__header__bars"></div>
        <div className="w-1/3 h-4 bg-red-400 rounded-l-lg secondary__header__bars"></div>
      </div>
    </div>
  );
}

export default SecondaryHeader;
