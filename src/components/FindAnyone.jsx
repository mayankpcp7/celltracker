import React from 'react'
import { BlueHeading } from './common/CommonHeading'
import { DailingMobileIcon, InfiniteIcon, NotificationIcon, PhoneSettingIcon, RealLoactionIcon } from './common/Icons'
import IphoneMockup from '../assets/images/landing/webp/iPhone-x-mockup.png'
import Rightvector from "../assets/images/home/webp/footer-vec.webp";

const FindAnyone = () => {
  return (
    <div className='mt-[97px] xl:mt-[132px]'>
    <div className="max-w-[1164px] mx-auto px-6 sm:px-3 relative">
    <img
        className="max-w-[41px] sm:max-w-[106px] hidden md:block top-[2%] rotate-[180deg] left-0 xl:left-[-11.8%]  absolute "
        src={Rightvector}
        alt="vector"
      />
       <img
        className="max-w-[41px] sm:max-w-[106px] top-[33%] md:bottom-[-4%] right-0  xl:right-[-11.8%]  absolute "
        src={Rightvector}
        alt="vector"
      />
   <div className="px-3">
   <BlueHeading headingText="Find Anyone Anywhere" boldText=" for Under $1" />
   </div>
   <div className="px-6">
   <BlueHeading  SubPera="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />
   </div>
    <div className="flex flex-wrap items-center justify-center mt-[31px] sm:mt-14">
      <div className="w-full sm:w-1/2 order-1 mt-[47px] sm:mt-0 sm:order-0  justify-center flex flex-col items-center lg:w-1/3">
          <div className="max-w-[376px] bg-white z-10 gradient-card group hover:bg-linear-blue h-[152px] md:h-[156px] mb-[18px] sm:mb-6 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <PhoneSettingIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px] transition-all duration-200 ease-in-out group-hover:text-white'>Cell Tracker runs on all phones and configurations, of all brands</h4>
          </div>
          <div className="max-w-[376px] bg-white z-10 gradient-card group hover:bg-linear-blue h-[152px] md:h-[156px] mb-[18px] sm:mb-6 lg:mb-0 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] sm:pe-[18px]">
           <span> <NotificationIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[8px] transition-all duration-200 ease-in-out group-hover:text-white'>Customize the message you want the recipient to recieve. Or use the one suggested by default</h4>
          </div>
      </div>
      <div className="w-full sm:w-1/2 order-0 sm:order-1 lg:w-1/3">
        <div className="flex justify-center ml-5">
        <img src={IphoneMockup} alt="loction mobile" className='w-[213px] h-[319px] sm:w-[256px] sm:h-[386px]' />
    
        </div>
        </div>
      <div className="w-full sm:w-1/2 order-2 sm:order-3 justify-center flex flex-col items-center lg:w-1/3">
          <div className="max-w-[376px] bg-white z-10 gradient-card group hover:bg-linear-blue h-[152px] md:h-[156px] mb-[18px] sm:mb-6 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <RealLoactionIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px] transition-all duration-200 ease-in-out group-hover:text-white'>Grab real-time location as precise coordinates</h4>
          </div>
          <div className="max-w-[376px] bg-white z-10 gradient-card group hover:bg-linear-blue h-[152px] md:h-[156px] border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <DailingMobileIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px] transition-all duration-200 ease-in-out group-hover:text-white'>Any mobile number in the world can be tracked</h4>
          </div>
      </div>
    <div className="w-full sm:w-1/2 order-3 sm:order-4 justify-center flex flex-col items-center lg:w-1/3">
    <div className="max-w-[376px] bg-white z-10 gradient-card group hover:bg-linear-blue h-[152px] md:h-[156px] sm:ml-4 lg:ml-0 border-[1px] mt-[21px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <InfiniteIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px] transition-all duration-200 ease-in-out group-hover:text-white'>Send unlimited geo-location requests</h4>
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FindAnyone