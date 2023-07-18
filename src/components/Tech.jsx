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
          <div className='h-3 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
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
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-14 md:mt-24 mb-8 sm:mb-14`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">What I offer</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      {/* <div className="grid sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-10 xl:gap-6 mb-6"> */}
      <div className="gap-10 xl:gap-6 mb-6 justify-evenly flex flex-wrap">
        {services.map((service, i) => (
          <div className={`text-black h-[336px] bg-[#ffffff] w-[266px] p-[30px] rounded-xl hover:bg-[#0252CD] transition-colors duration-300 group ${i % 2 === 1 ? 'xl:mt-12' : ''}`} key={i}>
            <div className="h-10 w-10 p-2 rounded-lg bg-slate-200  group-hover:bg-white">
              <img src={service.img} alt="Img" />
            </div>
            <div className="mt-[70px] flex flex-col gap-4 group-hover:text-white">
              <div className="text-[#151E2C] text-[24px] font-bold group-hover:text-white transition-colors duration-300">
                {service.title}
              </div>
              <div className="text-[#6F74A7] text-[14px] font-medium group-hover:text-white transition-colors duration-300">
                {service.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default SectionWrapper(Tech, "skills");

{/* <BallCanvas icon={technology.icon} /> */ }