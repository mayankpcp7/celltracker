import React, { useState } from "react";
import DoubleMobile from "../assets/images/landing/webp/double-mobile-location-tarcking.webp";
import {
  IndiaFlagIcon,
  LocationLogo,
  LocationVector,
  Logo,
  Logo2,
} from "./common/Icons";
import Rightvector from "../assets/images/home/webp/footer-vec.webp";
import { Link } from "react-router-dom";

const LandingHome = () => {
  // navbar
  const [navBar, setnavBar] = useState(false);
  function showNav() {
    setnavBar(!navBar);
  }
  if (navBar) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="bg-landing-sm-hero sm:bg-landing-hero relative z-[1] flex flex-col bg-no-repeat bg-cover bg-center lg:bg-full min-h-[812px] sm:min-h-[800px]">
      {/* navbar */}
      <nav>
        <div className="max-w-[1164px] px-6 sm:px-3 mx-auto sm:mt-[7px]">
          <div className="flex justify-between pt-[32px] lg:pt-0 pb-[10px] lg:pb-0  items-center">
            <a href="/" className="relative z-[4]" aria-label="logo">
              {navBar ? <Logo2 /> : <Logo />}
            </a>
            <ul
              className={`flex items-center gap-[20px] sm:gap-[35px] duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                navBar && "!left-0"
              }`}
            >
              <li>
                <Link
                  to="/"
                  className="text-black md:text-white font-mukta text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-black md:text-white font-mukta text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-black md:text-white font-mukta text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Features
                </Link>
              </li>

              <button class="relative md:hidden w-full sm:max-w-[98px] flex px-7 py-[14px] lg:py-4 h-[51px] sm:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                <span class="relative font-mukta rounded-[4px] capitalize text-base text-white font-normal">
                  Log in
                </span>
              </button>
            </ul>

            <button className="relative hidden md:flex px-7 py-[14px] mt-[115px] md:mt-0 lg:py-4 sm:max-w-[150px] lg:max-w-[98px] w-full h-[51px] lg:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue md:bg-white text-dark-Blue transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-lightskyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
              <span className="relative font-mukta whitespace-nowrap rounded-[4px] capitalize text-base text-white md:text-darkBlue font-semibold">
                Log in
              </span>
            </button>
            <button onClick={showNav} className="md:hidden relative z-[4]">
              {navBar ? (
                <div className="flex md:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
                  <span className="bg-black min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
                  <span className="bg-black min-w-[11px] min-h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
                </div>
              ) : (
                <div className="flex md:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] cursor-pointer relative">
                  <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50  transition-all ease-linear duration-300"></span>
                  <span className="bg-white rounded-md w-full h-[3px] relative z-50  transition-all ease-linear duration-300"></span>
                  <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50  transition-all ease-linear duration-300"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* header */}
      <div className=" h-full mt-[56px] lg:mt-[83px]">
        <div className="max-w-[1164px] w-full px-6 sm:px-3 mx-auto">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="lg:w-1/2  w-full px-3 lg:mt-[71px]">
              <h1 className=" text-white max-lg:text-center text-[32px] sm:text-5xl lg:text-[52px] xl:text-[64px] leading-[37px] sm:leading-[49px] lg:leading-[64px] font-extrabold font-mukta">
                Locate any phone,
                <span className=" font-light"> anywhere, anytime</span>
              </h1>
              <p className=" font-normal max-lg:text-center font-mukta text-sm sm:text-base leading-6 text-white mt-3 sm:mt-2 lg:pe-[8px]">
                Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat
                nunc cursus. Lacus ornare aliquet condimentum elementum
                elementum nisl nibh sed. Egestas aliquam id quam nunc.
              </p>
              <div className=" max-lg:mx-auto bg-white rounded flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
                <div className=" flex items-center gap-[7px] ">
                  <span>
                    <IndiaFlagIcon />
                  </span>
                  <select
                    className="outline-none text-sm leading-[23px] font-mukta md:leading-[26px] md:text-base"
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
                <button className=" bg-darkBlue -me-[1px] rounded font-semibold text-sm font-mukta md:text-base group text-white leading-[166%] py-[13.5px] px-[22.2px] flex items-center gap-1 hover:bg-linear-blue duration-300 ">
                  <LocationVector />
                  Locate
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-3 mt-[68px] lg:mt-0">
              <div className=" relative  max-lg:max-w-[600px] max-md:max-w-[322px] mx-auto z-[1]">
                <img
                  src={DoubleMobile}
                  className="xl:min-w-[600px]   max-md:h-[321px] w-full xl:h-[599px]"
                  alt="phoneHeader"
                />
                <div className=" absolute overflow-hidden !z-[2] bg-white -bottom-4 md:bottom-[80px] h-[165px] sm:h-[189px] right-0 xl:right-[-42px]  bg-light-sky-gradient rounded-xl shadow-[0px_9px_13.9px_0_#0000001C]">
                  <div className="relative z-[1] md:p-[16px_16px_12px_14px] p-2">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                     <button class="relative flex py-[14px] max-w-[107px] sm:max-w-[112px] w-full h-[51px] sm:h-[55px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-skyBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                  <span class="relative gap-[5px] items-center flex font-mukta rounded-[4px] capitalize text-base text-white font-normal">
                    <LocationVector />
                    Locate
                  </span>
                </button>
                      <p className="text-lg lg:text-xl z-50 font-mukta relative leading-[30px] lg:leading-[33px] font-normal text-darkBlue">
                        Geolocation found!
                      </p>
                    </div>
                    <a
                      href="tel:+44633427390"
                      className="font-semibold text-xl font-mukta text-darkBlue lg:text-2xl leading-[33px] lg:leading-[39px] mt-2"
                    >
                      +44 633 427 390
                    </a>
                    <p className=" max-md:mt-[6px] font-normal font-mukta text-sm lg:text-base max-w-[189px] md:max-w-[216px] leading-[21px] lg:leading-6 text-black">
                      3 Succession Walk, Fish Island, London E3 2RX, United
                      Kingdom
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <img
                        className="max-w-[22px] sm:max-w-[37px] rotate-[180deg] left-0 sm:left-[-4px]    absolute "
                        src={Rightvector}
                        alt="vector"
                      />
                      <p className="text-sm text-black font-mukta absolute right-4  font-light">
                        June 02,2024 17:34
                      </p>
                    </div>
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
export default LandingHome;
