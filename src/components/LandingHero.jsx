import React from 'react'
import NavLogo from "../assets/images/landing/svg/nav-logo.svg"
import DoubleMobile from "../assets/images/landing/webp/double-mobile-location-tarcking.webp"

const LandingHero = () => {
  return (
    <>
       <div className="bg-landing-hero mx-auto min-h-screen min-[1920px]:min-h-[100vh] bg-no-repeat bg-cover max-w-[1930px]">
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
            <div className="flex flex-wra mt-[83px]">
                <div className="w-1/2">
               <h1 className='font-mukta text-white text-6xxl leading-full font-extrabold '>Locate any phone, <span className='font-light'>anywhere, anytime</span> </h1>
                 <p className='mt-2 font-normal font-mukta text-white text-base leading-md'>Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat nunc cursus. Lacus ornare aliquet condimentum elementum elementum nisl nibh sed. Egestas aliquam id quam nunc.</p>
                </div>
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