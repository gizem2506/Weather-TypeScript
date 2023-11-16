import React, { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";

interface ForecastData {
  time: string;
  temperature: string;
  weatherType: string;
  windSpeed: string;
}

interface FiveProps {
  forecast: Record<string, string> | null;
}

const Five: React.FC<FiveProps> = ({ forecast }) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([
    { time: "", temperature: "", weatherType: "", windSpeed: "" },
  ]);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  useEffect(() => {
    if (forecast) {
      const manuallyAddedWindSpeeds = [
        "11.7km/h",
        "9.3km/h",
        "12km/h",
        "15km/h",
        "15km/h",
        "15km/h",
      ];

      const weatherTypes = ["one", "two", "there", "four", "five", "six"];

      const transformedData = Object.keys(forecast).map((time, index) => ({
        time: time,
        temperature: forecast[time],
        weatherType: weatherTypes[index],
        windSpeed: manuallyAddedWindSpeeds[index],
      }));

      setForecastData(transformedData);
    }
  }, [forecast]);

  const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
      case "one":
        return "assets/svg/One.svg";
      case "two":
        return "assets/svg/Two.svg";
      case "there":
        return "assets/svg/There.svg";
      case "four":
        return "assets/svg/Four.svg";
      case "five":
        return "assets/svg/There.svg";
      case "six":
        return "assets/svg/Four.svg";
      default:
        return null;
    }
  };

  const chartWidth = isMobile ? 310 : 440;
  return (
    <div className="bg-opacity-40 bg-[#C4C3C166] flex flex-col md:flex-row md:justify-center md:items-center p-10 rounded-3xl md:-mr-14">
      <LineChart width={chartWidth} height={100} data={forecastData}>
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#F0F0F0"
          dot={{ r: 1 }}
        />
        {forecastData.map((entry, index) => (
          <g
            key={index}
            transform={`translate(${index * (isMobile ? 50 : 70)}, 0)`}
          >
            <text
              y={Number(entry.temperature) - 1}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
              className="entry-text"
            >
              {entry.temperature}°
            </text>
            <image
              y={30}
              xlinkHref={getWeatherIcon(entry.weatherType)}
              height={60}
              width={20}
            />
            <text
              y={90}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
              className="entry-text"
            >
              {entry.time}
            </text>
            <text
              y={100}
              textAnchor="middle"
              fill="#F0F0F0"
              fontSize={10}
              className="entry-text"
            >
              {entry.windSpeed}
            </text>
          </g>
        ))}
      </LineChart>
    </div>
  );
};

export default Five;
