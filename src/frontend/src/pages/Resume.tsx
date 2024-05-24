import React from "react";
import SecondaryHeader from "../components/common/SecondaryHeader";
import { krishnaResume, resume } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import resumeFile from "../assets/files/chivtekrishna_sde-2.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Resume() {
  return (
    <div className="w-full h-full flex flex-col gap-8 overflow-y-auto">
      <SecondaryHeader name={resume} />
      <div className="flex justify-between items-end">
        <SubHeading personalInfo={krishnaResume} />
        <a href={resumeFile} download="krishna-chivte.pdf">
          <FileDownloadIcon fontSize="large" />
        </a>
      </div>
      <div className="h-full">
        <embed src={resumeFile} width="100%" className="h-80 md:h-[920px]" />
      </div>
    </div>
  );
}

export default Resume;
