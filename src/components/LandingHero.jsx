import React from 'react'
import NavLogo from "../assets/landing/svg/nav-logo.svg"
import DoubleMobile from "../assets/landing/webp/double-mobile-location-tarcking.webp"

const LandingHero = () => {
  return (
    <>
       <div className="bg-landing-hero min-h-screen bg-no-repeat bg-cover">
        <div className="max-w-[1164px] mx-auto px-3">
            {/* ----------nav bar----------- */}
            <nav className='h-[100px] flex justify-between items-center'>
               <a href=""> <img src={NavLogo} alt="logo" className='w-[259px] h-[36px]' /></a>

               <ul className='gap-[35px] flex items-center'>
                <li><a href="" className='font-normal text-base font-mukta text-white'>Home</a></li>
                <li><a href="" className='font-normal text-base font-mukta text-white'>How It Works</a></li>
                <li><a href="" className='font-normal text-base font-mukta text-white'>Features</a></li>
               </ul>

               <button className='font-semibold text-base font-mukta text-darkBlue px-[28.1px] py-[17.5px] rounded-[4px] bg-white'>Log In</button>
            </nav>
            
            {/* --------Hero section----------------- */}
            <div className="flex flex-wrap mt-[83px]">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <img src={DoubleMobile} alt="mobiles" className='h-[592px] w-[620px] xl:translate-x-[45px]' />
                </div>
       
            </div>
        </div>
        </div> 
    </>
  )
}

export default LandingHero