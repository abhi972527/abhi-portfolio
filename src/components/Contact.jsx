import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import emailjs from "@emailjs/browser";
import AOS from 'aos';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { coding, build, contact, mail, call, linkedin, github } from "../assets/index.js";
import { contactInfo } from "../constants";

const Contact = () => {
  const contactAnimation = useRef(null);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in',
    });
    if (contactAnimation.current && !contactAnimation.current.hasChildNodes()) {
      lottie.loadAnimation({
        container: contactAnimation.current,
        animationData: contact
      });
    }
  }, [])

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        "service_r96laqr",
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        "template_a70jc7k",
        {
          from_name: form.name,
          to_name: "Abhijeet",
          from_email: form.email,
          to_email: "abhijeet.kr.chaurasiya@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        "AFMH1xOmNGS7FyjJR"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 pt-6 rounded-2xl'
      >
        <h3 data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={styles.sectionHeadText}>Contact Me</h3>
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={`${styles.sectionSubText} text-center flex justify-center items-center`}>
          <hr className="w-12 md:w-32" /><span className="px-2 md:px-4">Get in touch</span><hr className="w-12 md:w-32" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-9 flex flex-col gap-7'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] flex justify-center'
      >
        {/* <EarthCanvas /> */}
        {/* <div className=" flex flex-col gap-16"> */}
        {/* <div className="flex"> */}
        <div className=" md:p-[40px] rounded-[20px] p-[20px] grid gap-3 m-auto bg-black-100 text-white">
          <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className={`${styles.heroSubText} text-center flex justify-center items-center`}>
            <hr className="w-12 md:w-32" /><span className="px-2 md:px-4">Get in touch</span><hr className="w-12 md:w-32" />
          </div>

          <div className="mt-3 md:mt-5 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <img src={github} alt="github" className="h-6 w-6 md:h-8 md:w-8" />
            <a href="https://github.com/git-abhijeet" id="contact-github" target="_blank">github.com/<u>abhijeet</u></a>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <img src={linkedin} alt="linkedin" className="h-6 w-6 md:h-8 md:w-8" />
            <a href="https://www.linkedin.com/in/abhijeet-kumar-0238301bb/" target="_blank" id="contact-linkedin">linkedin.com/in/<u>abhijeet-kumar</u></a>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <img src={mail} alt="mail" className="h-6 w-6 md:h-8 md:w-8" />
            <p id="contact-email"><u>abhijeet.kr.chaurasiya</u>@gmail.com</p>
          </div>

          <div className="mt-2 md:mt-4 flex  gap-3 md:gap-7 text-[14px] md:text-[18px] items-center">
            <img src={call} alt="call" className="h-6 w-6 md:h-8 md:w-8" />
            <span id="contact-phone">+91 9835-882-844</span>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

{/* <div className='hidden md:block mx-auto lg:w-[380px] lg:h-[380px] md:w-3/5 md:h-3/5 w-4/5 h-4/5' ref={contactAnimation} /> */ }