import React, { useState } from "react";
import {
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";

const Slider = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((ima, i) => {
          return <img src={ima} alt={`Slide ${i}`} key={i} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center text-white flex px-15 text-[45px]">
        <button onClick={prevSlide}>
          <AiOutlineLeft />
        </button>
        <button onClick={nextSlide}>
          < AiOutlineRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((ima, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
