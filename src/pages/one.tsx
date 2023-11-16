import React from "react";

const One: React.FC = () => {
  return (
    <div className="bg-opacity-40 bg-[#C4C3C166] rounded-3xl p-6 relative ">
      <div className="flex md:flex-col items-center space-y-3 text-center">
        <img
          className="h-32 w-32 object-center"
          alt="Logo"
          src="assets/svg/header-logo.svg"
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
          <img
            className="h-10 w-10"
            alt="explore"
            src="assets/svg/Explore.svg"
            style={{ color: "#C4C3C1" }}
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
