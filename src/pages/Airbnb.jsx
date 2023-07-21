import React from 'react';

import { airbnb, defination, delivery, development, planning, developmentProcess } from '../assets';

const Airbnb = () => {
    return (
        <div className='bg-white border text-black py-40 '>
            <div className='border text-[#203993] text-center mb-3 text-[18px] font-bold'>
                WEB DEV PROJECT
            </div>
            <div className='border text-center text-[64px] font-bold text-[#0252CD]'>
                AirBnb (Clone) - A House Rent Application
            </div>
            <div className='border my-14'>
                <img src={airbnb} alt="Airbnb" className='w-[60%] mx-auto' />
            </div>
            <div className='flex gap-40 my-14 text-[#0252CD] font-semibold text-[16px] border justify-center'>
                <span className='flex gap-4 cursor-pointer group'>
                    Demo Site
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='transition-transform duration-300 ease-out group-hover:translate-x-4'>
                        <path d="M16.6663 8.2666L20.3996 11.9999M20.3996 11.9999L16.6663 15.7333M20.3996 11.9999H3.59961" stroke="#0252CD" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span className='flex gap-4 cursor-pointer group'>
                    Source Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='transition-transform duration-300 ease-out group-hover:translate-x-4'>
                        <path d="M16.6663 8.2666L20.3996 11.9999M20.3996 11.9999L16.6663 15.7333M20.3996 11.9999H3.59961" stroke="#0252CD" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
            <div className='flex max-w-7xl mx-auto'>
                <div className='border w-1/2'>
                    <div className=' text-[48px] mb-4 text-[#13AA52] font-semibold'>
                        AirBnb (Clone)
                    </div>
                    <div className='border text-justify text-[18px]'>
                        Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup and drop-off location options and a comprehensive list of available cars.

                        My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles.

                        Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.
                    </div>
                </div>
                <div className='border flex justify-center items-center w-1/2 p-8'>
                    <div className='border rounded-xl min-w-full'>
                        <div className=' p-4 mx-auto '>
                            My Role
                        </div>
                        <div className='border-y  p-4 mx-auto'>
                            Tech Stack
                        </div>
                        <div className=' p-4 mx-auto'>
                            Live Demo
                        </div>
                    </div>
                </div>
            </div>
            <div className='border mx-auto max-w-5xl my-24 flex flex-col gap-16'>
                <div className='border '>
                    <div className='text-[48px] font-bold mb-4'>
                        Problem Statement
                    </div>
                    <div className='text-[18px] text-[#6F74A7]'>
                        One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.
                    </div>
                </div>
                <div className=''>
                    <img src={airbnb} alt="Airbnb" className='w-[80%] rounded-xl mx-auto' />
                </div>
            </div>
            <div className='text-center text-[38px] font-bold my-10'>
                My Process
            </div>
            <div className='flex gap-20 justify-center'>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={defination} alt="Defination" className='w-9 h-9' />
                    </div>
                    <div className='text-[24px] text-[#151E2C] font-semibold'>
                        Defination
                    </div>
                </div>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={planning} alt="Planning" className='w-9 h-9' />
                    </div>
                    <div className='text-[24px] text-[#151E2C] font-semibold'>
                        Planning
                    </div>
                </div>

                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={development} alt="Development" className='w-9 h-9' />
                    </div>
                    <div className='text-[24px] text-[#151E2C] font-semibold'>
                        Development
                    </div>
                </div>
                <div className='text-center flex flex-col gap-5 items-center'>
                    <div className='h-28 w-28 rounded-full bg-[#DEE7FF] flex items-center justify-center'>
                        <img src={delivery} alt="Delivery" className='w-9 h-9' />
                    </div>
                    <div className='text-[24px] text-[#151E2C] font-semibold'>
                        Delivery
                    </div>
                </div>
            </div>
            <div className='text-center mt-32 py-9 bg-[#0252CD] text-white font-bold text-[30px]'>
                High-Fidelity Figma Design
            </div>
            <div>
                <img src={airbnb} alt="Airbnb" className='w-[100%] mx-auto' />
            </div>
            <div className='text-center text-[38px] font-bold mb-10 mt-20'>
                Development
            </div>
            <div className='border'>
                <img src={developmentProcess} alt="DevelopmentProcess" className='mx-auto' />
            </div>
            <div className='text-center mt-32 py-9 bg-[#1E9AFF] text-white font-bold text-[30px]'>
                Product
            </div>
            <div>
                <img src={airbnb} alt="Airbnb" className='w-[100%] mx-auto' />
            </div>
            <div className='mt-28 border'>
                <div className='border max-w-4xl flex flex-col gap-9 mx-auto'>
                    <div>
                        <div className='text-[12px] text-[#203993] font-bold'>
                            LEARNINGS & CHALLENGES
                        </div>
                        <div className='text-[38px] font-bold'>
                            Takeaways
                        </div>
                    </div>
                    <div className='p-14  bg-[#F6F6F6] rounded-xl border'>
                        <div className='text-[#47A34B] text-[14px] mb-6 font-bold'>
                            Learnings
                        </div>
                        <ul class="list-disc flex flex-col gap-4 text-[#6F74A7] font-normal text-[14px]">
                            <li>
                                Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens (JWT).
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
                    <div className='p-14  bg-[#F6F6F6] rounded-xl border'>
                        <div className='text-[#E15A46] text-[14px] mb-6 font-bold'>
                            Challenges
                        </div>
                        <ul class="list-disc flex flex-col gap-4 text-[#6F74A7] font-normal text-[14px]">
                            <li>
                                As we developed Morent, our team encountered various obstacles. One of our biggest challenges was choosing the right tools and technologies for the project.
                            </li>
                            <li>
                                We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.
                            </li>
                            <li>
                                However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airbnb;