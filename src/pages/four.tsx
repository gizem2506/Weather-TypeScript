import React from "react";
import Image from "next/image";

interface FourProps {
  airCondition: string;
}

const Four: React.FC<FourProps> = ({ airCondition }) => {
  // Check if airCondition is defined before splitting
  const [realFeel, rainChance, windSpeed, uvIndex] = airCondition
    ? airCondition.split("::")
    : ["", "", "", ""];

  const backgroundImageUrl = "/assets/svg/fourbg.svg";

  return (
    <div
      className="bg-opacity-25 bg-[#C4C3C166] object-cover object-center rounded-3xl p-4 md:p-6"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/svg/Clock.svg"
            alt="Clock"
            width={90}
            height={90}
            className="w-16 h-16"
          />
          <p className="text-white font-inter text-2xl md:text-3xl font-medium">
            {realFeel} PM GMT
          </p>
        </div>
        <p className="text-white flex flex-col justify-center font-inter text-xl md:text-2xl font-medium mt-6 mb-4">
          AIR CONDITIONS
        </p>
      </div>
      <div className="flex mb-12 md:flex-row gap-12 mt-8">
        {renderWeatherItem("/assets/svg/Real.svg", "Real Feel", `${realFeel}°`)}
        {renderWeatherItem(
          "/assets/svg/Wind.svg",
          "Wind",
          `${windSpeed} km/hr`
        )}
      </div>
      <div className="flex flex-row mb-8 gap-12">
        {renderWeatherItem(
          "/assets/svg/Rain.svg",
          "Chance of Rain",
          `${rainChance}%`
        )}
        {renderWeatherItem("/assets/svg/UV.svg", "UV Index", `${uvIndex}`)}
      </div>
    </div>
  );
};

const renderWeatherItem = (icon: string, title: string, value: string) => (
  <div className="flex justify-between items-center gap-6 mb-1">
    <Image
      src={icon}
      alt={title}
      width={90}
      height={90}
      className="w-16 h-16 mb-6"
    />
    <div className="text-white font-inter">
      <p className="text-md">{title}</p>
      <p className="text-xl md:text-xl">{value}</p>
    </div>
  </div>
);

export default Four;
