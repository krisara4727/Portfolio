import { ProjectDataType } from "../../types/dataTypes";
import DikstraImg from "../../assets/images/dijkstra-min.png";
import ChainImg from "../../assets/images/chain-reaction-min.png";
import PassImg from "../../assets/images/generate-pass-min.png";
import TicTacImg from "../../assets/images/tic-tac-toe-min.png";
import ResumeImg from "../../assets/images/resume.png";

import "./common.css";
import { getImageFromBuffer } from "../../utils/skillsUtils";

const getImage: any = {
  pathfinding: DikstraImg,
  chainreaction: ChainImg,
  password: PassImg,
  tictactoe: TicTacImg,
  resume: ResumeImg,
};

function Card(props: { data: ProjectDataType }) {
  const { data } = props;

  return (
    <div className="px-4 py-2 flex-1">
      <div className="flex flex-col gap-2 rounded-lg min-w-44 h-fit md:w-60 card glass__background relative">
        <div className="flex justify-center m-0 p-0">
          <img
            src={getImageFromBuffer(props.data.image)}
            alt="image"
            className="w-full h-60 rounded-lg object-cover"
          />
        </div>
        <h3 className="p-1 pl-2 font-medium text-lg">{data.name}</h3>
        {data.description && (
          <p className="pb-2 px-2 secondary__text__color h-24 overflow-y-auto">
            {data.description}
          </p>
        )}
        {(data?.git || data?.hosted) && (
          <div className="w-full flex justify-end gap-2 p-2">
            {data?.git && (
              <button className="button small__button">
                <a href={data.git} target="_blank">
                  Repo
                </a>
              </button>
            )}
            {data?.hosted && (
              <button className="button small__button">
                <a href={data.hosted} target="_blank">
                  Visit
                </a>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
