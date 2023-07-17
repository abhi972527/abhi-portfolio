import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <div className="">
      <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} text-black flex mt-0 md:mt-0`}>
        {/* <span className="text-black"> */}
        <div className='mx-auto'>
          Skills
          <div className='h-6 bg-[#FFBE62] -mt-9' />
        </div>
        {/* </span> */}
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-4 md:mt-8`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">What I have</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      <div className='mt-10 md:mt-10 flex flex-row flex-wrap justify-center gap-8 md:gap-8'>
        {technologies.map((technology) => (
          <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom" className='w-20 h-20 md:w-20 md:h-20 cursor-pointer flex items-center justify-center bg-[#fff] rounded-full hover:drop-shadow-2xl' key={technology.name}>
            {/* <motion.p
              variants={fadeIn("", "", 0.1, 1)}
            > */}
            <img src={technology.icon} alt="" className="cursor-pointer w-[48px] h-[48px] hover:w-[52px] hover:h-[52px] md:w-[44px] md:h-[44px] md:hover:w-[45px] md:hover:h-[45px] transform hover:scale-110 transition duration-500 ease-in-out" />
            {/* </motion.p> */}
          </div>
        ))}
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-4 md:mt-24 mb-14`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">What I offer</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      <div className="grid grid-flow-col justify-between gap-6 mb-6">
        {/* {services.map((service, i) => (
          <div className="border border-black text-black p-[30px] rounded-lg mt-4">
            <div className="h-8 w-8 bg-slate-400">
              img
            </div>
            <div className="mt-[100px] flex flex-col gap-4 ">
              <div>
                {service.title}
              </div>
              <div>
                {service.content}
              </div>
            </div>
          </div>
        ))} */}
        <div className="text-black h-[336px] bg-[#ffffff] w-[266px] p-[30px] rounded-xl hover:bg-[#0252CD] transition-colors duration-300 group ">
          <div className="h-10 w-10 p-2 rounded-lg bg-slate-200  group-hover:bg-white">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div className="mt-[70px] flex flex-col gap-4 group-hover:text-white">
            <div className="text-[#151E2C] text-[24px] font-bold group-hover:text-white transition-colors duration-300">
              Web Design
            </div>
            <div className="text-[#6F74A7] text-[14px] font-medium group-hover:text-white transition-colors duration-300">
              Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.
            </div>
          </div>
        </div>
        <div className="text-black h-[336px] bg-[#ffffff] w-[266px] mt-16 p-[30px] rounded-xl hover:bg-[#0252CD] transition-colors duration-300 group ">
          <div className="h-10 w-10 p-2 rounded-lg bg-slate-200 group-hover:bg-white">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
            </svg>
          </div>
          <div className="mt-[70px] flex flex-col gap-4 ">
            <div className="text-[#151E2C] text-[24px] font-bold group-hover:text-white transition-colors duration-300">
              Front-End Dev
            </div>
            <div className="text-[#6F74A7] text-[14px] font-medium group-hover:text-white transition-colors duration-300">
              Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.
            </div>
          </div>
        </div>
        <div className="text-black h-[336px] bg-[#ffffff] w-[266px] p-[30px] rounded-xl hover:bg-[#0252CD] transition-colors duration-300 group ">
          <div className="h-10 w-10 p-2 rounded-lg bg-slate-200 group-hover:bg-white">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path>
            </svg>
          </div>
          <div className="mt-[70px] flex flex-col gap-4 ">
            <div className="text-[#151E2C] text-[24px] font-bold group-hover:text-white transition-colors duration-300">
              Back-End Dev
            </div>
            <div className="text-[#6F74A7] text-[14px] font-medium group-hover:text-white transition-colors duration-300">
              Building the server-side components and functionality of a website using  Node.js.
            </div>
          </div>
        </div>
        <div className="text-black h-[336px] bg-[#ffffff] w-[266px] mt-16 p-[30px] rounded-xl hover:bg-[#0252CD] transition-colors duration-300 group ">
          <div className="h-10 w-10 p-2 rounded-lg bg-slate-200 group-hover:bg-white">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
            </svg>
          </div>
          <div className="mt-[70px] flex flex-col gap-4 ">
            <div className="text-[#151E2C] text-[24px] font-bold group-hover:text-white transition-colors duration-300">
              Web Optimization
            </div>
            <div className="text-[#6F74A7] text-[14px] font-medium group-hover:text-white transition-colors duration-300">
              Improving website performance by optimizing page load times, and minimizing resource usage.
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SectionWrapper(Tech, "skills");

{/* <BallCanvas icon={technology.icon} /> */ }