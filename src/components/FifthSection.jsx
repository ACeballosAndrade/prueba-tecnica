import React from "react";
import imaMob10 from "../assets/mobile/mI10.jpg";
import imaMob11 from "../assets/mobile/mI11.jpg";
import imaDsk11 from "../assets/I11.jpg";
import imaDsk12 from "../assets/I12.jpg";

const FifthSection = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imaDsk11})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="xs:flex gap-2 xs:px-[2vw] xs:h-[54.5vw]">
      <div
        className="flex flex-col items-center py-[200px] px-[15px] h-[100%] my-[30px] xs:basis-2/3"
        style={backgroundImageStyle}
      >
        <h3 className="text-white font-semibold text-[35px]">SOFISTICACIÓN</h3>
        <h4 className="text-white font-normal text-[25px]">ATEMPORAL</h4>
        <p className="text-white text-[17px] py-8 text-center xs:px-[1.5vw]">
          Presentamos un lino de calidad superior que con el manejo de manos
          artesanas expertas tiene como resultado prendas detalladamente
          cuidadas en su fabricación, además al ser una línea especial, será de
          edición limitada para las mujeres más sofisticadas. Cada prenda de la
          línea costera cuenta con sutiles detalles que aportan un máximo de
          lujo.
        </p>
        <a
          className="rounded-lg border-2 border-white text-white px-[4vw] py-1 ml-[-2vw] mt-[2vw]"
          href="#"
        >
          COMPRAR AHORA
        </a>
      </div>
      <div className="xs:basis-1/2 xs:mt-[2vw] xs:ml-[2vw] xs:pb-[15vw]">
        <picture>
          <source media="(max-width: 375px)" srcSet={imaMob11} />
          <source media="(min-width: 376px)" srcSet={imaDsk12} />
          <img src={imaMob11} alt="Banner" />
        </picture>
      </div>
    </div>
  );
};

export default FifthSection;
