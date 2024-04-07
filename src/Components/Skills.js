import React from 'react'
import Html5Img from '../Assets/htmlPng.png'
import skills from './SkillsData'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Skills() {
  return (
    <div className='w-full  bg-[#242424] py-32   overflow-x-hidden overflow-y-hidden' name="skills">
        <div className='max-w-[800px] mx-auto px-4'>
            <div data-aos="fade-left">
            <p className='text-[#0097b2] text-3xl font-bold uppercase  inline glitch-effect' >SKILLS</p>
            <p className='text-gray-600 '>I have worked with following technologies.</p>
            </div>
            <div className='w-full h-full grid grid-cols-2 p-3 md:grid-cols-5 text-center gap-4'>
                {
                    skills.map((items,i)=>{
                        let {title,image}=items
                        return (
                            <div className='flex flex-col justify-center items-center shadow-lg py-2' data-aos="flip-right">
                                    <img src={image} alt="" className=' hover:scale-75 transition-all duration-300 w-20 mx-auto'/>
                    <div>
                    <p className='text-gray-700 mt-1'>{title}</p>
                    </div>  
                            </div>
                        )
                    })
                }

            </div>
            
        </div>

    </div>
  )
}

export default Skills