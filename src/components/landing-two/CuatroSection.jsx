import React from "react";
import ima31 from "../../assets/Recurso 31.jpg";
import ima32 from "../../assets/Recurso 32.jpg";

const CuatroSection = () => {
  return (
    <div className="flex pl-[22vw] pr-[10vw] bg-slate-200 mt-[5vw]">
      <div className="mt-[-2.5vw] basis-1/2">
        <img src={ima31} alt="" />
      </div>
      <div className="flex flex-col items-center p-[5vw] basis-1/2">
        <p className="text-[22px] text-black py-[2vw] text-center">
          Anímate a llevarlo en blusas o sácale el máximo partido al color de
          temporada, <strong>azul cobalto</strong>, con una falda de corte
          sirena, un crop top, plataformas y un bolso inesperado.
        </p>
        <img src={ima32} alt="" />
        <a href="#" className="rounded-2xl border-2 bg-blue-700  text-white px-[4vw] py-1 ml-[-2vw] mt-[2vw]">Comprar Ahora</a>
      </div>
    </div>
  );
};

export default CuatroSection;
