import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import WAVES from 'vanta/dist/vanta.waves.min'
import lottie from "lottie-web";
import TypewriterComponent from "typewriter-effect";

import { coding, build, contact } from "../assets/index.js";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from './canvas';

const Hero = () => {

  const [vantaEffect, setVantaEffect] = useState(null)
  const backgroundRef = useRef(null)
  const codingAnimation = useRef(null);
  useEffect(() => {
    if (codingAnimation.current && !codingAnimation.current.hasChildNodes()) {
      lottie.loadAnimation({
        container: codingAnimation.current,
        animationData: coding
      });
    }
  }, [])
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: backgroundRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        zoom: 0.6,
        waveSpeed: 0.55,
        scaleMobile: 1.00,
        color: 0x132239
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section ref={backgroundRef} className='relative w-full min-h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='' >
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
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className='lg:w-[550px] lg:h-[550px] md:w-3/5 md:h-3/5 w-4/5 h-4/5 absolute bottom-0 right-10 md:bottom-20 lg:bottom-20 lg:right-20' ref={codingAnimation} />
      <div className='absolute xs:bottom-14 bottom-16 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
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
      </div>
    </section>
  )
}

export default Hero; 
