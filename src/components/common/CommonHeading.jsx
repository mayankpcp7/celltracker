import React from "react";

export const BlueHeading = ({ headingText, boldText }) => {
  return (
    <h2 className="text-[28px] sm:text-5xl text-darkBlue leading-full text-center font-light font-mukta ">
      {headingText} <span className="font-extrabold">{boldText}</span>
    </h2>
  );
};

export const WhiteHeading = ({ whiteHeadingText, whiteBoldText }) => {
  return (
    <h2 className="text-[28px] sm:text-5xl text-white leading-full text-center font-light font-mukta ">
      {whiteHeadingText} <span className="font-extrabold">{whiteBoldText}</span>
    </h2>
  );
};
