import React from "react";
import imagen from "../assets/image-equilibrium.jpg";
import iconoETH from "../assets/icon-ethereum.svg";
import iconoTiempo from "../assets/icon-clock.svg";
import iconoPersona from "../assets/image-avatar.png";
import iconoVista from "../assets/icon-view.svg";

const Card = () => {
  return (
    <>
      <div className="mt-12 sm:mt-0 card p-7 rounded-lg sm:w-96 w-80">
        <div className="mb-5 relative ">
          <div className="absolute transition-all duration-500 imagenvista h-full w-full flex justify-center items-center rounded-lg cursor-pointer">
            <img
              src={iconoVista}
              alt="icono"
              className="opacity-0 transition-all duration-500"
            />
          </div>
          <img
            src={imagen}
            alt="imagen"
            className="block rounded-lg cursor-pointer transition-all duration-500 imagennft"
          />
        </div>
        <div className="mb-5">
          <h1 className="font-semibold mb-5 cursor-pointer transition-all duration-500 titulo-descripcion">
            Equilibrium #3429
          </h1>
          <p className="font-light texto-descripcion">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className="flex justify-between items-center info pb-5 mb-5">
          <div className="flex items-center space-x-2 moneda">
            <img src={iconoETH} alt="ethereum" />
            <p>0.041 ETH</p>
          </div>
          <div className="flex items-center space-x-2 tiempo">
            <img src={iconoTiempo} alt="tiempo" />
            <p className="font-light">3 days left</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 ">
          <img
            src={iconoPersona}
            alt="persona"
            className="w-10 border-white rounded-full border-2"
          />
          <p className="font-light info-creador">
            Creation of{" "}
            <span className="font-normal text-white cursor-pointer transition-all duration-500">
              Jules Wyvern
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
