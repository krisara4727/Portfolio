import "./common.css";
import { SkillDataType } from "../../types/dataTypes";
import ProgressBar from "./ProgressBar";
import Tag from "./Tag";
import { getImageFromBuffer } from "../../utils/skillsUtils";

function GlassCard(props: { skill: SkillDataType }) {
  return (
    <div className="glass__card min-w-48 md:min-w-96 p-2 flex-1 flex flex-col relative">
      {/* logo and info */}
      <div className="flex gap-2">
        <div className="skill_img__container">
          <img
            src={getImageFromBuffer(props.skill.logo)}
            alt={"Image Logo"}
            className="w-8 h-8"
          />
        </div>
        <div className="flex w-full gap-2 justify-around items-center">
          <div>
            <h4 className="font-rubik">{props.skill.name}</h4>
            <p className="text-sm secondary__text__color font-light capitalize">
              {props.skill.proficiency}
            </p>
          </div>
          <p className="text-md font-medium pr-2">{props.skill.score}</p>
        </div>
      </div>
      {/* range ui */}
      <div>
        <ProgressBar min={0} max={10} value={props.skill.score} />
      </div>
      <div className="absolute z-20 py-2 tag__container">
        <Tag level={props.skill.proficiency} />
      </div>
    </div>
  );
}

export default GlassCard;
