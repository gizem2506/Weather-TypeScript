import React from "react";
import Image from "next/image";

const Two: React.FC = () => {
  const activityImages = [
    "/assets/svg/Photo1.svg",
    "/assets/svg/Photo2.svg",
    "/assets/svg/Photo3.svg",
    "/assets/svg/Photo4.svg",
  ];

  const renderActivityImages = () => {
    return activityImages.map((image, index) => (
      <div key={index} className="relative mt-2 mb-2 ">
        <Image
          width={160}
          height={126}
          alt={`${index + 1}`}
          src={image}
          className="rounded-xl"
        />
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-multiply rounded-xl"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#D9D9D9",
          }}
        ></div>
      </div>
    ));
  };

  return (
    <div className="bg-opacity-25 bg-[#C4C3C166] rounded-3xl pb-2 p-4">
      <div className="flex   ">
        <Image
          className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3"
          alt="Heart"
          src="/assets/svg/Heart.svg"
          width={24}
          height={24}
        />
        <div className="text-white font-medium text-base md:text-lg">
          Activities in your area
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center  justify-between  ">
        {renderActivityImages()}
      </div>
    </div>
  );
};

export default Two;
