import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
      <div className='bg-black text-white'>
        <ul>
          <li><img src="logo" alt="" /></li>
        </ul>
        <ul className='flex gap-4 justify-end h-[70px]'>
          <li className='mt-6 text-bold text-xl '>Home</li>
          <li className='mt-6 text-bold text-xl'>About Us</li>
          <li className='mt-6 text-bold text-xl'>Features</li>
          <li className='mt-6 text-bold text-xl'>Contact</li>
          <li> <button className='mt-4 mr-12 text-bold text-xl rounded-full from-fuchsia-400 p-2 bg-gradient-to-r to-blue-400'>Get Started </button></li>
        </ul>
      </div>
      <div className='text-white mt-[120px] ml-[20px] absolute'>
        <h1 className='text-4xl font-serif absolute ml-[100px] mt-[150px] text-blue-600'>VIGILANT VISION</h1>
        <p className='w-[500px] mt-[220px] text-md ml-[30px]'>Our advanced surveillance system offers 24/7 real-time monitoring, ensuring constant vigilance. It is designed to promptly detect accidents, identify weapons, and recognize acts of violence, providing immediate alerts to keep you informed and secure at all times.
           </p>
           <Link href="/SignUp"className='from-pink-500 bg-gradient-to-r to-blue-400 rounded-full p-3 w-[250px] ml-[180px] mt-[50px]'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar