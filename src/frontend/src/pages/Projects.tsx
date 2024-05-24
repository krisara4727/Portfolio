import React from "react";
import { projects } from "../constants/projects";
import SecondaryHeader from "../components/common/SecondaryHeader";

function Projects() {
  return (
    <div className="flex flex-col">
      <SecondaryHeader name={projects} />
    </div>
  );
}

export default Projects;
