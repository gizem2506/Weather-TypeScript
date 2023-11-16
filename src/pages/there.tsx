import React, { useState } from "react";
import Image from "next/image";

interface ThereProps {
  weeklyWeather: {
    current?: any;
    previous?: any;
    next?: any;
  };
}

const There: React.FC<ThereProps> = ({ weeklyWeather }) => {
  const [currentData, setCurrentData] = useState(weeklyWeather?.current || {});
  const [currentName, setCurrentName] = useState("current");

  const imageUrl = (imageName: string) => {
    switch (imageName) {
      case "sunny cloudy":
        return "/assets/svg/Image1.svg";
      case "sunny":
        return "/assets/svg/Image2.svg";
      case "rainy":
        return "/assets/svg/Image3.svg";
      case "sunny rainy":
        return "/assets/svg/Image4.svg";
      case "thunder":
        return "/assets/svg/Image5.svg";
      default:
        return null;
    }
  };
  const handleNavigation = (direction: string) => {
    if (!weeklyWeather || !weeklyWeather[direction]) return;

    if (currentName === direction) return;

    if (currentName === "current") {
      setCurrentData(weeklyWeather[direction]);
      setCurrentName(direction);
    } else {
      setCurrentData(weeklyWeather.current);
      setCurrentName("current");
    }
  };

  return (
    <div className=" bg-opacity-40 bg-[#C4C3C166] flex items-center justify-center p-5 rounded-3xl">
      <div className="flex  flex-col md:flex-row items-center md:space-x-8">
        <div>
          <Image
            alt="Left Icon"
            className="cursor-pointer"
            src="/assets/svg/Left.svg"
            onClick={() => handleNavigation("previous")}
            width={16}
            height={16}
          />
        </div>
        {Object.keys(currentData).map((day) => (
          <div
            key={day}
            className={`flex flex-col items-center   justify-between ${
              currentData[day].type === "sunny" ? "weather-background" : ""
            }`}
          >
            <div className="flex md:flex-col space-x-8 md:space-y-10 space-y-4  md:space-x-0 flex-row items-center">
              <p className="text-white text-xs">{day.toUpperCase()}</p>
              <Image
                className="h-16 w-10 "
                alt="There"
                src={imageUrl(currentData[day].type)}
                width={40}
                height={64}
              />
              <p className="text-white text-lg">{`${currentData[day].degree}°`}</p>
            </div>
          </div>
        ))}
        <div>
          <Image
            className="cursor-pointer"
            alt="Right Icon"
            src="/assets/svg/Right.svg"
            onClick={() => handleNavigation("next")}
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  );
};

export default There;
