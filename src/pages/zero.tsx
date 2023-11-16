import React, { useEffect } from "react";
import Image from "next/image";

interface ZeroProps {
  date: string;
  city: string;
  type: string;
  degree: number;
}

const Zero: React.FC<ZeroProps> = ({ date, city, type, degree }) => {
  useEffect(() => {
    const audio = new Audio("assets/sound/thunder.mp3");

    const handleAudioEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    const canAutoplay =
      typeof audio.play === "function" && audio.autoplay === true;

    const startAudio = () => {
      audio.play();
    };

    audio.addEventListener("ended", handleAudioEnded);

    if (canAutoplay) {
      startAudio();
    } else {
      const handleFirstInteraction = () => {
        startAudio();
        window.removeEventListener("click", handleFirstInteraction);
      };

      window.addEventListener("click", handleFirstInteraction);
    }

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="flex items-center w-full overflow-hidden">
      <div className="flex  flex-col items-center mt-10">
        <div className="flex items-center gap-4  ">
          <Image
            src="/assets/svg/Location.svg"
            alt="Location Icon"
            width={20}
            height={30}
          />
          <p className="text-white font-inter text-2xl font-medium mb-2">
            {city}
          </p>
        </div>

        <p className="text-white font-inter text-4xl font-medium">{type}</p>
        <p className="  text-white font-inter mt-16 text-7xl font-medium">{`${degree}°C`}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center  ">
        <Image
          src="/assets/svg/cloudy.svg"
          alt="Weather Icon"
          width={120}
          height={120}
          className="md:ml-20  mb-12"
        />
        <p className="text-white font-inter text-xl md:text-3xl font-medium ml-10">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Zero;
