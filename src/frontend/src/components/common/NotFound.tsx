import FolderIcon from "@mui/icons-material/Folder";
import { noData } from "../../constants/dashboard";

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col-reverse justify-center items-center">
      <p className="secondary__text__color font-rubik font-medium text-md">
        {noData}
      </p>
      <FolderIcon fontSize="large" />
    </div>
  );
}

export default NotFound;
