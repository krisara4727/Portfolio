import { useEffect, useRef } from "react";

// import { useDispatch, useSelector } from "react-redux";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

// import { RootState } from "../store";
// import Loader from "../components/common/Loader";
// import NotFound from "../components/common/NotFound";
import SubHeading from "../components/common/SubHeading";
// import { getImageFromBuffer } from "../utils/skillsUtils";
import { krishnaResume, resume } from "../constants/about";
import DsCert from "../assets/files/DsAlgo-compressed.pdf";
// import { requestFilesData } from "../redux/reducers/filesSlice";
import resumeFile from "../assets/files/chivtekrishna_sde-2.pdf";
import SecondaryHeader from "../components/common/SecondaryHeader";
import MlCert from "../assets/files/MachineLearning-compressed.pdf";
import HackerrankCert from "../assets/files/hackerrank-compressed.pdf";

function Resume() {
  const firstRendering = useRef(true);
  // const dispatch = useDispatch();
  // const { loading, error, data } = useSelector(
  //   (state: RootState) => state.files
  // );
  useEffect(() => {
    if (firstRendering.current) {
      // if (!data) dispatch(requestFilesData());
      firstRendering.current = false;
    }
  });
  // if (loading) return <Loader />;
  // if (error) return <NotFound />;
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
        {/* {data?.map((file: any) => (
          <embed
            src={getImageFromBuffer(file.file)}
            width="100%"
            className="h-80 md:h-[500px] pt-2"
          />
        ))} */}
        <embed src={resumeFile} width="100%" className="h-80 md:h-[500px]" />
        {/* <SubHeading personalInfo={certificates} /> */}
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
