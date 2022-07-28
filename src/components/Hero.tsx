//@ts-nocheck
import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="h-full w-full object-cover absolute z-[-1]"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="text-white w-full h-[90%] flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl">Decentralized</h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl">
          <span className="text-[#00d8ff]">Trading</span> Protocol
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl py-4">
          Guaranteed liquidty trading for milions of users and top Ethereum
          applications
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div className="text-white text-center text-2xl md:text-3xl">
        <p>Total Volume Secured: $69,104,312,659.23+</p>
      </div>
    </div>
  );
};

export default Hero;
