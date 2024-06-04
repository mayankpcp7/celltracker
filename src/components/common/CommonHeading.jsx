import React from "react";

export const BlueHeading = ({ headingText, boldText ,SubPera }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[28px] sm:text-5xl text-darkBlue leading-full text-center font-light font-mukta ">
        {headingText} <span className="font-extrabold">{boldText}</span>
      </h2>
      <p className="mt-2 text-base leading-md max-w-[472px] text-center font-normal font-mukta text-lightBlack">
        {SubPera}
      </p>
    </div>
  );
};

export const WhiteHeading = ({ whiteHeadingText, whiteBoldText }) => {
  return (
    <h2 className="text-[28px] sm:text-5xl text-white leading-full text-center font-light font-mukta ">
      {whiteHeadingText} <span className="font-extrabold">{whiteBoldText}</span>
    </h2>
  );
};
