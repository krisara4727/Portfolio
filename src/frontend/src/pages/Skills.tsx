import React from "react";
import SecondaryHeader from "../components/common/SecondaryHeader";
import { profiles, skills, techStack } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import Container from "../components/common/Container";
import GlassCard from "../components/common/GlassCard";
import {
  codingSiteData,
  searchOptions,
  searchedResults,
  skillsData,
} from "../data";
import { SkillDataType } from "../types/dataTypes";
import SearchComponent from "../components/skills/SearchComponent";
import "../components/common/common.css";
import SearchOptions from "../components/skills/SearchOptions";
import SearchedResults from "../components/skills/SearchedResults";
import CodingPlatform from "../components/skills/CodingPlatform";

function Skills() {
  return (
    <div className="flex flex-col gap-8 pb-6">
      <SecondaryHeader name={skills} />
      <SubHeading personalInfo={techStack} />
      <Container>
        {skillsData
          .sort((a, b) => b.score - a.score)
          .map((skill: SkillDataType) => (
            <GlassCard skill={skill} />
          ))}
      </Container>
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
