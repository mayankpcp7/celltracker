import React from 'react'
import CommonHeading from './common/CommonHeading'
import { CompatibleIcon, LocationIcon, MessageIcon, ProcessArrow } from './common/Icons'

const HowItWork = () => {
    return (
        <>
            <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
                
                <div className="mt-[98px] mb-14">
                    <CommonHeading headingText="How it" boldText="works" />
                    <CommonHeading SubPara="Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id." />

                </div>
               <div className="flex flex-wrap mb-[77px] ">
                 
               <div className="w-[28%] xl:w-[22%] flex justify-start">
                <div className="flex flex-col max-w-[267px] min-h-[298px] pt-[27px] items-center">
                <span><CompatibleIcon /></span>
                <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Provide target phone number
                </h3>
                <p className="font-normal mt-[6px]  transition-all text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Enter the mobile number you want to locate in the provided field.
                </p>
                </div>
                </div>
                <div className="w-[8%]  xl:w-[18%] flex justify-center relative">
                <span className='absolute top-[15%]'><ProcessArrow/></span>
                </div>
                <div className="w-[28%] xl:w-[22%] flex justify-center">
                <div className="flex flex-col max-w-[267px] min-h-[298px] pt-[27px] items-center">
                <span><MessageIcon /></span>
                <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Customize the message
                </h3>
                <p className="font-normal mt-[6px] px-4 transition-all text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Create a message that will make them approve access to their location. You can always choose the one by default. Specify sender name.    </p>
                </div>
                </div>
                <div className="w-[8%]  xl:w-[18%] flex justify-center relative">
                <span className='absolute top-[15%]'><ProcessArrow/></span>
                </div>
                <div className="w-[28%] xl:w-[20%] flex justify-end">
                <div className="flex flex-col max-w-[267px] min-h-[298px] pt-[27px] items-center">
                <span><LocationIcon /></span>
                <h3 className="text-xl sm:text-2xl font-normal text-center font-mukta transition-all mt-[14px] duration-200 ease-in-out group-hover:text-white leading-sm">
                Receive their precise location
                </h3>
                <p className="font-normal mt-[6px] transition-all text-center duration-200 ease-in-out group-hover:text-lightskyBlue text-sm sm:text-base leading-md font-mukta text-lightBlack">
                Get notification as soon as GEOfinder locates the pesron on a map. View their accurate position.   </p>
                </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default HowItWork