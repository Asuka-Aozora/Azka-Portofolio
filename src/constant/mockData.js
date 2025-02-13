import {
  Gaming,
  Reading,
  SkillCss,
  SkillHtml5,
  SkillReact,
  SkillJavascript,
  SkillGithub,
  SkillRedux,
  Travelling,
  Wacthing,
  SkillTailwind,
  QodrBee,
  express,
  node,
} from "../assets/image";

const DATA = {
  InternExperiences: [
    {
      id: "intern_exp_1",
      startDate: "May 2024",
      endDate: "October 2024",
      project: "Frontend Web Developer",
      company: {
        logo: QodrBee,
        name: "PT Qodr Bee Berinovasi",
        info: "IT Consultant",
      },
      description:
        "Developed a Jira-like employee management application using React.js, which allows users to track tasks, collaborate in teams, and manage projects. Worked closely with the backend team to integrate REST APIs, ensuring the data displayed on the frontend is always up-to-date and consistent.",
      links: [
        {
          label: "View Website",
          url: "https://qodrbee.com/",
        },
      ],
    },
  ],
  projectExperiences: [
    {
      id: "proj_exp_1",
      project: "Final Project at Fast Campus",
      company: {
        name: "Mall Website",
        info: "E-commerce",
      },
      description:
        "Collaborated with a cross-functional team to redesign the front end of an e-commerce website, focusing on user experience and conversion rate optimization. Implemented responsive design principles to ensure optimal display on all devices. Utilized React.js and Redux to manage website state and user interactions effectively. Handled API fetching and data management to dynamically update website content.",
      links: [
        {
          label: "View Mall Website",
          url: "https://github.com/Asuka-Aozora/Ecomerce-fast-campus",
        },
      ],
    },
    {
      id: "proj_exp_2",
      project: "Personal Project",
      company: {
        logo: "https://github.com/Asuka-Aozora/ChatRoom",
        name: "Realtime Chat Room",
        info: "Chatting",
      },
      description:
        "Developed a real-time chat application using HTML, CSS, and JavaScript for the front end, and integrated Socket.IO for seamless real-time communication. Implemented Express.js for robust back-end server logic and management.",
      links: [
        {
          label: "View Chat Room",
          url: "https://github.com/Asuka-Aozora/ChatRoom",
        },
      ],
    },
    {
      id: "proj_exp_3",
      project: "Personal Project",
      company: {
        name: "Task Management App",
        info: "Task Management",
      },
      description:
        "Developed a task management application using HTML, CSS, and JavaScript for the front end to enable users to create, organize, and track their tasks efficiently. Incorporated CRUD (Create, Read, Update, Delete) functionality.",
      links: [
        {
          label: "View Task Management",
          url: "https://github.com/Asuka-Aozora/Task-Management",
        },
      ],
    },
    {
      id: "proj_exp_4",
      project: "Personal Project",
      company: {
        name: "Calculator App",
        info: "Calculator",
      },
      description:
        "Developed a calculator app featuring basic arithmetic operations and advanced functions (percentages, square roots). Utilized JavaScript's Math object for accurate calculations.",
      links: [
        {
          label: "View Calculator",
          url: "https://github.com/Asuka-Aozora/Calculator",
        },
      ],
    },
    {
      id: "proj_exp_5",
      project: "Personal Project",
      company: {
        name: "Weather App",
        info: "Weather",
      },
      description:
        "Developed a mini weather app with simple code, fetching real-time weather data from a public API using the Fetch API. Displays current weather conditions (temperature, humidity, wind speed, precipitation).",
      links: [
        {
          label: "View Weather App",
          url: "https://github.com/Asuka-Aozora/weather_app",
        },
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_exp_1",
      startDate: "October 2024",
      endDate: "January 2025",
      project: "Front End Web Developer",
      company: {
        logo: "https://fastcampus.com/favicon.ico",
        name: "Fast Campus",
        info: "Online Course",
      },
      description:
        "Fast campus is an independent in-house company of DAY1COMPANY in South Korea, specializing in digital skills such as software development, AI, design, and digital marketing, offering education in various formats from online to offline. Started as an entrepreneurial education startup in 2014, Fast campus has grown into a leading digital skills education institution in South Korea, with over 100 billion in revenue and over 400 employees.",
      links: [
        {
          label: "Fast Campus",
          url: "https://fastcampus.com/",
        },
      ],
    },
    {
      id: "edu_exp_2",
      startDate: "August 2024",
      endDate: "Ongoing",
      project: "Advance Training Web Development",
      company: {
        logo: "https://www.qodr.id/qodr_logo-only_outline.svg",
        name: "Qodr",
        info: "Islamic IT Training Board",
      },
      description:
        "Qodr is an Islamic IT training boarding school, offering offline courses specifically for training web development and UI/UX skills.",
      links: [
        {
          label: "Qodr",
          url: "https://www.qodr.id/",
        },
      ],
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup Language",
    },
    {
      id: "skill_2",
      icon: SkillCss,
      name: "CSS",
      description: "Cascading Style Sheet",
    },
    {
      id: "skill_3",
      icon: SkillTailwind,
      name: "Tailwind CSS",
      description: "Create UI With CSS Framework",
    },
    {
      id: "skill_4",
      icon: SkillJavascript,
      name: "JavaScript",
      description: "Functional and interactive",
    },
    {
      id: "skill_5",
      icon: SkillReact,
      name: "React JS",
      description: "JavaScript Library",
    },
    {
      id: "skill_6",
      icon: SkillRedux,
      name: "Redux",
      description: "State Management",
    },
    {
      id: "skill_7",
      icon: node,
      name: "Node JS",
      description: "JavaScript Runtime Environment",
    },
    {
      id: "skill_8",
      icon: express,
      name: "Express JS",
      description: "Node JS Framework",
    },
    {
      id: "skill_9",
      icon: SkillGithub,
      name: "GitHub",
      description: "Working Team With Version Control System",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: "https://fastcampus.com/favicon.ico",
      provider: "Fast Campus",
      course: "Front End Web Developer",
      startDate: "October 2024",
      endDate: "January 2025",
    },
    {
      id: "cert_award_2",
      icon: "https://www.qodr.id/qodr_logo-only_outline.svg",
      provider: "Qodr",
      course: "Advance Training Web Development",
      startDate: "August 2024",
      endDate: "Ongoing",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Wacthing,
      name: "Watching",
    },
  ],
};

export default DATA;

