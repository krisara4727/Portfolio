import { useDispatch, useSelector } from "react-redux";

import { projectsData } from "../data";
import Card from "../components/common/Card";
import { projects } from "../constants/projects";
import { ProjectDataType } from "../types/dataTypes";
import Container from "../components/common/Container";
import SubHeading from "../components/common/SubHeading";
import ImageCarousel from "../components/common/ImageCarousel";
import SecondaryHeader from "../components/common/SecondaryHeader";
import { RootState } from "../store";
import Loader from "../components/common/Loader";
import NotFound from "../components/common/NotFound";
import { useEffect, useRef } from "react";

function Projects() {
  const firstRendering = useRef(true);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    if (firstRendering.current) {
      if (!(data && data?.length)) dispatch();
      firstRendering.current = false;
    }
  });

  if (loading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <div className="flex flex-col gap-6">
      <SecondaryHeader name={projects} />
      <ImageCarousel data={projectsData} />
      <SubHeading personalInfo={projects} />
      <Container>
        {projectsData.map((project: ProjectDataType) => (
          <Card key={project.name} data={project} />
        ))}
      </Container>
    </div>
  );
}

export default Projects;
