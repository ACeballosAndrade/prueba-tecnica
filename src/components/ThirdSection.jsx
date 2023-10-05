import React from "react";
import imaMob5 from "../assets/mobile/mI5.jpg";
import imaMob6 from "../assets/mobile/mI6.jpg";
import imaMob7 from "../assets/mobile/mI7.jpg";
import imaMob8 from "../assets/mobile/mI8.jpg";
import Slider from "./Slider";
import imaDsk5 from "../assets/I5.jpg";
import imaDsk6 from "../assets/I6.jpg";
import imaDsk7 from "../assets/I7.jpg";
import imaDsk8 from "../assets/I8.jpg";
import imaDsk9 from "../assets/I9.jpg";

const ThirdSection = () => {
  let slides = [imaMob5, imaMob6, imaMob7, imaMob8];

  return (
    <div className="py-9 xs:px-[4vw]">
      <div className="xs:hidden">
        <Slider slides={slides} />
      </div>
      <div className="hidden xs:flex xs:flex-row">
        <div className="xs:w-1/2">
          <img src={imaDsk5} alt="Modelo Studio F" />
        </div>
        <div className="flex flex-wrap xs:w-1/2 gap-4 pl-[4vw] py-[6vw]">
          <img className="w-[20.1vw] xs:shrink-0" src={imaDsk6} alt="" />
          <img className="w-[20.1vw] xs:shrink-0" src={imaDsk7} alt="" />
          <img className="w-[20.1vw] xs:shrink-0" src={imaDsk8} alt="" />
          <img className="w-[20.1vw] xs:shrink-0" src={imaDsk9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
