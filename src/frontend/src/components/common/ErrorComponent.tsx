import { ErrorPageType } from "../../types/commonTypes";
import "./errorComponent.css";

function ErrorComponent(props: ErrorPageType) {
  const textArray: string[] =
    props.type === 404
      ? ["PAGE", "NOT", "FOUND"]
      : ["INTERNAL", "SERVER", "ERROR"];
  return (
    <div className="border w-10/12 error__page relative">
      <div className="decagon md:w-64 w-28 h-28 md:h-64"></div>
      <div className="c__shape md:w-72 w-32 h-32 md:h-72 left-2/4"></div>
      <div className="sunflower md:w-20 w-8 h-8 md:h-20"></div>
      <div className="triangle__shape md:w-28 w-10 h-10 md:h-28"></div>
      <div className="rhombus md:w-20 w-8 h-8 md:h-20"></div>
      <div className="star md:w-48 w-16 h-16 md:h-48"></div>
      <div className="flex gap-6 items-center">
        {textArray.map((word: string, index: number) => (
          <p
            className={`${
              (Number(index) + 1) % 2 === 0 ? "-rotate-12 -translate-y-3" : ""
            } font-extrabold leading-8 z-10 tracking-widest md:text-3xl text-lg text-red-700`}
            key={word}
          >
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ErrorComponent;
