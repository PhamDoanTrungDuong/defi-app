// @ts-nocheck
import React from "react";
import terminal from "../assets/terminal.png";

const Developers: React.FC = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div className="md:flex md:flex-col md:justify-center px-4">
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>,
            the <span className="text-[#00d8ff]">quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className="flex justify-center w-[50%] py-16 md:py-0">
          <img
            src={terminal}
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
