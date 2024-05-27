import { CodingSiteTypes } from "../../types/dataTypes";
import leetLogo from "../../assets/images/leetcode.jpeg";
import codechefLogo from "../../assets/images/codechef.jpeg";
import hackerLogo from "../../assets/images/hackerrank2.png";
import gitLogo from "../../assets/images/github.png";
import linkedLogo from "../../assets/images/linkedIn.png";
import "../common/common.css";

function CodingPlatform(props: { data: CodingSiteTypes[] }) {
  const getLogo: any = {
    linkedin: linkedLogo,
    hackerrank: hackerLogo,
    codechef: codechefLogo,
    github: gitLogo,
    leetcode: leetLogo,
  };
  return (
    <div className="flex flex-col gap-6">
      {props.data.map((site: CodingSiteTypes) => (
        <div key={site.name}>
          <div className="flex gap-2 cursor-pointer">
            <div>
              <img
                src={getLogo[site.logo]}
                alt={site.name}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="">
              <p className="capitalize -translate-y-1">{site.name}</p>
              <p className="text-xs leading-4 -translate-y-2">
                <a href={site.url} target="_blank">
                  {site.url}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium">{site.title}</p>
          </div>
          <div className="text-sm md:w-1/2 secondary__text__color">
            {site.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodingPlatform;
