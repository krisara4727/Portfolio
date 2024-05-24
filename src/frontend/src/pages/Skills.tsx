import React from "react";
import SecondaryHeader from "../components/common/SecondaryHeader";
import { skills, techStack } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import Container from "../components/common/Container";

function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <SecondaryHeader name={skills} />
      <SubHeading personalInfo={techStack} />
      <Container>
        <></>
      </Container>
    </div>
  );
}

export default Skills;
