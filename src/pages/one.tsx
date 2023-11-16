import React from "react";
import Image from "next/image";

const One: React.FC = () => {
  return (
    <div className="bg-opacity-40 bg-[#C4C3C166] rounded-3xl p-6 relative ">
      <div className="flex md:flex-col items-center space-y-3 text-center">
        <Image
          src="/assets/svg/header-logo.svg"
          alt="Logo"
          width={100}
          height={72}
          className=" object-center"
        />
        <div className="flex flex-col items-center">
          <img
            className="h-20 w-20"
            alt="weather"
            src="assets/svg/weather.svg"
          />
          <p className="text-gray-300 text-xs font-semibold ml-2">weather</p>
        </div>
        <div className="flex  flex-col items-center">
          <Image
            src="/assets/svg/weather.svg"
            alt="weather"
            width={60}
            height={60}
          />

          <p className="text-gray-300 text-xs ml-2">explore</p>
        </div>
        <div className="flex  flex-col items-center">
          <img
            className="h-10 w-10"
            alt="cities"
            src="assets/svg/Location.svg"
            style={{ color: "#C4C3C1" }}
          />
          <p className="text-gray-300 text-xs ml-2">cities</p>
        </div>
        <div className="flex  flex-col items-center">
          <img
            className="h-10 w-10"
            alt="settings"
            src="assets/svg/Settings-alt.svg"
            style={{ color: "#C4C3C1" }}
          />
          <p className="text-gray-300 text-xs ml-2">settings</p>
        </div>
      </div>
    </div>
  );
};

export default One;
