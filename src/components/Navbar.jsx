import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link, Element } from 'react-scroll';

// import "../assets/styles/hamburger.css"
import { styles } from '../styles'
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { fadeIn, textVariant } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSetActive = (title) => {
    setActive(title);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-opacity-20 backdrop-blur-lg shadow-2xl`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        < Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex' >
            Abhijeet
          </p>
        </ Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* <a href={`#${link.id}`}> */}
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
                onSetActive={() => handleSetActive(link.title)}
              >
                {link.title}
              </Link>
              {/* </a> */}
            </li>
          ))}
          <li
            className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href="https://drive.google.com/drive/folders/1tX79vNXfvP1BQrjQjbjvkWvfFu0ZVMrR?usp=share_link" target='_blank'>
              Resume
            </a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 pt-20 fixed top-[76px] right-0 min-w-full min-h-screen z-30 bg-primary bg-opacity-80 backdrop-blur-lg`}>
            <ul className='flex min-w-full justify-start flex-col gap-8'>
              {navLinks.map((link) => (
                <li
                  key={link.id} className={`${active === link.title ? "text-white" : "text-white"} ml-10 font-poppins text-[24px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li
                className={`text-white ml-10 font-poppins text-[24px] font-medium cursor-pointer`}>
                <a href="https://drive.google.com/drive/folders/1tX79vNXfvP1BQrjQjbjvkWvfFu0ZVMrR?usp=share_link" target='_blank'>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </nav >
  )
}

export default Navbar;


{/* <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
    <ul className='list-none flex justify-end items-start flex-col gap-4'>
      {navLinks.map((link) => (
        <li
          key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}
          onClick={() => {
            setToggle(!toggle)
            setActive(link.title)
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div> */}