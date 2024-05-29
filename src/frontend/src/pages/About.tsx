import SecondaryHeader from "../components/common/SecondaryHeader";
import { about, education, experience, personalInfo } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import InfoCard from "../components/common/InfoCard";
import Steps from "../components/common/Steps";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAboutData } from "../redux/reducers/portfolioReducer";
import { RootState } from "../store";
import { ExperienceDataType } from "../types/commonTypes";
import Loader from "../components/common/Loader";

function About() {
  const dispatch = useDispatch();
  const firstRendering = useRef(true);
  const personalData = useSelector(
    (state: RootState) => state.portfolio.personalData
  );
  const loading = useSelector((state: RootState) => state.portfolio.loading);

  useEffect(() => {
    if (firstRendering.current) {
      if (!(personalData && personalData.email)) dispatch(requestAboutData());
      firstRendering.current = false;
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <SecondaryHeader name={about} />
      <div className="flex flex-col gap-8">
        <SubHeading personalInfo={personalInfo} />
        <div className="w-full grid grid-cols-1 place-content-center gap-4 justify-items-center md:grid-cols-2">
          {Object.entries(personalData)?.map((item: any) =>
            typeof item !== "object" ? (
              <InfoCard key={item} item={item}></InfoCard>
            ) : (
              <></>
            )
          )}
        </div>
        <SubHeading personalInfo={experience} />
        <div className="pb-4">
          {personalData.experienceData.map((exper: any) => (
            <Steps key={exper.company} data={exper} />
          ))}
        </div>
        <SubHeading personalInfo={education} />
        <div className="pb-4">
          {personalData.education.map((school: ExperienceDataType) => (
            <Steps data={school} key={school.company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
