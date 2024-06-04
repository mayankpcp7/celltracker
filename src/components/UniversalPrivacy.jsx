import React from "react";
import { BlueHeading } from "./common/CommonHeading";
import { universalData } from "./common/Helper";

const UniversalPrivacy = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] sm:text-5xl text-darkBlue leading-full text-center font-light font-mukta">
         <BlueHeading />
        </h2>
        <p className="mt-2 text-base leading-md max-w-[472px] text-center font-normal font-mukta text-lightBlack">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] sm:gap-6 mt-[34px] sm:mt-[56px]">
        {universalData.map((card) => (
          <div
            key={card.id}
            className={`flex justify-center ${card.justifyClass}`}
          >
            <div className="border-[1px] pt-6 sm:pt-7 universal-card transition-all duration-300 ease-in-out group hover:bg-linear-blue rounded-[4px] w-full sm:max-w-[267px] min-h-[187px] sm:min-h-[261px] border-offGrey">
              <span className="w-[61px] h-[57px]">{card.icon}</span>
              <div className="ps-3 pe-[14px] mt-[10px] mb-6 sm:my-[14px]">
                <h3 className="text-xl sm:text-2xl font-normal font-mukta transition-all duration-200 ease-in-out group-hover:text-white leading-sm">
                  {card.title}
                </h3>
                <p className="font-normal mt-[6px] max-w-[375px] transition-all duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversalPrivacy;
