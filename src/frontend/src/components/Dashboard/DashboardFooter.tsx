import {
  gitLink,
  instagramLink,
  letsConnect,
  linkedInLink,
} from "../../constants/dashboard";
import Seperator from "../common/Seperator";
import useTheme from "../../hooks/useTheme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function DashboardFooter() {
  const { themeProperties } = useTheme();
  return (
    <footer className="footer__svg flex h-32 md:h-48">
      <div className="flex gap-2 items-end p-4">
        <p className="font-light text-sm flex items-center gap-4">
          {letsConnect} <Seperator width="16px" height="1px" />
        </p>
        <div className="z-10 flex gap-4">
          <a href={linkedInLink} target="_blank">
            <LinkedInIcon
              className="social__icons"
              fontSize="small"
              sx={{ color: themeProperties.secondaryColor }}
            />
          </a>
          <a href={gitLink} target="_blank">
            <GitHubIcon
              className="social__icons"
              fontSize="small"
              sx={{ color: themeProperties.secondaryColor }}
            />
          </a>

          <a target="_blank">
            <XIcon
              className="social__icons"
              fontSize="small"
              sx={{ color: themeProperties.secondaryColor }}
            />
          </a>

          <a href={instagramLink} target="_blank">
            <InstagramIcon
              className="social__icons"
              fontSize="small"
              sx={{ color: themeProperties.secondaryColor }}
            />
          </a>

          <a target="_blank">
            <FacebookIcon
              className="social__icons"
              fontSize="small"
              sx={{ color: themeProperties.secondaryColor }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
