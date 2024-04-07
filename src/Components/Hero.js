import React from 'react'
import Typed from 'react-typed'
import '../App.css'

function Hero() {
  return (
   
    <div className='text-black w-full h-screen  md:h-[580px] bg-[#242424] z-10' name="home">
         <div className='max-w-[940px] mx-auto py-52 px-4'>
            <div className='flex flex-col justify-center items-start px-4 text-white'>
                <h5 className='text-[#0097b2] font-bold'>Hi ,I am</h5>
                <h2 className='text-white md:text-4xl text-2xl
                uppercase  font-extrabold'>Muhammad Taha</h2>
                <p className='text-gray-500 font-semibold text-xl'>Front end developer</p>
                <p className='md:text-xl text-lg font-semibold  mt-1 md:max-w-[600px]'>I am a front end developer with experience of about 1 year I can work with <span className='md:text-3xl text-xl text-[#0097b2] font-extrabold'>
                <Typed strings={[
                    'JavaScript',
                    'TypeScript',
                    'React Js',
                    'Tailwind css',
                    'Bootstrap']} typeSpeed={120} backSpeed={100} loop/></span> </p>
                   
                   
            </div>
            <svg class="arrows hidden md:block">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
            <div className='mt-40 sm:block md:hidden'>
            <div class="arrow-container">
            <div class="arrow-down"></div>
        </div>
            </div>

            
        </div>   
    </div>
  )
}

export default Hero