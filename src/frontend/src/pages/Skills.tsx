import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import Loader from "../components/common/Loader";
import { SkillDataType } from "../types/dataTypes";
import Container from "../components/common/Container";
import GlassCard from "../components/common/GlassCard";
import SubHeading from "../components/common/SubHeading";
import SearchOptions from "../components/skills/SearchOptions";
import { requestSkillData } from "../redux/reducers/skillSlice";
import { profiles, skills, techStack } from "../constants/about";
import CodingPlatform from "../components/skills/CodingPlatform";
import SecondaryHeader from "../components/common/SecondaryHeader";
import SearchComponent from "../components/skills/SearchComponent";
import SearchedResults from "../components/skills/SearchedResults";
import { codingSiteData, searchedResults, searchOptions } from "../data";

import "../components/common/common.css";

function Skills() {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector(
    (state: RootState) => state.skills
  );
  console.log("data", data);
  const firstRendering = useRef(true);
  useEffect(() => {
    if (firstRendering.current) {
      if (!data) dispatch(requestSkillData());
      firstRendering.current = false;
    }
  }, []);
  if (loading) return <Loader />;
  // if (error) return <NotFound />;
  return (
    <div className="flex flex-col gap-8 pb-6">
      <SecondaryHeader name={skills} />
      {!error && (
        <React.Fragment>
          <SubHeading personalInfo={techStack} />
          <Container>
            {data?.map((skill: SkillDataType) => (
              <GlassCard skill={skill} />
            ))}
          </Container>
        </React.Fragment>
      )}
      <SubHeading personalInfo={profiles} />
      <div className="flex flex-col gap-4">
        <SearchComponent />
        <div className="flex gap-4 secondary__text__color capitalize overflow-x-auto scrollbar-hide">
          {searchOptions.map((item: string, index: number) => (
            <SearchOptions item={item} index={index} />
          ))}
        </div>
        <hr />
        <div className="flex overflow-x-auto gap-2 scrollbar-hide">
          {searchedResults.map((item: string) => (
            <SearchedResults item={item} key={item} />
          ))}
        </div>
        <CodingPlatform data={codingSiteData} />
      </div>
    </div>
  );
}

export default Skills;
