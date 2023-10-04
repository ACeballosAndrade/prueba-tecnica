import React from "react";
import mobile from "../assets/mobile/mI2.jpg";
import mobile2 from "../assets/mobile/mI3.jpg";
import desktop from "../assets/I2.jpg";
import desktop2 from "../assets/I3.jpg";
import "./firstSection.css";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div>
        <picture className="an-img-s">
          <source media="(max-width: 375px)" srcSet={mobile2} />
          <source media="(min-width: 376px)" srcSet={desktop2} />
          <img src={mobile2} alt="Banner" />
        </picture>
      </div>
      <div>
        <picture className="an-img-p">
          <source media="(max-width: 375px)" srcSet={mobile} />
          <source media="(min-width: 376px)" srcSet={desktop} />
          <img src={mobile} alt="Banner" />
        </picture>
      </div>
      <div className="texts">
        <h1 className="an-title-p">PRINT ÉTNICO</h1>
        <span className="an-sub-title">Elegancia Ecléctica</span>
        <a href="#" className="an-button">VER COMPLEMENTOS</a>
      </div>
    </div>
  );
};

export default FirstSection;
