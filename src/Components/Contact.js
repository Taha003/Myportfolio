import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Contact() {
  return (
    <div className='w-full py-32 overflow-x-hidden' name="contact">
        <div className='max-w-[800px] mx-auto px-4'>
        <div data-aos="fade-left">
            <p className='text-[#0097b2] text-3xl font-bold uppercase  inline glitch-effect' >Contact</p>
            <p className='text-gray-600 leading-5 my-1'>
            Submit the form here or shoot me an email at- <br/> <a href='mailto:muhammadtaha458@gmail.com' className='hover:cursor-pointer text-white'>muhammadtaha458@gmail.com</a>
            </p>
            
            
            </div>
           <form className='flex flex-col space-y-2 p-1 my-4' action='https://getform.io/f/a7be9366-5e8a-406b-8d99-751c28e64f6f' method='POST'>
            <input type="text" name="name"  placeholder='Name' className='p-2 bg-opacity-70 shadow-md' data-aos="fade-left"/>
            <input type="text" name="email"  placeholder='Email' className='p-2 bg-opacity-70 shadow-md' data-aos="fade-left"/>
            <textarea placeholder='Message' name="message" cols='30' rows='10' className='p-2 bg-opacity-70 shadow-md' data-aos="fade-left">

            </textarea>
            <button type='submit' className='border border-gray-700 text-white text-xl w-[200px] text-center hover:bg-opacity-70 transition-all duration-150' data-aos="fade-left">Submit</button>
           </form>

        </div>
    </div>
  )
}

export default Contact