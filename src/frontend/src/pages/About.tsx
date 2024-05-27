import React from "react";
import SecondaryHeader from "../components/common/SecondaryHeader";
import { about, education, experience, personalInfo } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import { educationData, experienceData, personalData } from "../data";
import InfoCard from "../components/common/InfoCard";
import Steps from "../components/common/Steps";
import { ExperienceDataType } from "../types/commonTypes";

function About() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <SecondaryHeader name={about} />
      <div className="flex flex-col gap-8">
        <SubHeading personalInfo={personalInfo} />
        <div className="w-full grid grid-cols-1 place-content-center gap-4 justify-items-center md:grid-cols-2">
          {Object.entries(personalData).map((item: any) => (
            <InfoCard item={item}></InfoCard>
          ))}
        </div>
        <SubHeading personalInfo={experience} />
        <div className="pb-4">
          {experienceData.map((experience: ExperienceDataType) => (
            <Steps key={experience.company} data={experience} />
          ))}
        </div>
        <SubHeading personalInfo={education} />
        <div className="pb-4">
          {educationData.map((school) => (
            <Steps data={school} key={school.company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
