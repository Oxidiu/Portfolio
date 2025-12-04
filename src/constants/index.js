import {
  aws,
  apache,
  bash,
  bitbucket,
  cas,
  css,
  develhope,
  docker,
  git,
  gitlab,
  grafana,
  html,
  javascript,
  jenkins,
  linux,
  logo,
  lumeaElfilor,
  magento,
  mariadb,
  nginx,
  nodejs,
  pancakeswap,
  portfolio,
  postgresql,
  prometheus,
  reactjs,
  startech,
  susurulApei,
  tailwind,
  threejs,
  typescript,
  udemy,
  web,
  } from "../assets";

  export const colorCyan = "#7fdbff"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "CSS Styling",
      icon: css,
    },
    {
      title: "React.js Frontend",
      icon: reactjs,
    },
    {
      title: "Node.js Backend",
      icon: nodejs,
    },

  ];

  const technologies = [
    {
      name: "AWS" ,
      icon: aws,
    },
    {
      name: "Apache",
      icon: apache,
    },
    {
      name: "Bash",
      icon: bash,
    },
    // {      name: "Bitbucket",
    //   icon: bitbucket,
    // },
    {
      name: "CAS",
      icon: cas,
    },
    {      name: "Docker",
      icon: docker,
    },
    {      name: "Grafana",
      icon: grafana,
    },
    {      name: "GitLab",
      icon: gitlab,
    },
    {      name: "Jenkins",
      icon: jenkins,
    },
    {      name: "Linux",
      icon: linux,
    },
    {      name: "Magento",
      icon: magento,
    },
    {      name: "MariaDB",
      icon: mariadb,
    },
    {      name: "Nginx",
      icon: nginx,
    },
    {      name: "Prometheus",
      icon: prometheus,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },

    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "PostgreSQL",
    //   icon: postgresql,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },

  ];

  const experiences = [
    {
      title: "Independent research",
      company_name: "Self driven",
      icon: logo,
      iconBg: "#383E56",
      date: "Jul 2022 - Dec 2022",
      points: [
        "Researched about programming online",
        "Followed various courses I found online for HTML and CSS",
        "Exercised basic HTML and CSS",
        "Started the Github account",
      ],
    },
    {
      title: "Comptia ITF+",
      company_name: "Startech Academy",
      icon: startech,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Learnt the IT Fundamentals: IT history, infrastructure, basic concepts",
        "Learnt how to configure operating systems and networks",
        "Learnt how the internet works",
      ],
    },
    {
      title: "Full-Stack Developer Certification",
      company_name: "Develhope Academy",
      icon: develhope,
      iconBg: "#383E56",
      date: "Mar 2023 - Aug 2023",
      points: [
        "Learnt how to use HTML, CSS and JavaScript",
        "Learnt Sass, and Typescript",
        "Learnt how to use React.js for frontend and Node.js for backend",
        "Learnt how to use GIT and Github for source control and to collaborate with teammates",
        "Collaborated with colleagues on a project to clone a site from scratch using the learnt technologies",
      ],
    },
    {
      title: "MERN-Stack Developer Certification",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "Feb 2024 - On going",
      points: [
        "Learning the MERN stack (ReactJS, ExpressJS, MongoDB)",
        "Learning the user authentication using the JSON web tokens",
        "Learning how to add payments to the webpage",
        "Learning how to use a database for storing the data",
        "Learning how to use the React Bootstrap",
      ],
    },


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
      name: "Develhope Project",
      description:
        "This is the project I worked on together with my teammates Oğuzhan Akçalı and Anna Zhykol during the Ful-Stack Developer certification course I followed at Develhope Academy. This is a clone to an existing website where we have used all the skills we have acquired during the study.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: pancakeswap,
      source_code_link: "https://github.com/okcl/React-App-Team2",
      live_page_link: "https://pancakeswap-seven.vercel.app/",
    },
    {
      name: "Portfolio site",
      description:
        "The actual portfolio site you are browsing right now is made in its entirety by myself. I have used the React.js and Three.js for the appearance and 3D objects and Tailwind for the appearance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tree",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Oxidiu/Portfolio",
      live_page_link: "https://ovidiuradu.vercel.app/"
    },
    {
      name: "Susurul Apei",
      description:
        "This is my first real project for a client. I am designing a promoting website with booking features. This project is still in progress, I am currently working at the homepage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: susurulApei,
      source_code_link: "https://github.com/Oxidiu/susurul-apei",
      live_page_link: "https://susurul-apei.vercel.app/"
    },
    {
      name: "Lumea Elfilor",
      description:
        "This project is a simple website for an elf who sells magic items in the forest. Haha kidding :)) I develop this website as part of an on going udemy course where I learn the MERN stack (MongoDB, Express.js, React.js, Node.js). It is an e-commerce website where users will be able to browse through the products, add products to the cart, add shipping details, place the order and make payments via PayPall or debit card. They will also be able to sign up or sign in with JSON web tokens, and encrypted passwords in the database, the admin will be able to delete or modify the user profiles from within the website.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "JSON webtokens",
          color: "green-text-gradient",
        },
        {
          name: "react bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: lumeaElfilor,
      source_code_link: "https://github.com/Oxidiu/lumea-elfilor",
      live_page_link: "https://lumea-elfilor.onrender.com/"
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
