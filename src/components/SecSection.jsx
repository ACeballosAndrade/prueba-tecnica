import React from 'react'
import imDesk from '../assets/I4.jpg';
import imMobile from '../assets/mobile/mI4.jpg'
import logo from "../assets/Grupo-22.png";

const SecSection = () => {
  return (
    <>
      <picture className="relative xs:brightness-50">
        <source media="(max-width: 375px)" srcSet={imMobile} />
        <source media="(min-width: 376px)" srcSet={imDesk} />
        <img src={imMobile} alt="Moda Studio F" />
      </picture>
      <img src={logo} alt="Logo" className="hidden xs:block absolute top-[112vw] left-[16vw] w-[13vw]" />
    </>
  )
}

export default SecSection