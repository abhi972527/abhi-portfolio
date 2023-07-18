import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import WAVES from 'vanta/dist/vanta.waves.min'
import lottie from "lottie-web";
import TypewriterComponent from "typewriter-effect";
import { Link, Element } from 'react-scroll';

import { coding, build, contact, computer, midLinkedIn, midGithub } from "../assets/index.js";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from './canvas';

const Hero = () => {

  // const [vantaEffect, setVantaEffect] = useState(null)
  // const backgroundRef = useRef(null)
  // const codingAnimation = useRef(null);
  // useEffect(() => {
  //   if (codingAnimation.current && !codingAnimation.current.hasChildNodes()) {
  //     lottie.loadAnimation({
  //       container: codingAnimation.current,
  //       animationData: coding
  //     });
  //   }
  // }, [])
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(WAVES({
  //       el: backgroundRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: true,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       zoom: 0.6,
  //       waveSpeed: 0.55,
  //       scaleMobile: 1.00,
  //       color: 0x132239
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  return (
    // <section ref={backgroundRef} className='relative w-full min-h-screen mx-auto'>
    <section className='relative bg-[#F6F6F6] w-full min-h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] pt-8 sm:pt-12 px-4 sm:px-10 mx-auto max-w-7xl flex flex-col sm:flex-row items-start gap-0`}>
        <div className='w-full flex flex-col gap-6 sm:gap-8'>
          <div className='text-[#0252CD] text-[18px] sm:text-[24px] font-bold'>
            Hi, I am Abhijeet
          </div>
          <div className='text-black text-[42px] md:text-[48px] lg:text-[64px] font-bold'>
            <div>
              Professional
            </div>
            <div className='flex '>
              <div className=''>
                Web Developer
                <div className='h-4 sm:h-6 bg-[#FFBE62] -mt-7 sm:-mt-9' />
              </div>
            </div>
          </div>
          <div className='text-[#9D9D9D] mt-8 text-[14px] text-justify sm:text-[16px] font-medium'>
            I am a passionate web developer with a knack for creating intuitive and visually stunning digital experiences. With years of experience and a deep understanding of emerging technologies, I bring a unique blend of creativity and technical expertise to every project.
          </div>
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 sm:gap-14 md:gap-8 lg:gap-14 items-center mt-8'>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={50}
            >
              <button className='py-5 px-10 text-[14px] font-bold rounded-full bg-[#0252CD]'>
                Contact Us
              </button>
            </Link>
            <div className='flex items-center justify-center gap-10'>
              <a className="hover:underline" href="https://www.linkedin.com/in/abhijeet-kumar-0238301bb/" target="_blank" id="contact-linkedin">
                <img src={midLinkedIn} alt="LinkedIn" className='cursor-pointer' />
              </a>
              <a className="hover:underline" href="https://github.com/git-abhijeet" id="contact-github" target="_blank">
                <img src={midGithub} alt="GitHub" className='cursor-pointer' />
              </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="6" viewBox="0 0 110 6" fill="none">
              <path d="M109.887 3L107 0.113249L104.113 3L107 5.88675L109.887 3ZM0 3.5H107V2.5H0V3.5Z" fill="#0252CD" />
            </svg>
          </div>
        </div>
        <div className='w-full hidden md:flex items-center justify-center'>
          <img src={computer} alt="" className='' />
        </div>
        {/* <div className='border' >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Abhijeet</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
            I'm &nbsp; <br className='sm:block hidden' />
            <TypewriterComponent
              options={{
                strings: ['Full Stack Web Developer', 'ReactJS Frontend Developer', 'VueJS Frontend Developer', 'NodeJS Backend Developer', 'Freelancer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={`${styles.heroSubText} flex mt-4 lg:mt-14`}>
            <a href="https://drive.google.com/drive/folders/1tX79vNXfvP1BQrjQjbjvkWvfFu0ZVMrR?usp=share_link" target='_blank'>
              <button className='px-4 py-2 lg:px-8 lg:py-3 rounded-lg lg:rounded-2xl bg-[#407BFF] hover:bg-[#5e91ff]'>Resume</button>
            </a>
          </div>
        </div> */}
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className='lg:w-[550px] lg:h-[550px] hidden min-[380px]:flex md:w-3/5 md:h-3/5 w-4/5 h-4/5 absolute bottom-0 right-10 md:bottom-20 lg:bottom-20 lg:right-20' ref={codingAnimation} /> */}
      {/* <div className='absolute xs:bottom-14 bottom-16 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero; 
