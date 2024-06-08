import React, { useState, useEffect } from "react";
import mobile from "../../assets/images/home/webp/hero-phone.png";
import {
  Headphone,
  IndiaFlagIcon,
  LocationVector,
  Logo,
  Logo2,
  QuickIcon,
} from "../common/Icons";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Hero = () => {
  const [navBar, setNavBar] = useState(false);

  const showNav = () => {
    setNavBar(!navBar);
  };

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [navBar]);
  // country code
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("91");

  const handleOnChange = (value, country) => {
    setPhoneNumber(value);
    setCountryCode(country.dialCode);
  };
  return (
    <div className="bg-hero relative z-[1] flex flex-col bg-no-repeat bg-cover bg-center lg:bg-full min-h-[810px]">
      {/* navbar */}
      <nav>
        <div className="max-w-[1164px] px-6 sm:px-3 mx-auto">
          <div className="flex justify-between pt-[32px] md:pt-0 md:my-[10px] items-center">
            <a href="/" className="relative z-[50]" aria-label="logo">
              {navBar ? (
                <Logo2 className="Z-[50]" />
              ) : (
                <Logo className="z-[50]" />
              )}
            </a>
            <ul
              className={`flex items-center duration-300 max-md:fixed justify-end w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[40] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                navBar && "!left-0"
              }`}
            >
              <li className="md:pe-6">
                <Link
                  to="/landing"
                  className="text-black md:gap-[5px] items-center flex md:me-6 whitespace-nowrap md:text-white font-mukta text-base font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  <QuickIcon />
                  Quick Help
                </Link>
              </li>
              <li className="md:pe-[14px]">
                <Link
                  to="/"
                  className="text-black pt-5 md:pt-0 flex items-center md:text-white whitespace-nowrap font-mukta text-base font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Log in
                </Link>
              </li>
              <button className="relative  flex px-7 py-[14px] nav_button mt-[115px] md:mt-0 lg:py-4 sm:max-w-[150px] lg:max-w-[182px] w-full h-[51px] lg:h-[59px] rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue md:bg-white text-dark-Blue transition-all before:absolute before:h-0 before:w-0 b before:rounded-[4px] before:bg-darkBlue before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                <span className="relative create_button_text font-mukta whitespace-nowrap rounded-[4px] capitalize text-base text-white sm:text-darkBlue font-semibold">
                  Create an Account
                </span>
              </button>
            </ul>
            <button onClick={showNav} className="md:hidden relative z-[50]">
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
      <div className="h-full mt-[63px]">
        <div className="max-w-[1164px] mb-0 xs:mb-12 lg:mb-16 w-full px-6 mx-auto">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="lg:w-1/2 w-full px-3 lg:mt-[71px]">
              <h1 className="text-white text-start text-[32px] sm:text-5xl lg:text-[52px] xl:text-[64px] max-w-[326px] xs:max-w-[520px]  leading-full font-extrabold font-mukta max-lg:text-center max-lg:mx-auto md:max-w-[520px]">
                Find the location
                <span className="font-light"> of any phone by its number</span>
              </h1>
              <p className="max-w-[520px] mx-auto font-normal max-lg:text-center font-mukta text-base sm:text-base leading-md text-white mt-3 sm:mt-2 lg:pe-[8px]">
                Add phones to your account & track them when neededAdd phones to
                your account & track them when needed
              </p>
              <div className="bg-white rounded shadow-inputNumber max-xl:mx-auto flex  h-[51px] md:h-[55px] items-center justify-between ps-2.5 max-w-[448px] mt-6">
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  onChange={(phone, country) => handleOnChange(phone, country)}
                  inputClass="outline-none text-sm leading-[23px] font-mukta md:leading-[26px] md:text-baseoutline-none w-[35%] sm:w-1/2"
                  containerClass="phone-input-container"
                  buttonClass="country-code-dropdown "
                />
                <button className="hover:border-darkBlue border locate_button border-darkBlue group  hover:text-darkBlue hover:bg-white  bg-darkBlue -me-[1px] rounded font-semibold text-sm md:text-base group text-white py-[14.5px] px-[22.2px] flex items-center gap-1  duration-300 ">
                  <LocationVector />
                  Locate
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-3 -ms-5 xs:ms-0">
              <div className="relative mt-[30px] -ms-5 sm:-ms-[20%] lg:-ms-[18%] xl:-ms-[18%] lg:mt-0 mx-auto">
                <img
                  src={mobile}
                  className="lg:min-w-[581px] lg:min-h[604px] lg:max-w-[581px] lg:max-h-[604px] max-w-[339px] sm:max-w-[450px] xs:mx-auto lg:mx-0"
                  alt="phoneHeader"
                />
                <div className="absolute z-20 end-[-8%] shadow-need-shadow xs:end-10 md:end-40 lg:end-5 xl:end-[-1%] bottom-[5%] xs:bottom-[10%] sm:bottom-[25%] bg-white rounded-tl-xl w-[164px] sm:w-[280px] h-[168px] p-2 sm:p-[18px] sm:h-[197px]">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <p className="font-mukta font-bold text-xl sm:text-2xl text-skyBlue">
                        Need help?
                      </p>
                      <Headphone />
                    </div>
                    <p className="text-darkBlue font-normal font-mukta text-sm sm:text-base leading-md max-w-[198px]">
                      Get help with technical, account and billing enquiries.
                    </p>
                    <button className="relative locate_button border border-darkBlue flex px-[18px] sm:px-7 blue_button py-2 sm:py-[14px] lg:py-4 sm:max-w-full w-full h-[39px] sm:h-[59px] mt-3 sm:mt-3 rounded-[4px] items-center justify-center overflow-hidden bg-darkBlue text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-[4px] before:bg-white before:duration-300 before:ease-out hover:before:h-[60px] hover:before:w-full">
                      <span className="relative locate font-mukta rounded-[4px] capitalize text-sm sm:text-base text-white font-normal">
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
