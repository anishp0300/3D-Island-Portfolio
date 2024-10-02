import { Avid, sigma, sdsu, radicalai } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    // express,
    git,
    github,
    html,
    javascript,
    linkedin,
    // mongodb,
    // motion,
    // mui,
    // nextjs,
    nodejs,
    pricewise,
    react,
    // redux,
    // sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    // typescript,
    data,
    network,
    system,
    visual,
    android_studio,
    c,
    cpp,
    django,
    kotlin,
    linux,
    mysql,
    python,
    wireshark,
    aosp,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming",
    },
    {
        imageUrl: cpp,
        name: "C++.js",
        type: "Programming",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Programming",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },
    {
        imageUrl: aosp,
        name: "AOSP",
        type: "Operating System",
    },
    {
        imageUrl: android_studio,
        name: "Android Studio",
        type: "Development Environment",
    },
    {
        imageUrl: visual,
        name: "Visual Studio Code",
        type: "Development Environment",
    },
    {
        imageUrl: wireshark,
        name: "Wireshark",
        type: "Network Protocol Analyzer",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "RadicalAI",
        icon: radicalai,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Enhanced UX through refined UI components, ensuring seamless interaction and responsive design for ReX, an AI learning companion.",
            "Driving the feature development by collaborating with cross-functional teams, delivering new functionalities while ensuring clean and efficient code writing practices for superior performance.",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "San Diego State University",
        icon: sdsu,
        iconBg: "#fbc3bc",
        date: "Dec 2023 - May 2024",
        points: [
            "Led the design and construction of an advanced swarm drone interface and a custom network, achieving enhanced inter-drone capabilities.",
            "Achieved a perfect 100% detection rate for packets dropped by pioneering communication protocols for packet loss analysis to ensure data integrity.",
            "Oversaw the research of advanced modulation techniques to optimize packet transmission, improving overall communication efficiency by 40%.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Sigma Connectivity Inc.",
        icon: sigma,
        iconBg: "#bbbbbb",
        date: "June 2023 - Sept 2023",
        points: [
            "Led the development of a network usage logging application, improving real-time data visualization on Android devices by designing UI/UX.",
            "Designed and implemented a circular buffer driver as a system service using Java Native Interface (JNI) and Hardware Abstraction Layer (HAL) by expanding AOSP APIs, resulting in efficient data handling and reduced memory usage.",
            "Integrated custom Kernel sources into AOSP, replacing the default Kernel, strategically enhancing and boosting Android system stability and performance.",
        ],
    },
    {
        title: "Hardware-Firmware Engineering Intern",
        company_name: "Avid Technology",
        icon: Avid,
        iconBg: "#accbe1",
        date: "Oct 2020 - June 2021",
        points: [
            "Directed end-to-end development of a Heads-Up Display (HUD) for EVs, leveraging Bluetooth Low Energy (BLE) for connectivity.",
            "Championed the design, testing and prototyping of PCBs, setting new quality benchmarks and increasing assembly efficiency by 10%",
            "Engineered maintainable code to streamline firmware operations, optimizing performance and UX",
            "Developed a user-centric mobile application to enhance UI/UX, ensuring seamless connectivity with the HUD via phone.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anishp0300',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anish-puranik',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme:'btn-back-blue',
        name: '3D Portfolio Website',
        description:'This is a 3D portfolio website created using Three.js and React Three Fiber. Implemented various 3D models for this website.',
        link: 'https://github.com/anishp0300/3D-Island-Portfolio',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Optiman Midair Refueling Optimization',
        description: 'This project formulates minimizing the total time taken to complete airbourne missions maximizing success rate.',
        link: 'https://github.com/anishp0300',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Interactive Chat Bot',
        description: 'Built a real-time, AI-powered chat application, featuring dynamic activity dashboard.',
        link: 'https://github.com/anishp0300/cosmoui',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Hybrid Cluster Tree with AODV Routing',
        description: 'Designed a wireless sensor network using Cluster Tree Model and integrated AODV routing for improved adaptability.',
        link: 'https://github.com/anishp0300',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'SDSUEats Ordering Platform',
        description: 'This project streamlines food ordering for SDSU students.',
        link: 'https://github.com/anishp0300',
    },
    {
        iconUrl: system,
        theme: 'btn-back-yellow',
        name: 'Creating a System Service on Android (AOSP)',
        description: 'This project showcases how to create a System Service on modified AOSP- 11.0.0_r48 wrapped inside a manager style class.',
        link: 'https://github.com/anishp0300/Create-System-Service',
    },
    {
        iconUrl: network,
        theme: 'btn-back-orange',
        name: 'Network Analyzer (AOSP)',
        description: 'This Android application allows users to view network information and download the network statistics to a text file.',
        link: 'https://github.com/anishp0300/Network_Analyzer',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Chatroom using Python Socket Programming',
        description: 'This project showcases a multi-client chat server with a UI designed for Linux and Mac terminals.',
        link: 'https://github.com/anishp0300/Chatroom',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Cadence MOS Simulation',
        description: 'Designed CMOS logic to implement gates using pseudo NMOS and pass transistor logic and conducted a comparitive analysis.',
        link: 'https://github.com/anishp0300',
    },
    {
        iconUrl: data,
        theme: 'btn-back-black',
        name: 'Fetching JSON Data From a URL on Android Applications',
        description: 'This project hosts a simple UI for an Android app that can fetch JSON data from a provided URL from the web.',
        link: 'https://github.com/anishp0300/Fetching-JSON-data-from-URL',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Multi- Purpose Rover',
        description: 'This project demonstrates the build of a rover that surveys and monitors conditions of remote places.',
        link: 'https://github.com/anishp0300',
    },
];