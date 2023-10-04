import desktop from "../assets/I1.jpg";
import mobile from "../assets/mobile/mI1.jpg";
import title from "../assets/Grupo-11.png";
import logo from "../assets/Grupo-22.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="an-banner">
      <picture className="banner-img">
        <source media="(max-width: 375px)" srcSet={mobile} />
        <source media="(min-width: 376px)" srcSet={desktop} />
        <img src={mobile} alt="Banner" />
      </picture>
      <img src={logo} alt="Logo" className="an-logo" />
      
      <div className="banner-inside">
        <img src={title} alt="Título" />
        <p className="an-text-p">
          Con Caribbean Premium Signature presentamos una colección en la que
          más allá de tendencias se habla de un estilo atemporal, creado con
          materiales premium que elevan la sofisticación de las prendas. ​
        </p>
        <a href="#" className="an-button-banner">
          VER LA COLECCIÓN
        </a>
      </div>
      <div className="an-div-hidden">
        <hr className="an-separador" />
        <p className="text-gray-400 px-10 py-3 text-center text-sm">
          Con Caribbean Premium Signature presentamos una colección en la que
          más allá de tendencias se habla de un estilo atemporal, creado con
          materiales premium que elevan la sofisticación de las prendas. ​
        </p>
      </div>
    </div>
  );
};

export default Banner;
