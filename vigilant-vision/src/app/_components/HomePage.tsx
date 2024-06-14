'use client'
import Image from "next/image";
import React from "react";
import AboutItem from "./AboutItem";
import Card from "./Card";
import Heading from "./Heading";
import { FaDiscord, FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import Link from "next/link";


type CardType = {
  title: string,
  text: string,
  img: string,
}

type ContactType = {
  link: string,
  icon: React.ReactNode
}

const CardItems: CardType[] = [
  {
    title: "Weapon Detection",
    text: "Our system utilizes advanced algorithms for real-time weapon detection in surveillance footage, promptly alerting users upon detection. Enhancing security measures, it ensures swift intervention to prevent potential harm.",
    img: "weapon2.gif"
  },
  {
    title: "Accident Detection",
    text: "Our system employs sophisticated algorithms for real-time accident detection in surveillance footage, promptly alerting users upon identification. Enhancing safety measures, it enables swift response to mitigate potential harm",
    img: "collision.gif"
  },
  {
    title: "Wanted Person Detection",
    text: "Our system employs advanced algorithms to detect wanted individuals in real-time within surveillance footage, promptly alerting users upon identification. Enhancing security measures, it enables swift intervention to prevent potential threats",
    img: "face.gif"
  }
];

const ContactList:ContactType[] = [
  {
    icon: <FaDiscord/>,
    link: "https://discord.com/channels/@me/1238365482289991731"
  },
  {
    icon: <FaLinkedin/>,
    link: "https://www.linkedin.com/in/darshil-mahraur-821216259/"
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/pahalll_014/"
  },
  {
    icon:<FaGithub/>,
    link: "https://github.com/Nun-Thee-Knee/"
  }
]

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div id="Home" className="flex flex-col items-center justify-between gap-10 lg:mt-0 lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <Heading />
          </center>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/rubber.gif"
            height={700}
            width={700}
            alt="Image"
          ></Image>
        </div>
      </div>
      <div id="About" className="flex w-full items-center justify-center">
        <center>
          <h1 className="text-5xl font-bold text-zinc-500">
            We Got you Covered
          </h1>
        </center>
      </div>
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/main.gif"
            height={500}
            width={500}
            alt="Image"
          ></Image>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <AboutItem
              title="Detects and notifies me of potential dangers, ensuring I stay protected."
              text="Our system continuously monitors surveillance feeds, providing you with real-time alerts for any detected threats, such as weapons, wanted individuals, or accidents. This ensures you stay informed and protected by delivering immediate notifications about potential dangers. By instantly alerting you to critical situations, the system enhances your safety and allows you to respond quickly, reducing risks and offering peace of mind"
              color="text-blue-500"
            />
          </center>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-[-100px] lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <AboutItem
              title="Empowering Law Enforcement with Real-Time Threat Detection"
              text="Our system plays a crucial role in law enforcement by continuously monitoring surveillance footage and providing real-time alerts for various threats, including weapons, wanted suspects, and accidents. These instant notifications enable law enforcement agencies to swiftly respond to emergencies, apprehend suspects, and mitigate potential risks to public safety. By leveraging cutting-edge technology for proactive threat detection, our system enhances the effectiveness of police operations, ensuring a safer environment for the community."
              color="text-fuchsia-500"
            />
          </center>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/society.gif"
            height={500}
            width={500}
            alt="Image"
          ></Image>
        </div>
      </div>
      <div id="Features" className="flex w-full items-center justify-center">
        <center>
          <h1 className="text-5xl font-bold text-zinc-500">
            We Provide you with
          </h1>
        </center>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid flex-col gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CardItems.map((item)=>{
            return <Card key={item.img} title={item.title} text={item.text} img={item.img}/>
          })}
        </div>
      </div>
      <div id="Contact" className="p-10 gap-5 flex items-center justify-center mb-[-100px]">
        {ContactList.map((item)=>{
          return <Link key={item.link} href={item.link}>
            <span className="text-zinc-700 hover:text-zinc-900 h-20 w-20">{item.icon}</span>
          </Link>
        })}
      </div>
    </div>
  );
};

export default HomePage;