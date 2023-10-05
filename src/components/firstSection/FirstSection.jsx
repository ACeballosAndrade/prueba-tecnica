import React from "react";
import mobile from "../../assets/mobile/mI2.jpg";
import mobile2 from "../../assets/mobile/mI3.jpg";
import desktop from "../../assets/I2.jpg";
import desktop2 from "../../assets/I3.jpg";

const FirstSection = () => {
  return (
    <div className="xs:flex my-[4vw] relative">       
      <div className=" xs:relative left-[29vw] basis-1/3">
        <picture className="">
          <source media="(max-width: 375px)" srcSet={mobile} />
          <source media="(min-width: 376px)" srcSet={desktop} />
          <img src={mobile} alt="Banner" />
        </picture>
      </div>
      <div className="flex xs:relative right-[24vw] top-[4vw] basis-1/4 p-2">
        <picture className="m-auto my-7">
          <source media="(max-width: 375px)" srcSet={mobile2} />
          <source media="(min-width: 376px)" srcSet={desktop2} />
          <img src={mobile2} alt="Banner" />
        </picture>
      </div>
      <div className="flex flex-col items-center justify-center my-4 xs:basis-1/3">
        <h1 className="text-center text-[80px] font-semibold text-neutral-400 leading-[5rem] xs:text-left xs:ml-[7vw]">PRINT ÉTNICO</h1>
        <span className="text-[30px] text-neutral-400 my-1 xs:text-left">Elegancia ecléctica</span>
        <a href="#" className="hidden xs:block rounded-lg border-2 border-neutral-400 text-neutral-400 px-[2vw] py-1 ml-[-2vw] mt-[2vw]">VER COMPLEMENTOS</a>
      </div>
    </div>
  );
};

export default FirstSection;
