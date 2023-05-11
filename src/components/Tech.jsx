import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="">
      <div className={`${styles.sectionHeadText} text-black mt-0 md:mt-0`}>
        <span className="text-black">Skills</span>
      </div>
      <div className={`${styles.sectionSubText} text-center flex justify-center items-center mt-4 md:mt-8`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">What I have</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      <div className='mt-10 md:mt-20 flex flex-row flex-wrap justify-center gap-8 md:gap-[72px]'>
        {technologies.map((technology) => (
          <div className='w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-[#fff] rounded-full shadow-lg' key={technology.name}>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}>
              <img src={technology.icon} alt="" className="cursor-pointer w-[48px] h-[48px] hover:w-[52px] hover:h-[52px] md:w-[64px] md:h-[64px] md:hover:w-[66px] md:hover:h-[66px] transform hover:scale-110 transition duration-500 ease-in-out" />
            </motion.p>
          </div>
        ))}
      </div>
    </div >
  );
};

export default SectionWrapper(Tech, "skills");

{/* <BallCanvas icon={technology.icon} /> */ }