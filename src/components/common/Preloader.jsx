import React from "react";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("hidden");
    document.body.style.overflow = "unset";
  }, 3000);
  return (
    <>
      <div
        id="none"
        className="backdrop-blur-lg h-full w-full fixed z-50 top-0 start-0 flex items-center justify-center h-ful"
      >
        <div class="container flex items-center justify-center h-full flex-col">
          <div class="wrapper scale-150">
            <div class="loader h-[25px] w-1 absolute ">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white ]"></div>
            </div>
            <div class="loader h-[25px] w-1 absolute">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white  "></div>
            </div>
            <div class="loader h-[25px] w-1 absolute">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white ] "></div>
            </div>
            <div class="loader h-[25px] w-1 absolute">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white "></div>
            </div>
            <div class="loader h-[25px] w-1 absolute">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white ]"></div>
            </div>
            <div class="loader h-[25px] w-1 absolute">
              <div class="dot relative top-[30px] rounded-[50%] h-[7px] w-[7px] bg-white "></div>
            </div>
          </div>
          <h1 class="text-white text-center mt-20 text-3xl font-gilroyNormal">
            Please wait
          </h1>
        </div>
      </div>
    </>
  );
};

export default Preloader;
