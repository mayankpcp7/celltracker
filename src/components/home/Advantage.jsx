import React from "react";
import { BlueHeading } from "../common/CommonHeading";
import { AdvantageData } from "../common/Helper";
import rightvector from "../../assets/images/home/webp/right-vec.webp";
import leftvector from "../../assets/images/home/webp/footer-vec.webp";
import layer from "../../assets/images/home/webp/advantage-layer.webp";
import smlayer from "../../assets/images/home/webp/header-bottom-layer.webp"
const Advantage = () => {
  return (
    <div className="relative">
      <img
        className="absolute z-0 start-[-1%] top-[-4%]  animate-pulse pointer-events-none sm:max-w-[106px] max-w-[41px] sm:top-[8%]"
        src={rightvector}
        alt="vector"
      />
      <img
        className="absolute z-0 end-0 animate-pulse pointer-events-none max-w-[41px] sm:max-w-[106px] -bottom-[3%] sm:bottom-[-10%]"
        src={leftvector}
        alt="vector"
      />
      <img
        className="w-full relative z-[60] xs:hidden -mt-[18%] sm:-mt-[10%]"
        src={smlayer}
        alt="layer"
      />
      <img
        className="w-full relative z-[60] hidden xs:block min-h-[97px] -mt-[15%] sm:-my-[12.5%]  min-[1930px]:max-h-[400px] min-[1930px]:-my-[1.5%]"
        src={layer}
        alt="layer"
      />
      <div className="max-w-[1188px] mt-10 z-[70] px-6 mx-auto relative">
        <BlueHeading headingText="Advantages of" boldText="Celltracker" />
        <div className="max-w-[278px] xs:max-w-full mx-auto">
          <BlueHeading SubPera="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />
        </div>
        <div className="flex justify-center mt-10 sm:mt-12 gap-[18px] flex-wrap">
          {AdvantageData.map((advantage, index) => (
            <div
              key={index}
              className={`flex flex-col p-5 border-2 hover:border-darkBlue transition-all duration-300 sm:w-[271px] sm:h-[253px] h-[184px] border-borderGrey rounded-xl shadow-join-card ${
                index === 1 || index === 3 ? "2lg:translate-y-6" : ""
              }`}
            >
              {advantage.logo}
              <h4 className="font-mukta text-xl sm:text-2xl text-darkBlue pt-1 leading-sm font-normal sm:max-w-[231px]">
                {advantage.title}
              </h4>
              <p className="text-lightBlack font-mukta font-normal text-sm sm:text-base leading-md pt-1 sm:pt-[6px] sm:max-w-[231px]">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
        <button class="relative mx-auto border border-darkBlue locate_button w-full xs:w-[197px] mt-[42px] sm:mt-[73px] flex px-7 py-[14px] lg:py-4 h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-white before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
          <span class="relative locate font-mukta rounded-[4px] capitalize text-sm sm:text-base text-white sm:font-normal">
            Create your Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default Advantage;
