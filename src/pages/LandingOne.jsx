import React from "react";
import Banner from "../components/banner/Banner";
import FirstSection from "../components/firstSection/FirstSection";
import Slider from "../components/Slider";
import SecSection from "../components/SecSection";
import ThirdSection from "../components/ThirdSection";
import { FourSection } from "../components/FourSection";
import FifthSection from "../components/FifthSection";
import SixSection from "../components/SixSection";

export const LandingOne = () => {
  return (
    <div className="overflow-hidden relative">
      <Banner />
      <FirstSection />
      <SecSection />
      <ThirdSection/>
      <FourSection/>
      <FifthSection/>
      <SixSection/>
    </div>
  );
};
