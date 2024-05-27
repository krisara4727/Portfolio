import "./common.css";
import ReactLogo from "../../assets/svg/react.svg";
import JavascriptLogo from "../../assets/svg/javascript.svg";
import ReduxLogo from "../../assets/svg/redux.svg";
import HtmlLogo from "../../assets/svg/html.svg";
import CssLogo from "../../assets/svg/css.svg";
import TypescriptLogo from "../../assets/svg/typescript.svg";
import MongodbLogo from "../../assets/svg/mongodb.svg";
import NodeLogo from "../../assets/svg/node-js.svg";
import GitLogo from "../../assets/svg/git.svg";
import MaterialLogo from "../../assets/svg/material.svg";
import DockerLogo from "../../assets/svg/docker.svg";
import TailwindLogo from "../../assets/svg/tailwind-css-icon.svg";
import SpringbootLogo from "../../assets/svg/springboot.svg";
import MysqlLogo from "../../assets/svg/mysql.svg";
import MobxLogo from "../../assets/svg/mobx.svg";
import ExpressLogo from "../../assets/svg/expressjs.svg";
import { SkillDataType } from "../../types/dataTypes";
import ProgressBar from "./ProgressBar";
import Tag from "./Tag";

function GlassCard(props: { skill: SkillDataType }) {
  const getLogo: any = {
    react: ReactLogo,
    javascript: JavascriptLogo,
    redux: ReduxLogo,
    html: HtmlLogo,
    css: CssLogo,
    typescript: TypescriptLogo,
    mongodb: MongodbLogo,
    nodejs: NodeLogo,
    github: GitLogo,
    materialui: MaterialLogo,
    docker: DockerLogo,
    tailwindcss: TailwindLogo,
    springboot: SpringbootLogo,
    mysql: MysqlLogo,
    mobx: MobxLogo,
    express: ExpressLogo,
  };
  return (
    <div className="glass__card min-w-48 md:min-w-96 p-2 flex-1 flex flex-col relative">
      {/* logo and info */}
      <div className="flex gap-2">
        <div className="skill_img__container">
          <img
            src={getLogo[props.skill.logo + ""]}
            alt={props.skill.name}
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
