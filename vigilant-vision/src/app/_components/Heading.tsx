'use client'
import { useEffect } from "react";
import gsap from "gsap"
import Link from "next/link";

const Heading = () => {
    useEffect(()=>{
        gsap.fromTo(
            '#heading',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#heading', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#description',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#startButton',
            { opacity: 0, y: 0 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
    },[])
  return (
    <>
      <h1 id="heading" className="opacity-0 text-5xl font-bold">
        <span className="text-fuchsia-900">Real</span>{" "}
        <span className="text-blue-800">Time</span>{" "}
        <span className="text-green-700">Alerts</span>{" "}
        <span className="text-blue-700">For</span>{" "}
        <span className="text-blue-200">
          Safer Environments and Around the Clock
        </span>
      </h1>
      <p id="heading" className="opacity-0 mt-5 text-2xl font-bold">
      Continuous surveillance, instant alerts for weapons, wanted persons, and accidents.
      </p>
      <div className="hover:scale-95">
        <Link href="/api/auth/signin">
      <button id="startButton" className="hover:scale-95 opacity-0 mt-10 rounded-xl bg-gradient-to-r from-blue-500 to-gray-500 p-3 px-20 font-bold ">
        Sign Up For free
      </button>
      </Link>
      </div>
    </>
  );
};

export default Heading;