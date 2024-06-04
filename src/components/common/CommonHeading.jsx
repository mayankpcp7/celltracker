import React from "react";

const CommonHeading = ({ headingText, boldText }) => {
  return (
    <h2 className="text-[28px] sm:text-5xl text-darkBlue leading-full text-center font-light font-mukta ">
      {headingText} <span className="font-extrabold">{boldText}</span>
    </h2>
  );
};

export default CommonHeading;
