import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function About() {
  return (
    <div className='w-full  bg-[#242424] px-8 py-32 overflow-x-hidden' name="about">
      <div className='max-w-[550px] mx-auto px-4'>
        <div className='grid sm:grid-cols-2 gap-x-4'>
        <div className='sm:text-right' data-aos="fade-left">
          <p className='text-[#0097b2] text-3xl font-bold uppercase  inline glitch-effect'>About</p>
        </div>
        </div>
        
        <div className='grid sm:grid-cols-2 mt-2 text-white gap-x-4'>
          <div className='text-2xl'>
            <p className='sm:text-right font-bold' data-aos="fade-right">Hi, Welcome to my portfolio site I hope you are doing fine take a look here.</p>
          </div>
          <div className=' text-white' data-aos="fade-left">
          <p>I am a curious person who loves to explore new things and learn new technologies. I learned web development because of my passion towards coding.</p>
        </div>

        </div>
        

      </div>

    </div>
  )
}

export default About