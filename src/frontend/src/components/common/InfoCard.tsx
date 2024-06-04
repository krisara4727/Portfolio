import { excludeFromPeronalData } from "../../constants/about";
import "./common.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface InfoCardType {
  item: string[];
}

const checkForMailAOrNumber = (text: string) => {
  return text.includes("email") || text.includes("phone");
};

const removeColorApplied = (e: any) => {
  setTimeout(() => {
    e.target.classList.remove("text-green-500");
  }, 1000);
};

const handleClipboardCopy = (e: any, text: string) => {
  window.navigator.clipboard.writeText(text);
  e.target.classList.add("text-green-500");
  removeColorApplied(e);
};

const checkForOtherThanPersonalInfo = (key: string) => {
  return !(
    excludeFromPeronalData.includes(key) || excludeFromPeronalData.includes(key)
  );
};

function InfoCard(props: InfoCardType) {
  const { item }: any = props;
  return (
    checkForOtherThanPersonalInfo(item[0]) && (
      <div className="w-full text-end text-sm md:text-base info__card max-h-fit relative p-1 pr-4">
        {item[1]}{" "}
        {checkForMailAOrNumber(item[0]) && (
          <span
            className="px-1 cursor-pointer"
            onClick={(e) => handleClipboardCopy(e, item[1])}
          >
            <ContentCopyIcon />
          </span>
        )}
        <span className="triangle">{item[0]}</span>
      </div>
    )
  );
}

export default InfoCard;
