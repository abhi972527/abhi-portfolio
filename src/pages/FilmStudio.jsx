import React, { useEffect } from 'react';
import Slider from "react-slick";

import { airbnb, airbnb1, airbnb2, airbnb3, airbnb4, airbnb5, defination, delivery, development, planning, developmentProcess, launch, github, next } from '../assets';

const FilmStudio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='bg-white text-black '>
            <div className='bg-[#F6F6F6] pt-32 pb-1 px-4'>
                <div className='text-[#203993] text-center mb-3 text-[14px] md:text-[18px] font-bold'>
                    WEB DEV PROJECT
                </div>
                <div className='text-center text-[24px] md:text-[40px] lg:text-[52px] font-bold text-[#0252CD]'>
                    AirBnb (Clone) - A House Rent Application
                </div>
                <div className='my-8'>
                    <img src={airbnb} alt="Airbnb" className='w-[80%] md:w-[70%] lg:w-[50%] mx-auto' />
                </div>
                <div className="flex gap-10 md:gap-28 lg:gap-48 my-12 justify-center text-white" >
                    <button onClick={() => window.open(project.live_project_link, "_blank")} className="p-2 bg-[#0252CD] px-4 rounded-full flex items-center justify-center gap-2 border font-bold shadow-sm shadow-white transition-transform duration-300 ease-out hover:scale-110">
                        <img
                            src={launch}
                            alt='source code'
                            className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                        />
                        Live
                    </button>
                    <button onClick={() => window.open(project.source_code_link, "_blank")} className="p-2 bg-[#0252CD] px-4 rounded-full flex items-center justify-center gap-2 border font-bold shadow-sm shadow-white transition-transform duration-300 ease-out hover:scale-110">
                        <img
                            src={github}
                            alt='source code'
                            className='h-6 w-6 lg:w-8 lg:h-8 object-contain'
                        />
                        Code
                    </button>
                </div>
            </div>
            <div className='my-20'>
                <div className='flex px-4 flex-col lg:flex-row w-full md:max-w-2xl lg:max-w-7xl mx-auto'>
                    <div className='lg:w-1/2'>
                        <div className='text-[24px] md:text-[36px] lg:text-[48px] mb-4 text-[#13AA52] font-semibold'>
                            AirBnb (Clone)
                        </div>
                        <div className='text-justify text-[14px] md:text-[16px]'>

                            I developed a web-based Airbnb clone inspired by the popular platform. Users can explore and book various accommodations like houses and villas, offering a personalized booking experience. <br />

                            The project used a robust tech stack, including Next.js for server-side rendering and routing, TypeScript for code robustness, Prisma for simplified database management, MongoDB for scalability, Tailwind CSS for custom UI components, and Cloudinary for efficient image storage. <br />

                            Although TypeScript presented some initial challenges, I gained a solid understanding and successfully completed the project. To enhance security, I integrated GitHub and Google authentication for signup and login. <br />
                            The application's main features include accommodation exploration and bookings. Property owners can list their properties for rent, expanding the options available to users. The project delivers a seamless and user-friendly experience, and I'll continue to improve it based on user feedback. <br />
                        </div>
                    </div>
                    <div className='flex justify-center items-center lg:w-1/2 mt-8 md:mt-0 md:p-8'>
                        <div className='rounded-xl text-[14px] md:text-[16px] border min-w-full bg-[#F6F6F6]'>
                            <div className='flex p-4 mx-auto '>
                                <div className='min-w-[120px] font-semibold'>
                                    My Role
                                </div>
                                <div>
                                    Software Engineer
                                </div>
                            </div>
                            <div className='border-y flex items-center p-4 mx-auto'>
                                <div className='min-w-[120px] font-semibold'>
                                    Tech Stack
                                </div>
                                <div className='flex gap-4'>
                                    <img src={next} alt="" className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />
                                    <img src={next} alt="" className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />
                                    <img src={next} alt="" className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />
                                </div>
                            </div>
                            <div className='flex p-4 mx-auto'>
                                <div className='min-w-[120px] font-semibold'>
                                    Live Demo
                                </div>
                                <div onClick={() => window.open(project.live_project_link, "_blank")}>
                                    <div className="flex group items-center cursor-pointer gap-4 text-black">
                                        <div className="group-hover:underline" onClick={() => toggleProjectShowcase(project)}>Project</div>
                                        <div className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-1 px-4 pb-8 bg-[#F6F6F6]'>
                <div className=' mx-auto w-full md:max-w-2xl lg:max-w-7xl my-16 flex flex-col gap-16'>
                    <div className=' '>
                        <div className='text-[24px] md:text-[36px] lg:text-[48px] font-bold mb-4'>
                            Problem Statement
                        </div>
                        <div className='text-[14px] md:text-[18px] text-justify text-[#6F74A7]'>
                            One of the main problems that people face when looking to rent an accomodation is the hassle of finding a reliable and user-friendly platform to search for and book rental accomodations. In addition, property owners who want to rent out their properties often struggle to find a suitable platform to list their properties and manage their rentals.
                        </div>
                    </div>
                    <div className=''>
                        <img src={airbnb1} alt="Airbnb" className='w-[100%] md:w-[80%] rounded-xl mx-auto' />
                    </div>
                </div>
            </div>
            <div className='text-center text-[22px] md:text-[38px] font-bold pt-8 my-10'>
                My Process
            </div>
            <div className='flex flex-wrap gap-8 md:gap-14 lg:gap-20 justify-center'>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={defination} alt="Defination" className='w-9 h-9' />
                    </div>
                    <div className='text-[14px] md:text-[18px] lg:text-[20px] text-[#151E2C] font-semibold'>
                        Defination
                    </div>
                </div>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={planning} alt="Planning" className='w-9 h-9' />
                    </div>
                    <div className='text-[14px] md:text-[18px] lg:text-[20px] text-[#151E2C] font-semibold'>
                        Planning
                    </div>
                </div>

                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={development} alt="Development" className='w-9 h-9' />
                    </div>
                    <div className='text-[14px] md:text-[18px] lg:text-[20px] text-[#151E2C] font-semibold'>
                        Development
                    </div>
                </div>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={delivery} alt="Delivery" className='w-9 h-9' />
                    </div>
                    <div className='text-[14px] md:text-[18px] lg:text-[20px] text-[#151E2C] font-semibold'>
                        Delivery
                    </div>
                </div>
            </div>
            <div className='text-center mt-16 py-4 md:py-9 bg-[#0252CD] text-white font-bold text-[24px] md:text-[30px]'>
                High-Fidelity Figma Design
            </div>
            <div>
                <img src={airbnb1} alt="Airbnb" className='w-[100%] mx-auto' />
            </div>
            <div className='text-center text-[24px] md:text-[38px] font-bold mb-5 mt-10 md:mb-10 md:mt-20'>
                Development
            </div>
            <div className=''>
                <img src={developmentProcess} alt="DevelopmentProcess" className=' w-[80%] md:w-[40%] mx-auto' />
            </div>
            <div className='text-center mt-10 md:mt-20 py-4 md:py-9 bg-[#1E9AFF] text-white font-bold text-[24px] md:text-[30px]'>
                Product
            </div>
            <div className='bg-[#BEC1D5] py-20'>
                <div className='mx-auto w-[70%] md:max-w-4xl'>
                    <Slider {...settings}>
                        <div>
                            <img src={airbnb2} alt="airbnb2" />
                        </div>
                        <div>
                            <img src={airbnb3} alt="airbnb3" />
                        </div>
                        <div>
                            <img src={airbnb4} alt="airbnb4" />
                        </div>
                        <div>
                            <img src={airbnb5} alt="airbnb5" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='py-20 px-4'>
                <div className='max-w-4xl text-justify flex flex-col gap-9 mx-auto'>
                    <div>
                        <div className='text-[10px] md:text-[12px] text-[#203993] font-bold'>
                            LEARNINGS & CHALLENGES
                        </div>
                        <div className='text-[24px] md:text-[38px] font-bold'>
                            Takeaways
                        </div>
                    </div>
                    <div className='p-8 md:p-14  bg-[#F6F6F6] rounded-xl'>
                        <div className='text-[#47A34B] text-[14px] mb-6 font-bold'>
                            Learnings
                        </div>
                        <ul class="list-disc flex flex-col gap-4 text-[#6F74A7] font-normal text-[14px]">
                            <li>
                                Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols.
                            </li>
                            <li>
                                Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.
                            </li>
                            <li>
                                Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure.
                            </li>
                            <li>
                                Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.
                            </li>
                        </ul>
                    </div>
                    <div className='p-8 md:p-14  bg-[#F6F6F6] rounded-xl'>
                        <div className='text-[#E15A46] text-[14px] mb-6 font-bold'>
                            Challenges
                        </div>
                        <ul class="list-disc flex flex-col gap-4 text-[#6F74A7] font-normal text-[14px]">
                            <li>
                                As i developed this project, i encountered various obstacles. One my biggest challenges was choosing the right tools and technologies for the project.
                            </li>
                            <li>
                                I conducted brainstorming and carefully weighed my options before making a decision. Furthermore, using NextJS was a new experience for me, and i encountered difficulties while implementing its features. Finally, i had to work under time constraints, which added pressure to the project.
                            </li>
                            <li>
                                However, i worked effectively to overcome these obstacles and ultimately delivered a high-quality product.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmStudio;