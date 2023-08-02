import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  logoSvgYv,
  theAgent,
  softmag,
  wallet,
  theAgentScreen,
  walletScreen,
  profilePart,
  threejs,
  natali,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "mui",
    icon: mui,
  },
  // {
  //   name: "sass",
  //   icon: sass,
  // },
];

const experiences = [
  {
    title: "Softmag",
    company_name: "HTML, CSS, Js, Sketch",
    icon: softmag,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Feb 2022",
    points: [
      "Participation in the development and support of the online store Softmag.com.ua. ",
      "Content creator.",
    ],
  },
  {
    title: "The Agent",
    company_name: "HTML, SASS, JS",
    icon: theAgent,
    iconBg: "#383E56",
    date: "December 2022 - January 2023",
    points: [
      "Website from scratch.",
      "Business card website for the French company The Agent in 2 languages, English and French.",
    ],
  },

  {
    title: "Wallet | team project",
    company_name: "HTML, CSS, JS, REST API, AJAX, Webpack, React, React Redux",
    icon: wallet,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Feb 2023",
    points: [
      "Home budget app.",
      "App component with Public and Private routes, AuthPage page logic.",
      "creating a Redux store, developing table functionality on the home page.",
    ],
  },
  {
    title: "Profile | pet project ",
    company_name: "HTML, CSS, JS, AJAX, Webpack, React, MUI",
    icon: logoSvgYv,
    iconBg: "#383E56",
    date: "June 2023 - June 2023",
    points: [
      "Participation in the development of the application, I realized the part that relates to Profile and navigation.",
      "Responsive design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yaroslav and I worked on a React project where he was a team leader. He did an excellent job as a team leader - the team always had his support. Being a great team player, he also has a high level of React, Redux, JS, CSS and HTML. Parts of his code worked perfectly. Responsible, friendly.",
    name: "Nataliia Povalii",
    designation: "",
    company: "",
    image: natali,
    profile_link: "https://www.linkedin.com/in/natalia-povaliy/",
  },
];

const projects = [
  {
    name: "The Agent",
    description:
      "A business card site for a French campaign, the purpose of the project : presentation of the team that promotes new brands on the most famous marketplaces.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: theAgentScreen,
    source_code_link: "https://github.com/Genokrad/the-agent",
    io_code_link: "https://www.theagent.com/en/",
  },
  {
    name: "Wallet",
    description:
      "An application for calculating the budget, tracking your balance for a month, information is stored on the server, User authentication is implemented.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },

      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      },

      {
        name: "AJAX",
        color: "blue-text-gradient",
      },
      {
        name: "React Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Webpack",
        color: "green-text-gradient",
      },
    ],
    image: walletScreen,
    source_code_link: "https://github.com/Genokrad/walletProject",
    io_code_link: "https://genokrad.github.io/walletProject",
  },
  {
    name: "Profile",
    description:
      "This is just a part of the big user interface. Project for accounting. The presented part of it is involved in setting up a user profile.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "AJAX",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
      {
        name: "Webpack",
        color: "green-text-gradient",
      },
    ],
    image: profilePart,
    source_code_link: "https://github.com/Genokrad/profile-page-mui",
    io_code_link: "https://genokrad.github.io/profile-page-mui/profile",
  },
];

export { services, technologies, experiences, testimonials, projects };
