import React from "react";
import {
  getInTouchText,
  sectionTitle,
  summary,
} from "../../constants/dashboard";
import krishnaImage from "../../assets/krishna.jpeg";

function DashboardSection() {
  return (
    <section className="py-8 flex-1 flex gap-4 flex-col-reverse md:flex-row items-center">
      <div className={`md:flex-1`}>
        <p className="font-rubik tracking-wider leading-16 font-bold text-3xl break-words">
          {sectionTitle}
        </p>
        <p className="pt-6 font-light text-sm">{summary}</p>
        <div className="pt-4">
          <button className="small__button">{getInTouchText}</button>
        </div>
      </div>
      <div
        className={`md:flex-1 w-full flex items-center h-full justify-center my__image__background`}
      >
        <picture className="my__image">
          <img
            src={krishnaImage}
            alt="My Image"
            loading="eager"
            className="w-52 md:w-64 h-52 md:h-64"
          />
        </picture>
        {/* <div className="absolute image__container glass__on__image"></div> */}
        {/* <div className="my__image__background"></div> */}
      </div>
    </section>
  );
}

export default DashboardSection;
