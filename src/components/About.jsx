import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <section className="w-full mb-12 md:mb-0">
      <div className="">
        <div className={`${styles.sectionHeadText}  mt-0 md:mt-8`}>
          About Me
        </div>
        <div className={`${styles.sectionSubText} flex justify-center items-center mt-4 md:mt-8`}>
          <hr className="w-12 md:w-32" /><span className="text-white px-2 md:px-4">WHO I AM</span><hr className="w-12 md:w-32" />
        </div>
        <div className="mt-12 md:mt-18">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[16px] md:text-[24px] leading-[30px] md:leading-[50px]'
          >
            <div className="my-5 text-[20px] text-white md:text-[42px] font-semibold">
              Hi,
            </div>
            <div className="my-5 text-[20px] md:flex text-white md:text-[42px] font-semibold">
              I'm Abhijeet and

              I'm a &nbsp;
              <TypewriterComponent
                options={{
                  strings: ['Full Stack Web Developer', 'Freelancer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="text-justify">
              I'm a skilled software developer with experience in
              JavaScript, and expertise in frameworks like React, Vue, Node.js, and
              Three.js. I'm a quick learner, capable of writing production-ready code and collaborate closely with clients to
              create efficient, scalable, and user-friendly solutions that solve
              real-world problems. Passionate about coding and intensely interested in working in a progressive organization. 
              Let's work together to bring your ideas to life!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");

{/* <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React, Node.js, and
  Three.js. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!
</motion.p>

<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div> */}