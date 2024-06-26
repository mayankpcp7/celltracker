import React, { useState } from "react";
import { BlueHeading } from "../common/CommonHeading";
import toplayer from "../../assets/images/home/webp/create-account-layer.webp";
import location from "../../assets/images/home/svg/location-icon.svg";
import confidential from "../../assets/images/home/svg/confidential-icon.svg";
import track from "../../assets/images/home/svg/track-icon.svg";
import protect from "../../assets/images/home/svg/protect-icon.svg";
import gauranty from "../../assets/images/home/svg/gururanty-icon.svg";
import visa from "../../assets/images/home/webp/visa.webp";
import mastercard from "../../assets/images/home/webp/master-card.webp";
import homeicon from "../../assets/images/home/svg/home-icon.svg";
import emailicon from "../../assets/images/home/svg/mail.svg";
import validcardicon from "../../assets/images/home/svg/valid-card.svg";
import calendericon from "../../assets/images/home/svg/calender.svg";
import smlayer from "../../assets/images/home/webp/create-account-layer.webp";
import rightvec from "../../assets/images/home/webp/right-vec.webp";
import leftvec from "../../assets/images/home/webp/footer-vec.webp";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation and submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      <img
        className="max-w-[41px] sm:max-w-[106px] pointer-events-none end-0 -z-0 bottom-[-6%] md:bottom-[13%] absolute"
        src={leftvec}
        alt="vector"
      />
      <img
        className="max-w-[41px] sm:max-w-[106px] pointer-events-none -z-0 top-5 start-0 md:top-[15%] absolute"
        src={rightvec}
        alt="vector"
      />
      <img
        className="z-10 sm:hidden relative w-full -mt-[5%]"
        src={smlayer}
        alt="layer"
      />
      <img
        className=" relative hidden min-[1930px]:max-h-[400px] min-[1930px]:-my-[1.5%] sm:block z-10 w-full -mt-16 sm:-mt-20 lg:-mt-28"
        src={toplayer}
        alt="layer"
      />
      <div
        className="max-w-[1188px] pt-[54px] sm:pt-[30px] lg:pt-[98px] px-6 mx-auto relative"
        id="create"
      >
        <BlueHeading headingText="Create your" boldText="Account" />
        <div className="mt-[-6px]">
          <BlueHeading
            className="text-sm sm:text-base"
            SubPera="Join now and protect your family's phones"
          />
        </div>
        <div className="flex md:flex-row flex-col relative z-20 mt-8 sm:mt-[52px] lg:mt-[72px] items-start md:items-center">
          <div className="flex flex-col">
            <h3 className="text-darkBlue font-mukta text-2xl sm:text-[32px] leading-sm font-light">
              Get a <span className="font-extrabold"> 24 hour </span> trial!
            </h3>
            <div className="flex flex-col">
              <div className="flex mt-6 sm:pt-[2px] items-center">
                <img
                  className="max-w-[38px] lg:max-w-[48px]"
                  src={location}
                  alt="location"
                />
                <p className="ps-2 text-sm sm:text-base leading-md font-mukta text-lightBlack font-normal">
                  Unlimited location searches
                </p>
              </div>
              <div className="flex mt-[18px] sm:mt-3 items-center">
                <img
                  className="max-w-[38px] lg:max-w-[48px]"
                  src={track}
                  alt="track"
                />
                <p className="ps-2 text-sm sm:text-base leading-md font-mukta text-lightBlack font-normal">
                  Track up to 5 phones
                </p>
              </div>
              <div className="flex mt-[18px] sm:mt-3 items-center">
                <img
                  className="max-w-[38px] lg:max-w-[48px]"
                  src={protect}
                  alt="protect"
                />
                <p className="ps-2 text-sm sm:text-base leading-md font-mukta text-lightBlack font-normal">
                  Protect your family
                </p>
              </div>
              <div className="flex mt-[18px] sm:mt-3 items-center">
                <img
                  className="max-w-[38px] lg:max-w-[48px]"
                  src={gauranty}
                  alt="gauranty"
                />
                <p className="ps-2 text-sm sm:text-base leading-md font-mukta text-lightBlack font-normal">
                  14 day money back guarantee
                </p>
              </div>
              <div className="flex mt-[18px] sm:mt-3 items-center">
                <img
                  className="max-w-[38px] lg:max-w-[48px]"
                  src={confidential}
                  alt="confidential"
                />
                <p className="ps-2 text-sm sm:text-base leading-md font-mukta text-lightBlack font-normal">
                  Private & confidential
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-viewall p-6 md:p-[18px] md:mt-12 mt-8 lg:mt-[58px]">
              <p className="text-center font-mukta font-normal min-w-[280px] md:max-w-[389px] text-sm sm:text-base leading-md text-lightBlack ">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.
                <a href="/landing" className="text-skyBlue cursor-pointer">
                  {" "}
                  View full terms.{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:ms-4 lg:ms-9 mt-10 md:mt-0 rounded-b-xl debit_card max-w-[570px] xl:max-w-[679px] w-full">
            <div className="flex items-center justify-between bg-darkBlue px-2 sm:px-4 md:px-5 py-[24.5px] sm:py-[14px] rounded-t-xl w-full">
              <div className="flex items-center">
                <span className="flex rounded-[50%] bg-skyBlue p-[3px] sm:p-1">
                  <span className="bg-white flex sm:w-[22px] w-[14px] h-[14px] sm:h-[22px] rounded-[50%]"></span>
                </span>
                <p className="text-white font-mukta font-normal text-2xl lg:text-[32px] ps-[6px] sm:ps-3 leading-sm">
                  Debit/Credit Card
                </p>
              </div>
              <div className="flex gap-4 lg:gap-8 items-center">
                <img
                  className="max-w-[27.77px] sm:max-w-[50px] lg:max-w-[73px]"
                  src={visa}
                  alt="visa"
                />
                <img
                  className="max-w-[25px] sm:max-w-[35px] lg:max-w-[57px]"
                  src={mastercard}
                  alt="mastercard"
                />
              </div>
            </div>
            <div className="flex flex-col sm:px-4 px-2 md:px-6 sm:pt-7 sm:pb-9 py-10">
              <p className="text-darkBlue font-normal font-mukta leading-md text-sm sm:text-base">
                Your Address
              </p>
              <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <div className="flex h-[47px] lg:h-[52px] mt-[6px] sm:mt-2 border border-borderGrey rounded-[4px]">
                  <div className="bg-iconGrey px-3 rounded-s-[3px] py-[14px]">
                    <img src={homeicon} alt="homeicon" />
                  </div>
                  <input
                    className="bg-bgGrey w-full h-[45px] lg:h-[50px] text-darkBlue font-mukta font-normal px-5 sm:px-[14px] visa-input outline-0"
                    type="text"
                    name="address"
                    placeholder="Address Line 1"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <p className="mt-1 text-sm sm:text-base font-mukta font-normal text-errorGrey leading-md capitalize">
                  Or enter address manually
                </p>
                <p className="font-normal text-darkBlue mt-[18px] sm:mt-5 font-mukta leading-md text-sm sm:text-base">
                  Email Address
                </p>
                <div className="flex h-[47px] lg:h-[52px] mt-[6px] sm:mt-2 border border-borderGrey rounded-[4px]">
                  <div className="bg-iconGrey px-3 rounded-s-[3px] py-[14px]">
                    <img src={emailicon} alt="emailicon" />
                  </div>
                  <input
                    className="bg-bgGrey w-full h-[45px] lg:h-[50px] text-darkBlue font-mukta font-normal px-5 sm:px-[14px] visa-input outline-0"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <p className="font-normal text-darkBlue mt-[18px] sm:mt-5 font-mukta leading-md text-sm sm:text-base">
                  Card Number (Visa or Mastercard)
                </p>
                <div className="flex h-[47px] lg:h-[52px] mt-[6px] sm:mt-2 border border-borderGrey rounded-[4px]">
                  <div className="bg-iconGrey px-3 rounded-s-[3px] py-[14px]">
                    <img src={validcardicon} alt="validcardicon" />
                  </div>
                  <input
                    className="bg-bgGrey w-full h-[45px] lg:h-[50px] text-darkBlue font-mukta font-normal px-5 sm:px-[14px] visa-input outline-0"
                    type="number"
                    name="cardNumber"
                    placeholder="Valid Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-4 items-center w-full">
                  <div className="flex flex-col w-full">
                    <p className="font-normal text-darkBlue mt-[18px] sm:mt-5 font-mukta leading-md text-sm sm:text-base">
                      Expiry Date
                    </p>
                    <div className="flex h-[47px] lg:h-[52px] mt-[6px] sm:mt-2 border border-borderGrey rounded-[4px]">
                      <div className="bg-iconGrey px-3 rounded-s-[3px] py-[14px]">
                        <img src={calendericon} alt="calendericon" />
                      </div>
                      <input
                        className="bg-bgGrey w-full h-[45px] lg:h-[50px] text-darkBlue font-mukta font-normal px-5 sm:px-[14px] visa-input outline-0"
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="font-normal text-darkBlue mt-[18px] sm:mt-5 font-mukta leading-md text-sm sm:text-base">
                      Card Security Code
                    </p>
                    <div className="flex h-[47px] lg:h-[52px] mt-[6px] sm:mt-2 border border-borderGrey rounded-[4px]">
                      <div className="bg-iconGrey px-3 rounded-s-[3px] py-[14px]">
                        <img src={calendericon} alt="calendericon" />
                      </div>
                      <input
                        className="bg-bgGrey w-full h-[45px] lg:h-[50px] text-darkBlue font-mukta font-normal px-5 sm:px-[14px] visa-input outline-0"
                        type="password"
                        name="securityCode"
                        placeholder="E.x @ 0123"
                        value={formData.securityCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="bg-darkBlue hover:bg-white hover:text-darkBlue border border-darkBlue duration-300 transition-all text-white font-mukta font-normal leading-md h-[51px] sm:h-[59px] flex items-center justify-center py-4 rounded-[4px] mt-9 sm:mt-12"
                  type="submit"
                >
                  Buy Now (50C)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
