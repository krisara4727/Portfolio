import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import Seperator from "./Seperator";
import { ExperienceDataType } from "../../types/commonTypes";
import GeekyantsLogo from "../../assets/geekyants.jpeg";
import KreditbeeLogo from "../../assets/kreditbee_logo.jpeg";
import KarmalabLogo from "../../assets/karmalabs_logo.jpeg";
import IiitLogo from "../../assets/svg/iiit.svg";
import KrishnaveniLogo from "../../assets/images/krhs.jpeg";
import NarayanaLogo from "../../assets/images/narayana.jpg";

interface StepType {
  data: ExperienceDataType;
}

const getImage = (companyName: string) => {
  if (companyName.toLowerCase().includes("geekyants")) return GeekyantsLogo;
  else if (companyName.toLowerCase().includes("kreditbee"))
    return KreditbeeLogo;
  else if (companyName.toLowerCase().includes("karmalab")) return KarmalabLogo;
  else if (companyName.toLowerCase().includes("iiit")) return IiitLogo;
  else if (companyName.toLowerCase().includes("krishnaveni"))
    return KrishnaveniLogo;
  else if (companyName.toLowerCase().includes("narayana")) return NarayanaLogo;
};

function Steps(props: StepType) {
  const { data } = props;

  return (
    <div className="flex gap-4 max-h-fit">
      {/* stepui */}
      <div className="flex flex-col items-center step__ui">
        <div className="border rounded-full p-1 seperator__border2 glow">
          {data.type === "industry" ? <BusinessCenterIcon /> : <SchoolIcon />}
        </div>
        <Seperator width="1px" height="100%" classNames="seperator__border" />
      </div>

      {/* info? */}
      <div className="flex flex-col pt-2 pb-4 md:px-4">
        <h1 className="text-2xl font-medium leading-4 font-rubik tracking-wide">
          {data.designation}
        </h1>
        <p className="text-sm pt-2">
          {data.startDate} - {data.endDate} {"( " + data.timePeriod + " )"}
        </p>
        <div className="flex pt-3 gap-2 items-center">
          <div>
            <img
              src={getImage(data.company)}
              alt="geekyants logo"
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium leading-4 font-rubik">
              {data.company}
            </h2>
            <p className="text-xl font-medium font-rubik">{data.location}</p>
          </div>
        </div>
        <ul className="list-disc pt-2 secondary__text__color">
          {data.description.split(".").map((sentence: string) => (
            <li key={sentence} className="pt-1">
              {sentence}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Steps;
