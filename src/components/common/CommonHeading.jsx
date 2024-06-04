import React from "react";

const CommonHeading = ({ headingText, boldText,SubPara }) => {
  return (
    <div className="flex flex-col justify-center items-center">
    <h2 className="text-[28px] sm:text-5xl text-darkBlue leading-full text-center font-light font-mukta ">
      {headingText} <span className="font-extrabold">{boldText}</span>
    </h2>
    <p className="mt-2 text-base leading-md max-w-[472px] text-center font-normal font-mukta text-lightBlack">
    {SubPara}
  </p>
  </div>
  );
};

export default CommonHeading;
