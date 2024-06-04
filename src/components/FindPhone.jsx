import React from "react";
import mobile from "../assets/images/home/webp/find-phone.webp";
import { WhiteHeading } from "./common/CommonHeading";
const FindPhone = () => {
  return (
    <>
      <div className="max-w-[1164px] px-3 bg-skyGradiant bg-full mx-auto pt-[248px] rounded-[12px]">
        <div className="flex px-4 items-center bg-blue-gradient bg-center bg-no-repeat  py-[98px] relative rounded-[12px]">
          <img
            className="max-w-[590px] xl:max-w-[606px] mt-[-24%] -mb-[20%] w-full"
            src={mobile}
            alt="mobile"
          />
          <div className="flex flex-col -ms-7 items-center">
            <WhiteHeading whiteHeadingText="Find your" whiteBoldText="phone" />
            <p className="text-center text-white max-w-[402px] pt-2 font-mukta font-normal leading-md">
              Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
              sit elit rhoncus vestibulum fames libero id.
            </p>
            <button className="bg-white mt-8 font-semibold rounded-[4px] text-darkBlue py-4 px-7">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPhone;
