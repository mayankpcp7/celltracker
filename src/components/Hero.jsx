import React, { useState } from "react";
import mobile from "../assets/images/home/webp/hero-phone.png";
import {
  Headphone,
  IndiaFlagIcon,
  LocationVector,
  Logo,
  Logo2,
  QuickIcon,
} from "./common/Icons";
import { Link } from "react-router-dom";

const Hero = () => {
  const [navBar, setnavBar] = useState(false);
  function showNav() {
    setnavBar(!navBar);
  }
  if (navBar) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <div className="bg-hero relative z-[1] flex flex-col bg-no-repeat bg-cover bg-center lg:bg-full min-h-[810px]">
      {/* navbar */}
      <nav>
        <div className="max-w-[1164px] px-6 relative z-[100] sm:px-3 mx-auto pt-8 md:pt-[10px]">
          <div className="flex justify-between items-center">
            <a href="/" className="relative z-[4]" aria-label="logo">
              {navBar ? <Logo2 /> : <Logo />}
            </a>
            <ul
              className={`flex items-center duration-300 max-md:fixed  justify-end  w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                navBar && "!left-0"
              }`}
            >
              <li className="md:pe-6">
                <Link
                  to="/landing"
                  className="text-black md:gap-[5px] items-center flex max-md:me-6 whitespace-nowrap md:text-white font-mukta text-base font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  <QuickIcon/>
                  Quick Help
                </Link>
              </li>
              <li className="md:pe-[14px]">
                <Link
                  to="/"
                  className="text-black flex items-center md:text-white whitespace-nowrap font-mukta text-base font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Log in
                </Link>
              </li>

              <button class="relative flex px-7 py-[14px] mt-[115px] md:mt-0 lg:py-4 sm:max-w-[182px] w-full h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue md:bg-white text-dark-Blue transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                <span class="relative font-mukta whitespace-nowrap rounded-[4px] capitalize text-base text-white md:text-darkBlue font-semibold">
                  Create an Account 
                </span>
              </button>
            </ul>

            <button onClick={showNav} className="md:hidden relative z-[4]">
              {navBar ? (
                <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] sm:pe-10 h-[17px] cursor-pointer">
                  <span className="bg-black min-w-[11px] sm:min-w-10 h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                  <span className="bg-black min-w-[11px] sm:min-w-10 h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
                </div>
              ) : (
                <div className="flex md:hidden flex-col z-50 justify-between w-[24px] h-[24px] sm:w-10 sm:h-10 cursor-pointer relative">
                  <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white rounded-md w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* header */}
      <div className=" h-full mt-[66px] lg:mt-[104px]">
        <div className="max-w-[1164px] w-full px-6 sm:px-3 mx-auto">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="lg:w-1/2 w-full px-3 lg:mt-[71px]">
              <h1 className=" text-white text-[32px] sm:text-5xl lg:text-[52px] xl:text-[64px] leading-[37px] sm:leading-[49px] lg:leading-[64px] font-extrabold font-mukta text-start md:max-w-[520px]">
                Find the location
                <span className=" font-light"> of any phone by its number</span>
              </h1>
              <p className=" font-normal max-lg:text-center font-mukta text-base sm:text-base leading-6 text-white mt-3 sm:mt-2 lg:pe-[8px]">
                Add phones to your account & track them when neededAdd phones to
                your account & track them when needed
              </p>
              <div className=" max-lg:mx-auto bg-white rounded shadow-inputNumber flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
                <div className=" flex items-center gap-[7px] ">
                  <span>
                    <IndiaFlagIcon />
                  </span>
                  <select
                    className="outline-none text-sm leading-[23px] font-Mukta md:leading-[26px] md:text-base"
                    name="number"
                    id="number"
                  >
                    <option
                      value="91"
                      className="flex font-mukta items-center gap-2 "
                    >
                      +91
                    </option>
                    <option
                      value="01"
                      className="flex font-mukta items-center gap-2 "
                    >
                      +01
                    </option>
                    <option
                      value="92"
                      className="flex font-mukta items-center gap-2 "
                    >
                      +92
                    </option>
                    <option
                      value="02"
                      className="flex font-mukta items-center gap-2 "
                    >
                      +02
                    </option>
                    <option
                      value="21"
                      className="flex font-mukta items-center gap-2 "
                    >
                      +21
                    </option>
                  </select>
                </div>
                <input type="tell" className="outline-none w-[35%] sm:w-1/2" />
                <button className=" bg-darkBlue -me-[1px] rounded font-semibold text-sm font-mukta md:text-base group text-white leading-[166%] py-[13.5px] px-[22.2px] flex items-center gap-1 hover:bg-linear-blue duration-300 relative border-transparent border-2  hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue ">
                  <LocationVector />
                  Locate
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-3 -ms-5">
              <div className=" relative lg:min-w-[581px] max-w-[339px] mx-auto">
                <img src={mobile} className="" alt="phoneHeader" />
                <div className=" absolute z-20  bg-white rounded-xl w-[164px] sm:w-[280px] h-[168px] p-[18px] sm:h-[197px]">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                      <p className="font-mukta font-bold text-2xl text-skyBlue">
                        Need help?
                      </p>
                      <Headphone />
                    </div>
                    <p className="text-darkBlue font-normal font-mukta text-base max-w-[198px]">
                      Get help with technical, account and billing enquiries.
                    </p>
                    <button class="relative flex px-7 py-[14px] lg:py-4 sm:max-w-full w-full h-[51px] sm:h-[59px] mt-7 rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                      <span class="relative font-mukta rounded-[4px] capitalize text-base text-white font-normal">
                        Customer Support
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
