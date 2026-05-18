import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
  return (
    <>           
      <div className='bg-gray-400 py-6 px-auto text-center text-white'>
        powered  by Inovex Media and Tech Pvt.Ltd.
      </div>    
      <div className='bg-gray-400 py-6 px-auto text-center text-white'>
        © 2024 All rights reserved.
      </div>
      
     <div className='bg-gray-400 py-6 px-auto text-center text-white flex items-center justify-center gap-4'>
      <div className='py-6 text-center cursor-pointer text-black flex items-center justify-center gap-2'>
  <CiFacebook size={24} />
  
</div>
   <div className='py-6 text-center cursor-pointer text-black flex items-center justify-center gap-2'>
  <FaInstagramSquare size={24} />
  
</div>
   <div className='py-6 text-center cursor-pointer text-black flex items-center justify-center gap-2'>
  <FaLinkedin size={24} />
  
</div>
   <div className='py-6 text-center cursor-pointer text-black flex items-center justify-center gap-2'>
  <FaGithub size={24} />
  
</div>
   <div className='py-6 text-center cursor-pointer text-black flex items-center justify-center gap-2'>
  <IoLogoTiktok size={24} />
  
</div>
     </div>
    </>
  )
}

export default Footer