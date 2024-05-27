import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import DikstraImg from "../../assets/images/dijkstra-min.png";
import ChainImg from "../../assets/images/chain-reaction-min.png";
import PassImg from "../../assets/images/generate-pass-min.png";
import TicTacImg from "../../assets/images/tic-tac-toe-min.png";
import ResumeImg from "../../assets/images/resume.png";

const getImage = {
  pathfinding: DikstraImg,
  chainreaction: ChainImg,
  password: PassImg,
  tictactoe: TicTacImg,
  resume: ResumeImg,
};

const ImageCarousel = ({ data }) => {
  const images = data.map((item) => item.image);
  console.log("images", images);
  const { observer, isLastElementIntersecting, setIsLastElementIntersecting } =
    useIntersectionObserver();
  const refs: any = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevButtonDisable, setPrevButtonDisable] = useState<boolean>(true);
  // const [nextButtonDisable, setNextButtonDisable] = useState<boolean>(false);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (currentIndex > 0 && prevButtonDisable) setPrevButtonDisable(false);
    else if (currentIndex === 0) {
      setPrevButtonDisable(true);
    }
    if (currentIndex < images.length - 1 && isLastElementIntersecting)
      setIsLastElementIntersecting(false);
  }, [currentIndex]);

  const observeLastElement = () => {
    observer.observe(refs.current[images.length - 1]);
  };
  useEffect(() => {
    observeLastElement();
  }, []);
  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 glass__background p-1 md:p-2 z-10"
        onClick={handlePrevClick}
        disabled={prevButtonDisable}
      >
        <WestIcon />
      </button>
      <div
        className="flex gap-1 transition-transform duration-300"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / images.length) + 1
          }%)`,
        }}
      >
        {images.map((image: string | undefined, index: number) => (
          <div className="flex-shrink-0 hover:scale-110" key={index}>
            <img
              src={getImage[image]}
              alt={`Slide ${index + 1}`}
              className="w-24 h-24 md:w-56 md:h-48 rounded-2xl shadow-lg"
              ref={(picture) => (refs.current[index] = picture)}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 glass__background  md:p-2 p-1 z-10"
        onClick={handleNextClick}
        disabled={isLastElementIntersecting}
      >
        <EastIcon />
      </button>
    </div>
  );
};

export default ImageCarousel;
