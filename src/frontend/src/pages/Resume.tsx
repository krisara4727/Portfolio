import SecondaryHeader from "../components/common/SecondaryHeader";
import { certificates, krishnaResume, resume } from "../constants/about";
import SubHeading from "../components/common/SubHeading";
import resumeFile from "../assets/files/chivtekrishna_sde-2.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DsCert from "../assets/files/DsAlgo-compressed.pdf";
import MlCert from "../assets/files/MachineLearning-compressed.pdf";
import HackerrankCert from "../assets/files/hackerrank-compressed.pdf";

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
      <div className="flex flex-col gap-4 relative">
        <embed src={resumeFile} width="100%" className="h-80 md:h-[500px]" />
        <SubHeading personalInfo={certificates} />
        <embed src={DsCert} width="100%" className="h-80 md:h-[500px] pt-2" />
        <embed src={MlCert} width="100%" className="h-80 md:h-[500px] pt-2" />
        <embed
          src={HackerrankCert}
          width="100%"
          className="h-80 md:h-[500px] pt-2"
        />
      </div>
    </div>
  );
}

export default Resume;
