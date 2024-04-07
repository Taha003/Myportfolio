import React from 'react'
import {IoSchoolOutline,IoBookOutline} from 'react-icons/io5'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
AOS.init();

function Education() {
  return (
    <div className='w-full bg-[#242424] py-32 overflow-x-hidden' name="education">
            <div className='max-w-[800px] mx-auto px-4' >
            <div>
            <p className='text-[#0097b2] text-3xl font-bold uppercase  inline glitch-effect' data-aos="fade-left">Education</p>
            {/* <p className='text-gray-600 '>These are some of m</p> */}
            </div>
            <div className='flex flex-col p-4 gap-y-10'>
                <div className='flex flex-row items-center justify-start gap-2 w-full' data-aos="fade-left">
                    <div className='text-white'>
                        <IoSchoolOutline size={60}/>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl font-semibold text-[#0097b2] '>Ned University Of Engineering & Technology</h4>
                        <p className='text-gray-500'>Bachelors in engineering</p>
                        <div className='flex gap-x-14 items-center'>
                        <p className='text-white text-xl'>Electrical engineering</p>
                        <p className='text-gray-500'>2021-present</p>
                        </div>
                        
                    </div>
                   
                    
                </div>
                
                <div className='flex flex-row items-center justify-start gap-2' data-aos="fade-left">
                    <div className='text-white'>
                        <IoBookOutline size={60}/>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl font-semibold text-[#0097b2]'>Government Dehli College</h4>
                        <p className='text-gray-500'>Intermediate</p>
                        <div className='flex gap-x-14 items-center'>
                        <p className='text-white text-xl'>Pre-engineering</p>
                        <p className='text-gray-500'>2018-2020</p>
                        </div>
                        
                    </div>
                   
                    
                </div>
                <div className='flex flex-row items-center justify-start gap-2' data-aos="fade-left">
                    <div className='text-white'>
                    <IoBookOutline size={60}/>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl font-semibold text-[#0097b2]'>Jawan Pakistan</h4>
                        <p className='text-gray-500'>Certification</p>
                        <div className='flex gap-x-14 items-center'>
                        <p className='text-white text-xl'>Front end development</p>
                        <p className='text-gray-500'>2022</p>
                        </div>
                        
                    </div>
                   
                    
                </div>
               
           
                
                
                

            </div>
               
                
            </div>

    </div>
  )
}

export default Education