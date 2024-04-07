import React from 'react'
import ProjectsData from './ProjectsData'

function Projects() {
  return (
    <div className='w-full bg-[#242424] py-32 overflow-x-hidden' name="work">
            <div className='max-w-[800px] mx-auto px-4'>
            <div data-aos="fade-left">
            <p className='text-[#0097b2] text-3xl font-bold uppercase  inline glitch-effect' >Projects</p>
            </div>
                <div className='grid md:grid-cols-2 gap-4 mt-2'>
                {
                    ProjectsData.map((items,i)=>{
                        let {title,description,image,link}=items
                        return (
                            <div key={i} className='col-span-1 flex flex-col justify-center items-center  bg-gray-800 transition-all duration-300 hover:opacity-70 hover:cursor-pointer  p-2 group shadow-lg' data-aos="flip-right">

                                  <img src={image} className='w-full h-[200px]'/>  
                                  <h5 className='text-[#0097b2] font-semibold text-xl hover:underline'><a href={link} target='blank'>{title}</a></h5>
                                  <p className='text-white pb-1'>{description}</p>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>

    </div>
  )
}

export default Projects