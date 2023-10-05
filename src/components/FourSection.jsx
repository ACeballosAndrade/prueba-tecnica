import React from 'react'
import imaMob9 from "../assets/mobile/mI9.jpg";
import imaMob10 from "../assets/mobile/mI9.jpg";
import Slider from "./Slider";
import imaDsk10 from "../assets/I10.jpg";

export const FourSection = () => {

  let slides = [
    imaMob9, imaMob10
  ]

  return (
    <div className=" xs:px-[2vw]">
      <div className="xs:hidden">
        <Slider slides={slides} />
      </div>
      <div className="hidden xs:flex xs:flex-row">
        <img src={imaDsk10} alt="Tres ángulos" />
      </div>
    </div>
  )
}
