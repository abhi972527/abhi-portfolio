import {
    mobile,
    backend,
    creator,
    web,
    mui,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vue,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    next,
    nuxt,
    prisma,
    mongoose,
    gitHub,
    express,
    figma,
    docker,
    meta,
    starbucks,
    masai,
    blowhorn,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mail,
    mobilePhone,
    gitBlack,
    linkedin,
    call,
    email,
    filmstudio,
    filmstudio1,
    filmstudio2,
    filmstudio3,
    filmstudio4,
    filmstudiomob1,
    filmstudiomob2,
    filmstudiomob3,
    filmstudiomob4,
    airbnb,
    airbnb1,
    airbnb2,
    airbnb3,
    airbnb4,
    airbnb5,
    airbnb6,
    airbnb7,
    airbnbmob1,
    airbnbmob2,
    airbnbmob3,
    airbnbmob4,
    airbnbmob5,
    whatsapp,
    whatsapp1,
    whatsapp2,
    whatsapp3,
    whatsapp4,
    whatsapp5,
    whatsappmob1,
    whatsappmob2,
    whatsApp,
    webDesign,
    frontend,
    backendTech,
    webOpt,
    defination,
    planning,
    development,
    delivery,
    developmentProcess,
} from "../assets";

export const navLinks = [
    // {
    //     id: "",
    //     title: "Home",
    // },
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    // {
    //     id: "feedback",
    //     title: "Testimonials",
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    // {
    //     title: "Web Developer",
    //     icon: web,
    // },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
    {
        title: "Web Design",
        content: "Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.",
        img: webDesign,
    },
    {
        title: "Front-End Dev",
        content: "Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.",
        img: frontend,
    },
    {
        title: "Back-End Dev",
        content: "Building the server-side components and functionality of a website using  Node.js.",
        img: backendTech,
    },
    {
        title: "Web Optimization",
        content: "Improving website performance by optimizing page load times, and minimizing resource usage.",
        img: webOpt,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Next",
        icon: next,
    },
    {
        name: "Nuxt",
        icon: nuxt,
    },
    {
        name: "GitHub",
        icon: gitHub,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "mui",
        icon: mui,
    },
];

const experiences = [
    {
        title: "Internship",
        company_name: "Masai",
        icon: masai,
        iconBg: "#E6DEDD",
        date: "July 2021 - March 2022",
        points: [
            "Created multiple clones of different web application.",
            "Built authentication and integrated it with the front-end.",
            "Laid out the database schema and build the REST API for the same.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "Blowhorn",
        icon: blowhorn,
        iconBg: "#E6DEDD",
        date: "April 2022 - Present",
        points: [
            "Developing and maintaining web applications using Vue.js, Node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "FilmStudio",
        short: "A Movie Application",
        bg: "bg-[#5F9FFE]",
        description:
            "The Web-based Movie Catalog Platform is a dynamic and user-friendly website that provides movie enthusiasts with an immersive experience to explore, search, and stay updated on the latest movies.",
        // "Web-based platform that allows users to see, search, and get updates regarding the new and latest movies along with trailer cover pic and lot more info.",
        showcasePage: "/filmstudio",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material UI",
                color: "green-text-gradient",
            },
            // {
            //     name: "tailwind",
            //     color: "pink-text-gradient",
            // },
        ],
        image: filmstudio1,
        source_code_link: "https://github.com/git-abhijeet/Filmpire",
        live_project_link: "https://abhi-filmpire.netlify.app",
        showCase: {
            name: "FilmStudio",
            short: "A Movie Application",
            source_code_link: "https://github.com/git-abhijeet/Filmpire",
            live_project_link: "https://abhi-filmpire.netlify.app",
            content: [
                "I developed a web-based FilmStudio application, a movie platform that allows movie enthusiasts to explore a vast collection of movies, complete with teasers, trailers, posters, character details, and more.",
                "The tech stack used in this project includes React and JavaScript for code robustness, Material UI for creating custom UI components, and Redux for state management along with Redux Toolkit Query.",
                "Implementing the Redux store and Redux Toolkit Query was initially challenging, but I made steady progress by referring to various documentation and watching tutorial videos on YouTube. With dedicated effort, I gained a solid understanding of these tools and successfully completed the project.",
                "The main features allow users to explore a diverse range of movies, powered by TMDB's API from the Rapid API website, offering a vast selection of different APIs.",
                "Overall, I'm proud of this user-friendly FilmStudio platform that movie enthusiasts will enjoy.",
            ],
            problemStatement: "One of the significant challenges people face when seeking a movie to watch in their leisure time is uncertainty about the movie's quality, ratings, and reviews. Oftentimes, they end up choosing a film that turns out to be disappointing or uninteresting, leaving them with a sense of wasted time and regret for watching a lackluster movie.",
            images: {
                homepage: filmstudio1,
                tech: [reactjs, javascript, mui, html, css, redux],
                developmentProcess,
                problemStatement: filmstudio,
                myProcess: [defination, planning, development, delivery],
                figma: [filmstudio, filmstudio1],
                product: [filmstudio, filmstudio1, filmstudio2, filmstudio3, filmstudio4, filmstudiomob1, filmstudiomob2, filmstudiomob3, filmstudiomob4],
            },
            learnings: [
                "During the development process, I gained extensive knowledge of how to implement external APIs with API keys, enabling seamless integration of data and services from external sources.",
                "My frontend skills underwent significant improvement as I focused on writing efficient and optimized code, enhancing overall performance, and leveraging component reusability.",
                "I also learned the importance of maintaining a well-organized file and folder structure in the project, including setting up a Redux store and implementing Redux Toolkit Query for efficient API data fetching.",
                "Throughout the project, I honed my proficiency in ReactJS and successfully implemented various features while adhering to industry-standard best practices. This hands-on experience allowed me to deliver a user-friendly and robust application, showcasing the power and capabilities of ReactJS in building modern web applications.",
            ],
            challenges: [
                "During the development of this project, I faced several challenges that required thoughtful consideration and problem-solving. One of the main hurdles was selecting the appropriate tools and technologies for the project. I engaged in brainstorming sessions and carefully evaluated various options before making informed decisions.",
                "Working with Redux store and Redux Toolkit Query was a novel experience for me, and I encountered some difficulties while implementing their features. However, I dedicated time to learning and resolving these issues to ensure smooth integration and functionality.",
                "Additionally, the project had time constraints, which added pressure to deliver results within a specific timeframe. Despite this challenge, I managed my time effectively and prioritized tasks to meet the project's goals successfully.",
                "Throughout the process, I remained resilient and proactive in overcoming these obstacles, resulting in the delivery of a high-quality product. This experience has enriched my skills and problem-solving abilities, empowering me to tackle future projects with greater confidence."
            ],
        }
    },
    {
        name: "AirBnb (Clone)",
        short: "A House Rent Application",
        bg: "bg-[#56B0B9]",
        description:
            "Inspired by the popular Airbnb platform, this web-based Airbnb clone project allows users to explore and book a wide range of accommodations, including houses, villas, and more providing users with a personalized booking experience.",
        // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        showcasePage: "/airbnb",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: airbnb1,
        source_code_link: "https://github.com/git-abhijeet/airbnb_clone",
        live_project_link: "https://airbnb-clone-practice-project.vercel.app",
        showCase: {
            name: "AirBnb (Clone)",
            short: "A House Rent Application",
            source_code_link: "https://github.com/git-abhijeet/airbnb_clone",
            live_project_link: "https://airbnb-clone-practice-project.vercel.app",
            content: [
                "I developed a web-based Airbnb clone inspired by the popular platform. Users can explore and book various accommodations like houses and villas, offering a personalized booking experience.",
                "The project used a robust tech stack, including Next.js for server-side rendering and routing, TypeScript for code robustness, Prisma for simplified database management, MongoDB for scalability, Tailwind CSS for custom UI components, and Cloudinary for efficient image storage.",
                "Although TypeScript presented some initial challenges, I gained a solid understanding and successfully completed the project. To enhance security, I integrated GitHub and Google authentication for signup and login.",
                "The application's main features include accommodation exploration and bookings. Property owners can list their properties for rent, expanding the options available to users. The project delivers a seamless and user-friendly experience, and I'll continue to improve it based on user feedback.",
            ],
            problemStatement: "One of the main problems that people face when looking to rent an accomodation is the hassle of finding a reliable and user-friendly platform to search for and book rental accomodations. In addition, property owners who want to rent out their properties often struggle to find a suitable platform to list their properties and manage their rentals.",
            images: {
                homepage: airbnb1,
                tech: [next, typescript, tailwind, express, prisma, mongodb],
                developmentProcess,
                problemStatement: airbnb,
                myProcess: [defination, planning, development, delivery],
                figma: [airbnb, airbnbmob1],
                product: [airbnb, airbnb1, airbnb2, airbnb3, airbnb4, airbnb5, airbnb6, airbnb7, airbnbmob1, airbnbmob2, airbnbmob3, airbnbmob4, airbnbmob5],
            },
            learnings: [
                "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols.",
                "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
                "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure.",
                "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
            ],
            challenges: [
                "As i developed this project, i encountered various obstacles. One my biggest challenges was choosing the right tools and technologies for the project.",
                "I conducted brainstorming and carefully weighed my options before making a decision. Furthermore, using NextJS was a new experience for me, and i encountered difficulties while implementing its features. Finally, i had to work under time constraints, which added pressure to the project.",
                "However, i worked effectively to overcome these obstacles and ultimately delivered a high-quality product.",
            ],
        }
    },
    {
        name: "WhatsApp (Clone)",
        short: "A Chatting Application",
        bg: "bg-[#1F1D2B]",
        description:
            "The WhatsApp Clone is a web-based application that replicates the popular messaging platform, WhatsApp. It allows users to send text messages, make voice and video calls, and share media files with their contacts.",
        // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        showcasePage: "/whatsapp",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: whatsapp1,
        source_code_link: "https://github.com/git-abhijeet/whatsApp_clone",
        live_project_link: "https://whats-app-clone-delta.vercel.app",
        showCase: {
            name: "WhatsApp (Clone)",
            short: "A Chatting Application",
            source_code_link: "https://github.com/git-abhijeet/whatsApp_clone",
            live_project_link: "https://whats-app-clone-delta.vercel.app",
            content: [
                "I developed this web-based WhatsApp clone, drawing inspiration from the popular application WhatsApp Web. The project replicates the core functionalities of WhatsApp in a web-based version.",
                "For this project, I employed a robust tech stack, utilizing Next.js for server-side rendering and routing, JavaScript for ensuring code robustness, Prisma for simplified database management, MongoDB for scalability, Tailwind CSS for creating custom UI components, and socket.io for real-time chat functionality, among other tools.",
                "Although I encountered initial challenges with Prisma, and socket.io, I dedicated time and effort to grasp their concepts and successfully completed the project. To prioritize security, I integrated Google Firebase authentication for user signup and login, ensuring a secure user experience.",
                "The application boasts various key features, including live chatting, video calling, status indicators (online/offline), message status indicators (single tick, double tick, and blue tick for sent, received, and seen messages), and the ability to share media files like pictures, videos, and documents.",
                "Through this project, I expanded my knowledge and skills in web development and gained valuable experience in building feature-rich applications. The WhatsApp clone offers users an immersive chatting experience and serves as a testament to my expertise in frontend and backend technologies."
            ],
            problemStatement: "The project aimed to develop a web-based WhatsApp clone, replicating its core functionalities. Challenges were encountered while integrating Prisma and socket.io, but they were overcome through dedicated efforts. The application offers live chatting, video calling, and media sharing features, showcasing proficiency in frontend and backend technologies.",
            images: {
                homepage: whatsapp1,
                tech: [next, javascript, tailwind, express, prisma, mongodb],
                developmentProcess,
                problemStatement: whatsapp,
                myProcess: [defination, planning, development, delivery],
                figma: [whatsapp, whatsapp1],
                product: [whatsapp, whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp5, whatsappmob1, whatsappmob2],
            },
            learnings: [
                "Gained extensive knowledge of google firebase authentication and authorization implementation, including the use of industry-standard security protocols.",
                "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
                "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure.",
                "Learned the use of socket.io, zegocloud, cloudinary and lot more other plugins in this project",
                "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
            ],
            challenges: [
                "During the development of this project, I encountered several obstacles, with one of the biggest challenges being selecting the most suitable tools and technologies for the task at hand. To overcome this challenge, I conducted thorough brainstorming sessions and carefully evaluated various options before making informed decisions.",
                "Implementing socket.io and incorporating features like voice calls, video calls, and showing online/offline status presented new and unfamiliar territory for me. As a result, I faced difficulties while integrating these features into the application.",
                "However, I approached these challenges with determination and a strong will to learn. I extensively researched documentation and watched tutorial videos on YouTube to gain a solid understanding and expertise. This proactive approach allowed me to overcome these obstacles effectively and deliver a high-quality product.",
                "The project's successful completion not only showcases my ability to tackle complex technical challenges but also highlights my dedication to continuous learning and improvement as a developer."
            ],
        }
    },
];

const contactInfo = [
    {
        name: "Git",
        content: "github.com/git-abhijeet",
        icon: gitBlack,
    },
    {
        name: "LinkedIn",
        content: "www.linkedin.com/in/abhijeet-kumar-0238301bb/",
        icon: linkedin,
    },
    {
        name: "Email",
        content: "abhijeet.kr.chaurasiya@gmail.com",
        icon: mail,
    },
    {
        name: "Phone",
        content: "+91 9835-882-844",
        icon: call,
    }
]

export { services, technologies, experiences, testimonials, projects, contactInfo };