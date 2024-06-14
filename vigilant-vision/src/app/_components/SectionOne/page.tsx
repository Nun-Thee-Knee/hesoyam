'use client'
import React  from 'react'

function SectionOne() {

  return (
    <div>
      <h1 className='text-5xl text-white w-[800px] text-bold'>We  got  you  Covered</h1>
      <div>
        <ul className='flex-row'>
          <li><div className='w-[100vw] bg-black'  ><img  className='-ml-[500px] mt-[30px]' src="https://i.pinimg.com/originals/b8/93/75/b893751210ed17c30514ffbdebbd95b7.gif" alt=""  /></div></li>
          <li><div><h1 className='text-4xl text-blue-200 -mt-[400px] ml-[400px]'>Accident Detection</h1>
          <p className='text-white w-[500px] mt-[40px] ml-[300px] text1'>Our advanced accident detection system enhances safety by leveraging real-time data processing and sensors to promptly identify accidents. Instantly alerting emergency services and relevant personnel, it reduces response times and mitigates impact. Ideal for roads, workplaces, and homes, our system ensures reliable protection with features like automatic incident reporting and location tracking. Stay informed and prepared with our technology, ensuring help is always on the way when needed most.</p>
          </div>
            </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><div className=' -mt-[100px]'>
            <h1 className='text-4xl text-blue-200 mt-[200px] -ml-[350px]'>Violence Detection</h1>
            <p className='text-white w-[500px] mt-[40px] -ml-[350px]'>Our Violence Detection Website uses advanced technology to quickly find and flag violence in online content. It helps keep the internet safer by letting people know when harmful material is circulating. Whether it's videos, images, or text, our platform is on the lookout, making it easier for everyone to take action against online violence.</p>
            </div>
          </li>
          <li><div>
            <img className="-mt-[300px] ml-[300px]"src="https://i.pinimg.com/originals/b3/7f/66/b37f6621f0fc863af8c8db13020b5d8f.gif" alt="" /></div></li>
        </ul>
      </div>
      <div className='-mt-[150px]'>
      <ul className='flex-row'>
          <li><div className='w-[100vw] bg-black'  ><img  className='-ml-[500px] mt-[30px] w-[450px]' src="https://i.pinimg.com/originals/96/97/37/969737711c8309bede132e6923cebe59.gif" alt=""  /></div></li>
          <li><div><h1 className='text-4xl text-blue-200 -mt-[400px] ml-[400px]'>Intruder Detection</h1>
          <p className='text-white w-[500px] mt-[40px] ml-[300px] text1'>
          Our Intruder Detection Website uses advanced technology to identify and alert you to unauthorized access in real-time. By monitoring your property with intelligent sensors and cameras, our system ensures your home or business stays secure. With instant notifications and easy-to-use controls, you can respond quickly to any potential threats, giving you peace of mind and enhanced safety. </p>
          </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SectionOne