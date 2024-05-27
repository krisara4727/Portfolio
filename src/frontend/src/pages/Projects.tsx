import { projects } from "../constants/projects";
import SecondaryHeader from "../components/common/SecondaryHeader";
import ImageCarousel from "../components/common/ImageCarousel";
import { projectsData } from "../data";
import SubHeading from "../components/common/SubHeading";
import Container from "../components/common/Container";
import { ProjectDataType } from "../types/dataTypes";
import Card from "../components/common/Card";

function Projects() {
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
