import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className='mt-[1500px] absolute text-white'>
        <ul className='flex'>
          <li className='text-white text-2xl ml-[600px]'><FaGithub /></li>
          <li className='text-white text-2xl ml-[20px]'><FaLinkedin /></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer