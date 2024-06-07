import React from "react";
import { JoinCheck } from "./common/Icons";
import joinlayer from "../assets/images/home/webp/join-layer.webp";
import smlayer from "../assets/images/home/webp/join-sm-layer.webp";
const Join = () => {
  return (
    <>
      <img className="w-full sm:hidden -mb-[10%]" src={smlayer} alt="layer" />
      <img
        className="w-full -mb-22 md:-mb-20  sm:block hidden"
        src={joinlayer}
        alt="joinlayer"
      />
      <div className="bg-join-gradient bg-cover bg-center bg-no-repeat pt-24 sm:pt-44 pb-20 sm:pb-36">
        <div className="max-w-[1188px] mx-auto px-6">
          <h2 className="text-[28px] sm:text-4xl md:text-[40px] max-w-[300px] sm:max-w-[640px] mx-auto lg:text-5xl text-white leading-full text-center font-light font-mukta ">
            Join <span className="font-extrabold"> 70,000+ companies </span>
            doing time tracking the easy way
          </h2>
          <div className="flex md:flex-row flex-col-reverse gap-10 md:gap-0 items-center md:items-end justify-center pt-16 md:pt-0 md:mt-[109px]">
            <div className="flex flex-col border border-borderGrey md:-me-4 sm:items-start shadow-join-card  w-full max-w-[527px] md:max-w-[467px] rounded-tl-xl bg-white rounded-br-xl px-6 py-[75px] sm:p-6 lg:p-[34px]">
              <h2 className="text-darkBlue font-mukta text-2xl sm:text-3xxl font-normal leading-sm">
                Cell Tracker
              </h2>
              <p className="pt-[18px] text-lightBlack font-mukta text-base leading-md font-normal">
                Ideal for freelancers and solopreneurs
              </p>
              <div className="flex items-center pt-3">
                <JoinCheck />
                <p className="text-lightBlack font-mukta font-normal leading-md text-sm sm:text-base ps-[6px]">
                  1 seat
                </p>
              </div>
              <div className="flex items-center pt-[6px]">
                <JoinCheck />
                <p className="text-lightBlack font-mukta font-normal leading-md text-sm sm:text-base ps-[6px]">
                  2 projects
                </p>
              </div>
              <p className="pt-11 leading-md text-darkBlue font-mukta font-normal text-4xl lg:text-4xxl">
                $0
                <span className="text-lightBlack text-base ps-1">
                  free forever
                </span>
              </p>
              <button class="relative flex px-7 py-[14px] lg:py-4 sm:max-w-[204px] w-full h-[51px] sm:h-[59px] mt-7 rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                <span class="relative font-mukta rounded-[4px] capitalize text-base text-white font-normal">
                  Start your free trial
                </span>
              </button>
            </div>
            <div className="flex flex-col relative border-borderGrey border sm:items-start shadow-join-card  w-full max-w-[527px] rounded-tl-xl bg-white rounded-br-xl px-6 py-[30px] sm:p-6 lg:p-[34px]">
              <p className="absolute start-[50%] -translate-x-[50%] xl:translate-x-[47%] top-[-7%] xl:w-[204px] xl:h-[68px] h-[57px] flex items-center justify-center text-white bg-darkBlue rounded-[4px] ps-6 pe-[21px] !xl:px-[35px] py-3 !xl:py-[14px] font-mukta font-normal text-[20px] xl:text-2xl">
                Most Popular
              </p>
              <h2 className="text-darkBlue mt-7 font-mukta text-2xl sm:text-3xxl font-normal leading-sm">
                Cell Tracker
                <span className="text-skyBlue font-extrabold"> Pro</span>
              </h2>
              <p className="pt-[18px] text-lightBlack font-mukta text-sm sm:text-base leading-md font-normal">
                Perfect for teams, startups, and growing businesses.
              </p>
              <div className="flex items-center pt-3">
                <JoinCheck />
                <p className="text-lightBlack font-mukta font-normal leading-md sm:text-base ps-[6px]">
                  Unlimited seats
                </p>
              </div>
              <div className="flex items-center pt-[6px]">
                <JoinCheck />
                <p className="text-lightBlack font-mukta font-normal leading-md text-sm sm:text-base ps-[6px]">
                  Unlimited projects
                </p>
              </div>
              <p className="pt-11 sm:leading-md sm:block hidden text-darkBlue font-mukta font-normal text-4xl lg:text-4xxl">
                $10.80
                <span className="text-lightBlack text-sm sm:text-base ps-1">
                  per seat/month (billed annually)
                </span>
              </p>
              <p className="pt-11 sm:leading-md sm:hidden text-darkBlue font-mukta font-normal text-4xl lg:text-4xxl">
                $10.80
                <span className="text-lightBlack text-sm sm:text-base ps-1">
                  per seat/month
                </span>
              </p>
              <p className="text-lightBlack sm:hidden text-sm sm:text-base ps-1">
                (billed annually)
              </p>

              <div className="flex gap-2 lg:gap-0 lg:flex-row flex-col items-center mt-7">
                <button class="relative w-full flex px-7 py-[14px] lg:py-4 h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                  <span class="relative font-mukta rounded-[4px] capitalize text-base text-white font-normal">
                    30-Day Free Trial
                  </span>
                </button>
                <p className="text-lightBlack whitespace-nowrap text-base text-center sm:text-start lg:ps-4 font-mukta font-normal">
                  No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
