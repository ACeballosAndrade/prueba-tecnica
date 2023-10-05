import React from "react";
import ima25 from "../../assets/Recurso 25.jpg";
import ima26 from "../../assets/Recurso 26.jpg";
import ima24 from "../../assets/Recurso 24.jpg";
import ima29 from "../../assets/Recurso 29.jpg";
import Slider from "../Slider";

const TresSection = () => {
  let slides = [ima24, ima25, ima26];

  return (
    <div className="px-[18vw] mt-[6vw]">
      <div className="flex gap-5">
        <div className="basis-1/2">
          <Slider slides={slides} />
        </div>
        <div className="basis-1/2">
          <a href="#" className="rounded-lg border-2 bg-blue-700  text-white px-[4vw] py-1 ml-[-2vw] mt-[2vw] top-[214vw] left-[60vw] absolute z-10">Comprar Ahora</a>
          <img src={ima29} alt="Bolso gris" className="relative" />
        </div>
      </div>
      <div className="px-[5vw] mt-[3vw]">
        <p className="text-[26px] text-black mt-[-1vw] text-center">
          El satín está de moda con su elegancia y sofisticación
          <strong>atemporal</strong>, esta vez le damos una interpretación
          fresca con una textura de cebra y diferentes siluetas.
        </p>
      </div>
    </div>
  );
};

export default TresSection;
