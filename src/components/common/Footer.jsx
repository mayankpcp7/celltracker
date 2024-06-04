import React from "react";
import logo from "../../assets/images/home/webp/footer-logo.webp";
import linkedin from "../../assets/images/home/svg/linked-in.svg";
import instagram from "../../assets/images/home/svg/instagram.svg";
import facebook from "../../assets/images/home/svg/facebook.svg";
import twitter from "../../assets/images/home/svg/twitter.svg";
import vector from "../../assets/images/home/webp/footer-vec.webp";
const Footer = () => {
  return (
    <div className="max-w-[1140px] relative mx-auto px-3">
      <img className="max-w-[140px] absolute end-[-12%] bottom-[5%]" src={vector} alt="vector" />
      <div className="flex justify-between items-center">
        <a href="#">
          <img
            className="max-w-[200px] lg:max-w-[259px] w-full"
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
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-grey font-mukta text-lightBlack font-normal hover:text-darkBlue duration-300 text-base"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-grey font-mukta text-lightBlack font-normal hover:text-darkBlue duration-300 text-base"
              >
                Found Phone
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[18px]">
          <a href="https://www.linkedin.com/feed/">
            <img
              className="lg:max-w-[40px] max-w-[35px] hover:scale-110 duration-300"
              src={linkedin}
              alt="linked in"
            />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <img
              className="lg:max-w-[40px] max-w-[35px] hover:scale-110 duration-300"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <img
              className="lg:max-w-[40px] max-w-[35px] hover:scale-110 duration-300"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <img
              className="lg:max-w-[40px] max-w-[35px] hover:scale-110 duration-300"
              src={twitter}
              alt="twitter"
            />
          </a>
        </div>
      </div>
      <span className="w-full h-[1px] flex bg-darkBlue mt-12"></span>
      <p className="text-center py-4 leading-md text-lightBlack font-normal font-mukta">
        © 2024 Cell Tracker. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
