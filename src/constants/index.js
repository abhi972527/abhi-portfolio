import {
    mobile,
    backend,
    creator,
    web,
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
    airbnb,
    whatsapp,
    whatsApp,
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
        id: "project",
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
        content: "Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices."
    },
    {
        title: "Front-End Dev",
        content: "Implementing the client-side functionality of a website using HTML, CSS, and JavaScript."
    },
    {
        title: "Back-End Dev",
        content: "Building the server-side components and functionality of a website using  Node.js."
    },
    {
        title: "Web Optimization",
        content: "Improving website performance by optimizing page load times, and minimizing resource usage."
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
];

const experiences = [
    {
        title: "Internship",
        company_name: "Masai",
        icon: masai,
        iconBg: "#383E56",
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
        image: filmstudio,
        source_code_link: "https://github.com/git-abhijeet/Filmpire",
        live_project_link: "https://abhi-filmpire.netlify.app",
    },
    {
        name: "AirBnb (Clone)",
        short: "A House Rent Application",
        bg: "bg-[#56B0B9]",
        description:
            "Inspired by the popular Airbnb platform, this web-based Airbnb clone project allows users to rent, explore and book a wide range of accommodations, including apartments, houses, villas, and more providing users with a unique and personalized accommodation booking experience.",
        // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        image: airbnb,
        source_code_link: "https://github.com/git-abhijeet/airbnb_clone",
        live_project_link: "https://airbnb-clone-practice-project.vercel.app",
    },
    {
        name: "WhatsApp (Clone)",
        short: "A Chatting Application",
        bg: "bg-[#1F1D2B]",
        description:
            "The WhatsApp Clone is a web-based application that replicates the popular messaging platform, WhatsApp. It allows users to send text messages, make voice and video calls, and share media files with their contacts.",
        // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        image: whatsapp,
        source_code_link: "https://github.com/git-abhijeet/whatsApp_clone",
        live_project_link: "https://whats-app-clone-delta.vercel.app",
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