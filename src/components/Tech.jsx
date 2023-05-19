import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
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
      <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} text-black mt-0 md:mt-0`}>
        <span className="text-black">Skills</span>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-4 md:mt-8`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">What I have</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      <div className='mt-10 md:mt-20 flex flex-row flex-wrap justify-center gap-8 md:gap-[72px]'>
        {technologies.map((technology) => (
          <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom"  className='w-20 h-20 md:w-28 md:h-28 cursor-pointer flex items-center justify-center bg-[#fff] rounded-full hover:drop-shadow-2xl' key={technology.name}>
            {/* <motion.p
              variants={fadeIn("", "", 0.1, 1)}
            > */}
            <img src={technology.icon} alt="" className="cursor-pointer w-[48px] h-[48px] hover:w-[52px] hover:h-[52px] md:w-[64px] md:h-[64px] md:hover:w-[65px] md:hover:h-[65px] transform hover:scale-110 transition duration-500 ease-in-out" />
            {/* </motion.p> */}
          </div>
        ))}
      </div>
    </div >
  );
};

export default SectionWrapper(Tech, "skills");

{/* <BallCanvas icon={technology.icon} /> */ }