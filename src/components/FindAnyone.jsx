import React from 'react'
import { BlueHeading } from './common/CommonHeading'
import { DailingMobileIcon, InfiniteIcon, LocationIcon, NotificationIcon, PhoneSettingIcon, RealLoactionIcon } from './common/Icons'
import IphoneMockup from '../assets/images/landing/webp/iPhone-x-mockup.png'

const FindAnyone = () => {
  return (
    <div className='mt-[132px]'>
    <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
   <div className="px-3">
   <BlueHeading headingText="Find Anyone Anywhere" boldText=" for Under $1" />
   </div>
          <BlueHeading SubPera="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />
    <div className="flex flex-wrap items-center justify-center mt-[31px] sm:mt-14">
      <div className="w-full sm:w-1/2 order-1 mt-[47px] sm:mt-0 sm:order-0  justify-center flex flex-col items-center lg:w-1/3">
          <div className="max-w-[376px] h-[152px] md:h-[156px] mb-[18px] sm:mb-6 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <PhoneSettingIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px]'>Cell Tracker runs on all phones and configurations, of all brands</h4>
          </div>
          <div className="max-w-[376px] h-[152px] md:h-[156px] mb-[18px] sm:mb-6 lg:mb-0 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] sm:pe-[18px]">
           <span> <NotificationIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px]'>Customize the message you want the recipient to recieve. Or use the one suggested by default</h4>
          </div>
      </div>
      <div className="w-full sm:w-1/2 order-0 sm:order-1 lg:w-1/3">
        <div className="flex justify-center ml-5">
        <img src={IphoneMockup} alt="loction mobile" className='w-[213px] h-[319px] sm:w-[256px] sm:h-[386px]' />
    
        </div>
        </div>
      <div className="w-full sm:w-1/2 order-2 sm:order-3 justify-center flex flex-col items-center lg:w-1/3">
          <div className="max-w-[376px] h-[152px] md:h-[156px] mb-[18px] sm:mb-6 border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <RealLoactionIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px]'>Grab real-time location as precise coordinates</h4>
          </div>
          <div className="max-w-[376px] h-[152px] md:h-[156px] border-[1px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <DailingMobileIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px]'>Any mobile number in the world can be tracked</h4>
          </div>
      </div>
    <div className="w-full sm:w-1/2 order-3 sm:order-4 justify-center flex flex-col items-center lg:w-1/3">
    <div className="max-w-[376px] h-[152px] md:h-[156px] sm:ml-4 lg:ml-0 border-[1px] mt-[21px] flex items-center border-offGrey rounded-[4px] py-10 md:py-[42.5px] pe-[18px]">
           <span> <InfiniteIcon/></span>
            <h4 className='font-normal text-lg md:text-xl font-mukta ps-[14px]'>Send unlimited geo-location requests</h4>
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FindAnyone