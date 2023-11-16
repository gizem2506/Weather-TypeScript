import React from "react";

const Two: React.FC = () => {
  const activityImages = [
    "/assets/svg/Photo1.svg",
    "/assets/svg/Photo2.svg",
    "/assets/svg/Photo3.svg",
    "/assets/svg/Photo4.svg",
  ];

  const renderActivityImages = () => {
    return activityImages.map((image, index) => (
      <img
        key={index}
        className=" w-[230px] h-[166px] mt-2 mb-2"
        alt={` ${index + 1}`}
        src={image}
      />
    ));
  };

  return (
    <div className="bg-opacity-25 bg-[#C4C3C166] rounded-3xl pb-2 p-4">
      <div className="flex   ">
        <img
          className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3"
          alt="Heart"
          src="/assets/svg/Heart.svg"
        />
        <div className="text-white font-medium text-base md:text-lg">
          Activities in your area
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center  justify-between ">
        {renderActivityImages()}
      </div>
    </div>
  );
};

export default Two;
