import React from "react";
import imaMob13 from "../assets/mobile/mI13.jpg";
import imaMob12 from "../assets/mobile/mI12.jpg";
import imaDsk13 from "../assets/I13.jpg";
import imaDsk14 from "../assets/I14.jpg";

const SixSection = () => {
  return (
    <div className="xs:mt-[4vw]">
      <div className="my-10 xs:flex xs:my-0 xs:px-[3vw]">
        <div className="flex flex-col items-center xs:p-[3vw] xs:pb-[10vw] ">
          <picture>
            <source media="(max-width: 375px)" srcSet={imaMob13} />
            <source media="(min-width: 376px)" srcSet={imaDsk14} />
            <img src={imaMob13} alt="Banner" />
          </picture>
          <h3 className="text-neutral-400 font-semibold text-[35px] mt-7 xs:hidden">
            INSPIRACIÓN
          </h3>
          <h4 className="text-neutral-400 font-normal text-[36px] mt-[-17px] xs:hidden">
            ÉTNICA
          </h4>
          <h3 className="hidden xs:block xs:text-neutral-400 xs:font-normal xs:text-[30px] xs:mt-[1vw]">
            <strong>INSPIRACIÓN</strong> ÉTNICA
          </h3>
          <p className="text-neutral-400 text-[17px] py-8 px-7 text-center xs:px-[1.5vw]">
            Los estampados étnicos inspirados en la estética de los años 70 le
            brindan a cada prenda una elegancia eléctrica.
            <br />
            Los tonos cafés y neutros, presente en la mayoría de las prendas,
            otorgan una sofisticación única.
          </p>
          <a
            className="hidden xs:rounded-lg border-2 border-neutral-400 text-neutral-400 px-[4vw] py-1 ml-[-2vw] xs:block"
            href="#"
          >
            COMPRAR AHORA
          </a>
        </div>
        <div className="mt-2">
          <picture>
            <source media="(max-width: 375px)" srcSet={imaMob12} />
            <source media="(min-width: 376px)" srcSet={imaDsk13} />
            <img src={imaMob12} alt="Banner" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
