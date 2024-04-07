import React, { useState,useEffect } from "react";
import logoImg from "../Assets/M_TAHA-removebg-preview.png";
import {
  AiOutlineMenu,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWindowDesktop } from "react-icons/bs";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Navbar() {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  let [nav,setNav]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>60?setNav(true):setNav(false)
    });
  },[])
  

  return (
    <>
      <div className={`w-full px-4 bg-[#000]  shadow-md fixed z-20 bg-no-repeat mx-auto ${nav?'bg-opacity-50':''}`}>
        <div className="flex justify-between items-center max-w-[1240px]">
          <img src={logoImg} alt="" className="w-[120px] h-[90px] block" />
          <div className="text-white md:hidden z-10">
            
              <AiOutlineMenu size={30}  onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:cursor-pointer"/>
            
          </div>
            {/* Desktop Menu */}
          <ul className="items-center text-white space-x-20 hidden md:flex mr-2">
            <li><Link activeClass="active" to="home" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          Home
        </Link></li>
            <li><Link activeClass="active" to="about" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          About
        </Link></li>
        <li>
            <Link activeClass="active" to="skills" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          Skills
        </Link>
            </li>
            <li>
            <Link activeClass="active" to="work" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          Work
        </Link>
            </li>
           
            <li><Link activeClass="active" to="education" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          Education
        </Link></li> 
            <li>
            <Link activeClass="active" to="contact" smooth={true}  duration={500} className="cursor-pointer hover:text-[#0097b2] hover:text-xl transition-all duration-200">
          Contact
        </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <ul className={`absolute top-0  flex w-full h-screen ${sidebarOpen?'right-0':'-right-full'} bg-[#242424] flex-col justify-center items-center text-white transition-all ease-in-out duration-300`}>
          <li className='pb-4 text-2xl font-semibold'> <Link activeClass="active" to="home" smooth={true}  duration={500}  onClick={()=>setSidebarOpen(false)}>
          Home
        </Link></li>
               <li className='py-4 text-2xl font-semibold'> <Link activeClass="active" to="about" smooth={true}  duration={500} onClick={()=>setSidebarOpen(false)}>
          About
        </Link></li>
               <li className='py-4 text-2xl font-semibold'><Link activeClass="active" to="skills" smooth={true}  duration={500}  onClick={()=>setSidebarOpen(false)}>
          Skills
        </Link></li>
               <li className='py-4 text-2xl font-semibold'>
               <Link activeClass="active" to="work" smooth={true}  duration={500}  onClick={()=>setSidebarOpen(false)}>
          Work
        </Link></li> 
               <li className='py-4 text-2xl font-semibold'>
               <Link activeClass="active" to="education" smooth={true}  duration={500}  onClick={()=>setSidebarOpen(false)}>
          Education
        </Link></li> 
               <li className='py-4 text-2xl font-semibold'>
               <Link activeClass="active" to="contact" smooth={true}  duration={500}  onClick={()=>setSidebarOpen(false)}>
          Contact
        </Link>
               </li>
          </ul>
        </div>
      </div>
     
      <div className='fixed flex-col left-0 top-[35%] hidden lg:block' data-aos="flip-right">
           <ul>
               <li className='flex justify-center items-center bg-[#0097b2]  text-gray-700 w-[80px] h-[60px] opacity-60 cursor-pointer hover:opacity-90 border-b'>
                <a href="https://github.com/Taha003" target="blank"><FaGithub size={40}/></a>
                   

               </li>
               <li className='flex justify-center items-center bg-[#0097b2] text-gray-700 w-[80px] h-[60px] opacity-60 cursor-pointer hover:opacity-90 border-b'>
                <a href="https://pk.linkedin.com/in/muhammad-taha-76339225a" target="blank"><FaLinkedin size={45}/></a>
                   
               </li>
               <li className='flex justify-center items-center bg-[#0097b2]  text-gray-700 w-[80px] h-[60px] opacity-60 cursor-pointer hover:opacity-90'>
                <a href="mailto:muhammadtaha458@gmail.com"><HiOutlineMail size={40}/></a>
                   


               </li>
           </ul>

       </div> 
    </>
  );
}

export default Navbar;
