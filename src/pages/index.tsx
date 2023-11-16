import React from "react";
import data from "../mock/ReactProjectData.json";
import Zero from "./zero";
import Five from "./five";
import One from "./one";
import Two from "./two";
import There from "./there";
import Four from "./four";
import Image from "next/image";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const backgroundImageUrl = "assets/img/background.jpeg";

  return (
    <div
      className="flex flex-col w-full bg-cover  overflow-hidden md:fixed "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {" "}
      <div className="flex flex-col md:flex-row">
        <div className=" p-4 mr-12 order-2 md:order-1">
          <Zero
            date={data.date}
            city={data.city}
            type={data.type}
            degree={data.degree}
          />
        </div>
        <div className="flex flex-col justify-center items-center order-1 md:order-2">
          <div className="flex-1 mt-6 ">
            <Image
              src="/assets/img/background.png"
              alt="Logo"
              width={252}
              height={60}
            />
          </div>
          <div className="flex-10 bg-c4c3c166 rounded-3xl mr-20 mt-2 order-3 md:order-3">
            <Five forecast={data.forecast} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  p-5">
        <div className="mb-6">
          <One />
        </div>
        <div className="flex flex-5 flex-col mr-6 ml-6">
          <div className="flex-1 mb-4">
            <Two />
          </div>
          <div className="md:flex-1 rounded-3xl flex flex-col mt-15 mb-6">
            <There weeklyWeather={data.weeklyWeather} />
          </div>
        </div>
        <div>
          <Four airCondition={data.airConditions} />
        </div>
      </div>
    </div>
  );
};

export default App;
