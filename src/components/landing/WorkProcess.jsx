import React from "react";
import { BlueHeading } from "../common/CommonHeading";
import {
  LocationIcon,
  MessageIcon,
  PhoneBookIcon,
  ProcessArrow,
} from "../common/Icons";
import Rightvector from "../../assets/images/home/webp/footer-vec.webp";

const WorkProcess = () => {
  return (
    <>
      <div className="max-w-[1164px] mx-auto px-6 sm:px-3 relative">
        <img
          className="max-w-[41px] sm:max-w-[106px]  md:hidden top-[-2%] rotate-[180deg] left-0 2xl:left-[-11.8%]  absolute "
          src={Rightvector}
          alt="vector"
        />
        <div className="mt-[94px] xl:mt-[131px] mb-[34px] md:mb-14">
          <BlueHeading headingText="How it" boldText="works" />
          <div className="px-6">
            <BlueHeading SubPera="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />
          </div>
        </div>
        <div className="flex flex-wrap justify-center pb-[94px] sm:pb-[45px]  px-9 xl:px-0">
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center lg:justify-start">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[27px] items-center">
              <span>
                <PhoneBookIcon />
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Provide target phone number
              </h3>
              <p className="font-normal mt-[6px]  transition-all px-3 lg:px-2 text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Enter the mobile number you want to locate in the provided
                field.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[20%]  lg:w-[18%] flex justify-center relative">
            <span className="md:absolute rotate-[90deg] md:rotate-0 m-12 mt-6 sm:mt-16 md:mt-0 top-[10%] sm:top-[15%]">
              <ProcessArrow />
            </span>
            <span className="absolute rotate-[90deg] hidden md:block xl:hidden bottom-20">
              <ProcessArrow />
            </span>
          </div>
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[22%] flex justify-center">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[27px] items-center">
              <span>
                <MessageIcon />
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Customize the message
              </h3>
              <p className="font-normal mt-[6px] xl:px-4  transition-all text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Create a message that will make them approve access to their
                location. You can always choose the one by default. Specify
                sender name.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[8%]  lg:w-[18%] flex md:hidden xl:flex justify-center relative">
            <span className="md:absolute rotate-[90deg] md:rotate-0 mb-12  mt-14 md:mt-0  top-[10%] sm:top-[15%]">
              <ProcessArrow />
            </span>
          </div>
          <div className="w-full md:w-[40%] lg:w-[28%] xl:w-[20%] flex justify-center lg:justify-end">
            <div className="flex flex-col max-w-[267px] min-h-[233px] md:min-h-[298px] pt-[27px] items-center">
              <span>
                <LocationIcon />
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Receive their precise location
              </h3>
              <p className="font-normal mt-[6px] transition-all text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Get notification as soon as GEOfinder locates the pesron on a
                map. View their accurate position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
