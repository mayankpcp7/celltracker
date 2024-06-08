import React from "react";
import logo from "../../assets/images/home/webp/footer-logo.webp";
import linkedin from "../../assets/images/home/svg/linked-in.svg";
import instagram from "../../assets/images/home/svg/instagram.svg";
import facebook from "../../assets/images/home/svg/facebook.svg";
import twitter from "../../assets/images/home/svg/twitter.svg";
import vector from "../../assets/images/home/webp/footer-vec.webp";
import { useLocation } from "react-router-dom";
const Footer = ({ firstlink, secondlink, thirdlink }) => {
  const getCurrentYear = () => new Date().getFullYear();
  const location = useLocation();
  return (
    <div className="max-w-[1140px] relative mx-auto px-3 md:mt-20 mt-[58px] sm:mt-[64px] lg:mt-[102px]">
      {location.pathname === "/landing" && (
        <img
          className="max-w-[41px] sm:max-w-[106px] bottom-16 md:top-[-120%] right-0 md:rotate-[180deg] md:left-0 xl:left-[-13%] absolute "
          src={vector}
          alt="vector"
        />
      )}
      {location.pathname === "/home" && (
        <img
          className="max-w-[41px] sm:max-w-[106px] end-[-1%] bottom-[25%] absolute md:end-[-13%] md:bottom-[10%]"
          src={vector}
          alt="vector"
        />
      )}
      <div className="flex justify-between md:flex-row flex-col gap-8 items-center">
        <a href="#">
          <img
            className="max-w-[211px]  lg:max-w-[259px] w-full"
            src={logo}
            alt="logo"
          />
        </a>
        <div>
          <ul className="flex ps-0 items-centr gap-6">
            <li>
              <a
                href="#"
                className="text-grey font-mukta text-lightBlack font-normal hover:text-darkBlue duration-300 text-base"
              >
                {firstlink}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-grey font-mukta text-lightBlack font-normal hover:text-darkBlue duration-300 text-base"
              >
                {secondlink}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-grey font-mukta text-lightBlack font-normal hover:text-darkBlue duration-300 text-base"
              >
                {thirdlink}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center mt-1 sm:mt-0 gap-4 md:gap-[18px]">
          <a href="https://www.linkedin.com/feed/">
            <img
              className="lg:max-w-[40px] max-w-[28px] sm:max-w-[30px] hover:scale-110 duration-300"
              src={linkedin}
              alt="linked in"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              className="lg:max-w-[40px] max-w-[28px] sm:max-w-[30px] hover:scale-110 duration-300"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              className="lg:max-w-[40px] max-w-[28px] sm:max-w-[30px] hover:scale-110 duration-300"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="https://x.com/?lang=en">
            <img
              className="lg:max-w-[40px] max-w-[25px] sm:max-w-[30px] hover:scale-110 duration-300"
              src={twitter}
              alt="twitter"
            />
          </a>
        </div>
      </div>
      <span className="w-full h-[0.5px] flex bg-darkBlue mt-[58px] md:mt-12"></span>
      <p className="text-center pb-5 pt-[18px] sm:py-4 leading-md md:text-base text-xs sm:text-sm text-lightBlack font-normal font-mukta">
        © {getCurrentYear()} Cell Tracker. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
