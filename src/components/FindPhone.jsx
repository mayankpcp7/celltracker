import React from "react";
import mobile from "../assets/images/home/webp/find-phone.webp";
import { WhiteHeading } from "./common/CommonHeading";
import rightvec from "../assets/images/home/webp/right-vec.webp";
const FindPhone = () => {
  return (
    <>
      <div className="max-w-[1164px] px-3 mx-auto pt-[248px] relative">
        <img className="absolute start-[-12%] max-w-[106px] bottom-[30%]" src={rightvec} alt="vec" />
        <div className="rounded-[12px]">
          <div className="flex md:flex-row flex-col px-4 bg-blue-gradient bg-start sm:bg-center bg-cover bg-no-repeat  items-center py-12 sm:py-[60px]  lg:py-[98px] rounded-[12px]">
            <img
              className="min-w-[370px] max-w-[400px] min-h-[354px] sm:max-w-[400px] lg:max-w-[580px] xl:max-w-[606px] -mt-[56%] sm:-mt-[24%] md:-mb-[20%] w-full"
              src={mobile}
              alt="mobile"
            />
            <div className="flex flex-col lg:-ms-7 md:items-center">
              <WhiteHeading
                whiteHeadingText="Find your"
                whiteBoldText="phone"
              />
              <p className="text-center sm:text-[15px] text-sm lg:text-base font-normal text-white max-w-[250px] sm:max-w-[402px] pt-2 font-mukta leading-md">
                Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper
                nisi sit elit rhoncus vestibulum fames libero id.
              </p>
              <button className="bg-white sm:max-w-full max-w-[266px] mt-7 lg:mt-8 font-semibold rounded-[4px] text-darkBlue py-3 lg:py-4 px-5 lg:px-7">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPhone;
