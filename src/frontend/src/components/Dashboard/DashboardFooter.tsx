import { letsConnect } from "../../constants/dashboard";
import Seperator from "../common/Seperator";
import useTheme from "../../hooks/useTheme";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function DashboardFooter() {
  const { themeProperties } = useTheme();
  console.log("themes ing proper", themeProperties.color);
  useEffect(() => {}, [themeProperties]);
  return (
    <footer className="footer__svg flex">
      <div className="flex gap-2 items-end p-4">
        <p className="font-light text-sm flex items-center gap-4">
          {letsConnect}{" "}
          <Seperator width="16px" height="1px" color={themeProperties.color} />
        </p>
        <div className="z-10 flex gap-4">
          <LinkedInIcon
            className="social__icons"
            fontSize="small"
            sx={{ color: themeProperties.secondaryColor }}
          />
          <GitHubIcon
            className="social__icons"
            fontSize="small"
            sx={{ color: themeProperties.secondaryColor }}
          />
          <XIcon
            className="social__icons"
            fontSize="small"
            sx={{ color: themeProperties.secondaryColor }}
          />
          <InstagramIcon
            className="social__icons"
            fontSize="small"
            sx={{ color: themeProperties.secondaryColor }}
          />
          <FacebookIcon
            className="social__icons"
            fontSize="small"
            sx={{ color: themeProperties.secondaryColor }}
          />
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
