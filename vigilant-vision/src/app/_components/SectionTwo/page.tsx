import React from 'react'

function SectionTwo() {
  return (
    <div className=''>
      
        <h1 className='text-5xl text-white w-[800px] mt-[2100px] ml-[500px]  text-bold'>What We Got You</h1>
     <div>
      <ul className='flex mt-[100px]'>
        <li>
        <div className="card w-[20rem] h-[500px] rounded-3xl bg-black text-white ml-[100px] ">
  <img src="https://cdn.pixabay.com/photo/2022/08/29/05/14/car-accident-7418021_1280.png" className=" ml-[50px] w-[200px]" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-xl ml-[50px] mt-[30px]">Accident Detection</h5>
    <p className="ml-[10px] mt-[20px] w-[300px] h-[150px]">Our Accident Detection uses technology to quickly identify and report accidents. It sends instant alerts to emergency services, ensuring fast response and enhancing safety.</p>
    <a href="#" className="rounded-full bg-white p-2 text-black ml-[70px] mt-[20px] absolute">Go somewhere</a>
  </div>
</div>
          </li>
        <li>    <div className="card w-[20rem] h-[350px] rounded-3xl bg-black text-white ml-[100px] ">
  <img src="https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlvbGVuY2V8ZW58MHx8MHx8fDA%3D" className="-mt-[20px] ml-[100px]" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-xl ml-[90px] mt-[30px]">Violence Detection</h5>
    <p className="ml-[10px] mt-[20px] w-[350px] h-[150px]">Our Violence Detection System uses AI to quickly identify and flag violent activities in real life. By analyzing live video feeds and other data sources, it provides real-time alerts to security personnel, helping to ensure a swift response and enhance public safety</p>
    <a href="#" className="rounded-full bg-white p-2 text-black ml-[120px] mt-[30px] absolute">Go somewhere</a>
  </div>
</div></li>
        <li>    <div className="card w-[20rem] h-[350px] rounded-3xl bg-black text-white ml-[100px] ">
  <img src="https://cdn.pixabay.com/photo/2020/01/12/16/01/face-detection-4760281_1280.jpg" className="-ml-[20px] w-[400px] -mt-[20px]" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-xl ml-[50px] mt-[30px]">Intruder Detection</h5>
    <p className="ml-[10px] mt-[20px] w-[350px] h-[150px]">Our Intruder Detection System uses advanced technology to monitor your property and identify unauthorized access. With real-time alerts and intelligent sensors, it helps ensure immediate response to potential threats, keeping your home or business secure.</p>
    <a href="#" className="rounded-full bg-white p-2 text-black ml-[100px] mt-[30px] absolute">Go somewhere</a>
  </div>
</div></li>
      </ul>
     </div>
    </div>
  )
}

export default SectionTwo