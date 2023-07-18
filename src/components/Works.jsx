import React, { useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';


import { styles } from "../styles";
import { github, launch } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  short,
  description,
  tags,
  image,
  bg,
  source_code_link,
  live_project_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className={`p-5 rounded-2xl sm:w-[360px] w-full ${bg}`}>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl border'
        />
        {/* <div className='absolute inset-0 flex justify-between m-2 card-img_hover'>
          <div
            onClick={() => window.open(live_project_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={launch}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
        </div> */}
      </div>

      <div className='mt-5'>
        <div className="flex justify-between items-center" >
          <h3 onClick={() => window.open(live_project_link, "_blank")} className='text-white font-bold text-[24px] cursor-pointer'>{name}</h3>
          {/* <h1 className="cursor-pointer font-bold text-[16px]">More Info</h1> */}
        </div>
        <p className='mt-2 text-white text-justify text-[14px]'>{short}</p>
      </div>

      <div className="flex gap-12 justify-between mt-4" >
        <button onClick={() => window.open(project.live_project_link, "_blank")} className="p-2 px-4 rounded-lg flex items-center justify-center gap-2 border text-white font-bold shadow-md shadow-white">
          <div className='black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={launch}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
          Live
        </button>
        <button onClick={() => window.open(project.source_code_link, "_blank")} className="p-2 px-4 rounded-lg flex items-center justify-center gap-2 border text-white font-bold shadow-md shadow-white">
          <div className='black-gradient w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={github}
              alt='source code'
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
          Code
        </button>
      </div>

      <div className="mt-6">
        <span className="hover:underline cursor-pointer text-white font-bold">See Project Details</span>
      </div>

      <div className='mt-2 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] text-white`}
          // className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
  }, []);

  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <h2 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.sectionHeadText} flex`}>
        {/* Featured Projects */}
        <div className="flex mx-auto">
          <div>
            Featured
            <div className='h-3 sm:h-6 bg-[#FFBE62] -mt-5 sm:-mt-9' />
          </div>
          <div className=''>
            &nbsp;Projects
          </div>
        </div>
      </h2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center mt-2 md:mt-4`}>
        <hr className="bg-black h-[2px] w-12 md:w-32" /><span className="text-black px-2 md:px-4">My work</span><hr className="bg-black h-[2px] w-12 md:w-32" />
      </div>
      {/* </motion.div> */}

      <div className='w-full flex justify-center'>
        <div data-aos="flip-left"
          className='mt-3 text-[#9D9D9D] text-[16px] md:text-[20px] max-w-3xl leading-[30px] text-justify'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-10'>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="md:hidden flex justify-center">
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </div>

            <div className={`rounded-3xl hidden  md:flex ${project.bg} px-6 lg:px-16 gap-10 h-[280px] lg:h-[380px] text-white ${index % 2 === 1 ? 'flex-row-reverse' : ''} `}>
              <div className="w-full flex flex-col gap-6 lg:gap-10 justify-center">
                <div className="text-white text-[28px] lg:text-[40px] font-bold">
                  <span>{project.name}</span> <br />
                  <span className="text-[16px] lg:text-[20px]">{project.short}</span>
                </div>
                <div className="flex gap-12" >
                  <button onClick={() => window.open(project.live_project_link, "_blank")} className="p-2 px-4 rounded-lg flex items-center justify-center gap-2 border font-bold shadow-md shadow-white">
                    <img
                      src={launch}
                      alt='source code'
                      className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                    />
                    Live
                  </button>
                  <button onClick={() => window.open(project.source_code_link, "_blank")} className="p-2 px-4 rounded-lg flex items-center justify-center gap-2 border font-bold shadow-md shadow-white">
                    <img
                      src={github}
                      alt='source code'
                      className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                    />
                    Code
                  </button>
                </div>
                <div>
                  <span className="hover:underline cursor-pointer font-bold">See Project Details</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <img src={project.image} alt="Img" className="rounded-lg border" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
