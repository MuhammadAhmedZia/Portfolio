import React from 'react'
// import logo from '../assets/logo2.jpg'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";


function Navbar() {
  return (
    <nav className=''>
      <div className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrick-0 items-center ">
          {/* <img src={logo} alt="logo"  /> */}
          <b className='text-3xl md:text-5xl'>MAZ</b>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl md:text-4xl">
          <a href="https://www.linkedin.com/in/muhammad-ahmed-zia-69212a277/" target='blank'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/MuhammadAhmedZia" target='blank'>
            <FaGithub />
          </a>
          <a href="" target='blank'>
            <FaFacebook />
          </a>
          <a href="" target='blank'>
            <FaSkype />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar