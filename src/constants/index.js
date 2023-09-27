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
  babushkaFlower,
  plastArt,
  BabushaWeb,
  plastArtSite,
  superHeroWeb,
  maria,
  sergiy,
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
  {
    title: "Babushka weather wisdom",
    company_name: "HTML, CSS, JS, AJAX, React, Redux TK, VITE",
    icon: babushkaFlower,
    iconBg: "#E6DEDD",
    date: "August 2023 - August 2023",
    points: [
      "Weather app.",
      "An application for viewing the weather for today, tomorrow and the whole week. Implemented change of measurement, weather adjusted using external API.",
    ],
  },
  {
    title: "PlastArt",
    company_name: "HTML, CSS, JS, Parcel",
    icon: plastArt,
    iconBg: "#383E56",
    date: "September 2023 - September 2023",
    points: [
      "Full-fledged website for a plastic surgery clinic.",
      "Functionality of active elements is realised with the help of js, SASS is used as CSS preprocessor.",
    ],
  },
  {
    title: "SuperHero | pet project",
    company_name:
      "HTML, CSS, JS, Webpack, Node.js, Express, React, Redux TK, REST API, AJAX. ",
    icon: logoSvgYv,
    iconBg: "#E6DEDD",
    date: "September 2023 - September 2023",
    points: [
      "A database of superheroes and the frontend to it.",
      "All CRUD operations are available, namely: get heroes, get by id, delete by id, update by id. React-router-dom is used to implement page routing, each hero is opened by its own id.",
      "Pagination is realised both on backend and frontend side",
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
  {
    testimonial:
      "I have had the great pleasure of collaborating with Yaroslav on several projects and I can confidently say he is a highly skilled developer. He is always willing to put in extra effort to complete the tasks and stands out with a high level of motivation and reliability. Furthermore, his technical knowledge is impressive, and he quickly grasps complex concepts, applying them effectively in his work. Working with Yaroslav has been a genuine pleasure. I highly recommend him as an excellent colleague and professional.",
    name: "Mariia Konopikhina",
    designation: "",
    company: "",
    image: maria,
    profile_link: "https://www.linkedin.com/in/mariia-konopikhina-21ba36261/",
  },
  {
    testimonial:
      "I worked with Yaroslav on three team projects, in the first project Yaroslav acted as a Scrum master/developer, and in the second he acted as a Team lead/developer, I can say with confidence that he completed the tasks 100%! He showed good knowledge of React and JavaScript. Always ready to help in a difficult situation and suggest a solution to many issues. It was comfortable for me to work in a team with Yaroslav.",
    name: "Serhii Kutovyi",
    designation: "",
    company: "",
    image: sergiy,
    profile_link: "https://www.linkedin.com/in/serhii-kutovyi/",
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
    source_code_link: "https://www.theagent.com/en/",
    io_code_link: "https://github.com/Genokrad/the-agent",
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
    source_code_link: "https://genokrad.github.io/walletProject",
    io_code_link: "https://github.com/Genokrad/walletProject",
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
    source_code_link: "https://genokrad.github.io/profile-page-mui/profile",
    io_code_link: "https://github.com/Genokrad/profile-page-mui",
  },
  {
    name: "Babushka weather wisdom",
    description:
      "An application for viewing the weather for today, tomorrow and the whole week. Implemented change of measurement, weather adjusted using external API.",
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
      {
        name: "AJAX",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux TK",
        color: "pink-text-gradient",
      },
      {
        name: "VITE",
        color: "blue-text-gradient",
      },
    ],
    image: BabushaWeb,
    source_code_link: "https://genokrad.github.io/babushka_weather/",
    io_code_link: "https://github.com/Genokrad/babushka_weather",
  },
  {
    name: "PlastArt",
    description:
      "Full-fledged website for a plastic surgery clinic. Functionality of active elements is realised with the help of js, SASS is used as CSS preprocessor.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Parcel",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: plastArtSite,
    source_code_link:
      "https://genokrad.github.io/parcel-beauty-proj/main-page.html",
    io_code_link: "https://github.com/Genokrad/parcel-beauty-proj",
  },
  {
    name: "PlastArt",
    description:
      "A database of superheroes and the frontend to it. All CRUD operations are available, namely: get heroes, get by id, delete by id, update by id. React-router-dom is used to implement page routing, each hero is opened by its own id.Pagination is realised both on backend and frontend side",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Webpack",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Redux TK",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
    ],
    image: superHeroWeb,
    source_code_link: "https://github.com/Genokrad/SuperHeroFrontend",
    io_code_link: "https://github.com/Genokrad/superHero",
  },
];

export { services, technologies, experiences, testimonials, projects };
