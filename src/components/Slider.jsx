import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Slider = ({ slides }) => {
  let [current, setCuerrent] = useState(0);

  let prevSlide = () => {
    if (current === 0) setCuerrent(slides.lenght - 1);
    else setCuerrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.lenght - 1) setCuerrent(0);
    else setCuerrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 10})`,
        }}
      >
        {slides.map((ima) => {
          return <img src={ima} />;
        })}
      </div>

      <div className="absolut top-0 h-full w-full justify-center justify-between items-center z-10 text-white flex px-10 text-3xl">
        <button onClick={prevSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((ima, i) => {
          return (
            <div
              onClick={() => setCuerrent(i)}
              key={"circle"+i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
