import {
  getInTouchText,
  myNumber,
  sectionTitle,
  summary,
} from "../../constants/dashboard";
import krishnaImage from "../../assets/krishna.jpeg";
// import krishnaImage2 from "../../assets/krishna2.png";

function DashboardSection() {
  return (
    <section className="py-2 md:py-8 flex-1 flex gap-2 md:gap-4 flex-col-reverse md:flex-row items-center">
      <div className={`md:flex-1`}>
        <p className="font-rubik tracking-wide md:tracking-wider leading-16 font-bold text-2xl md:text-3xl break-words">
          {sectionTitle}
        </p>
        <p className="pt-2 md:pt-6 font-light text-sm">{summary}</p>
        <div className="pt-4 cursor-pointer">
          <button className="small__button">
            {" "}
            <a href={`tel:${myNumber}`}>{getInTouchText}</a>
          </button>
        </div>
      </div>
      <div
        className={`md:flex-1 w-full flex items-center h-full justify-center my__image__background `}
      >
        <picture className="my__image">
          <img
            src={krishnaImage}
            alt="My Image"
            loading="eager"
            className="w-44 md:w-64 h-44 md:h-64"
          />
        </picture>
        {/* <div className="absolute image__container glass__background"></div> */}
        {/* <div className="my__image__background"></div> */}
      </div>
    </section>
  );
}

export default DashboardSection;
