import React from "react";
import { BlueHeading } from "./common/CommonHeading";
import mobiles from "../assets/images/home/webp/mobile-works.webp";
import { WorkLocation, AccurateLocation } from "./common/Icons";
import leftvector from "../assets/images/home/webp/right-vec.webp";
import rightvector from "../assets/images/home/webp/footer-vec.webp";

const HowItWorks = () => {
  return (
    <>
      <div className="max-w-[1188px] mx-auto px-6 py-[68px] sm:pt-14 sm:pb-24 md:py-20 lg:pt-[104px] relative ">
        <img
          className="absolute start-0 top-[12%] sm:start-[-11%] sm:top-[21%] max-w-[41px] sm:max-w-[106px]"
          src={leftvector}
          alt="vector"
        />
        <img
          className="absolute end-0 sm:end-[-11%] bottom-[0%] max-w-[41px] sm:max-w-[106px]"
          src={rightvector}
          alt="vector"
        />
        <BlueHeading headingText="How it" boldText="Works" />
        <div className="max-w-[277px] mx-auto sm:max-w-full">
          <BlueHeading SubPera="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />{" "}
        </div>
        <div className="flex flex-row gap-8 lg:gap-0 items-center justify-center flex-wrap mt-8">
          <div className="lg:w-6/12 w-full sm:w-11/12">
            <img
              className="max-w-[441px] sm:max-w-[580px] -mt-4 xs:mt-0 -ms-12 xs:mx-auto xl:max-w-[729px]  lg:-translate-x-8 xl:-translate-x-28"
              src={mobiles}
              alt="mobiles"
            />
          </div>
          <div className="w-full lg:w-6/12 sm:w-9/12 lg:ps-6 lg:pt-12">
            <div className="flex flex-col items-center gap-[18px]">
              <div className="flex flex-col min-h-[303px] xs:min-h-[273px] max-w-[536px] rounded-xl shadow-join-card border hover:border-darkBlue transition-all duration-300 bg-white px-5 pt-5 pb-3 border-borderGrey">
                <WorkLocation />
                <h3 className="pt-2 sm:pt-4 text-darkBlue leading-sm text-xl sm:text-2xl font-mukta font-normal">
                  Locate the people important to you, from any web device
                </h3>
                <p className="text-sm sm:text-base min-w-[289px] pt-[6px] text-lightBlack font-mukta font-normal leading-md">
                  Family will always be number one and keeping them safe has
                  never been more important. Locateaphone.com allows you to keep
                  track of up to 5 mobile phones, providing you with accurate
                  location information from any web enabled device. Keep them
                  safe without being invasive.
                </p>
              </div>
              <div className="flex flex-col min-h-[303px] xs:min-h-[273px] max-w-[536px] rounded-xl shadow-join-card border hover:border-darkBlue transition-all duration-300 bg-white px-5 pt-5 pb-3 border-borderGrey">
                <AccurateLocation />
                <h3 className="pt-2 sm:pt-4 text-darkBlue leading-sm text-xl sm:text-2xl font-mukta font-normal">
                  Accurate location info for any phone on any network.
                </h3>
                <p className="text-sm sm:text-base max-w-[275px] pt-[6px] xs:max-w-full text-lightBlack font-mukta font-normal leading-md">
                  Instantly track the location of a mobile phone at any time. No
                  apps, no downloads, Locateaphone.com works with any Android or
                  iPhone device. Locateaphone.com uses a range of different
                  tools to find the location of a phone. Our unique phone
                  location walkthrough process will determine the best tools to
                  use for each situation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col  gap-4 lg:mt-24 mt-10  sm:justify-center sm:items-center">
          <button class="relative w-full mx-auto sm:mx-0 max-w-[536px] sm:w-[195px] flex px-7 py-[14px] lg:py-4 h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
            <span class="relative font-mukta rounded-[4px] whitespace-nowrap capitalize text-base text-white font-semibold">
              Create your Account
            </span>
          </button>
          <button class="relative w-full mx-auto sm:mx-0 max-w-[536px] sm:w-[195px] border border-darkBlue flex px-7 py-[14px] lg:py-4 h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-white text-darkBlue transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-lightskyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
            <span class="relative font-mukta rounded-[4px] capitalize text-base whitespace-nowrap text-darkBlue font-semibold">
              Got more Question?
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
