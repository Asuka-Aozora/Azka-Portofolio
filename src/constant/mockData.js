import {
  Gaming,
  Reading,
  SkillCss,
  SkillHtml5,
  SkillReact,
  SkillJavascript,
  TypeScript,
  SkillGithub,
  SkillRedux,
  Travelling,
  Wacthing,
  SkillTailwind,
  SkillNextJs,
  express,
  node,
  PostgreSQL,
  MySQL,
  Supabase,
  Firebase,
  MongoDB,
} from "../assets/image";

const DATA = {
  InternExperiences: [
    {
      id: "intern_exp_1",
      startDate: "August 2025",
      endDate: "December 2025",
      role: "Mentor",
      company: {
        logo: "https://www.qodr.id/qodr_logo-only_outline.svg",
        name: "Qodr IT Training",
        info: "Islamic IT Training Boarding School",
      },
      type: "Freelance Developer, WFO",
      description:
        "Mentored junior developers in full-stack web development (Node.js, Express, JavaScript, Git workflow). Provided hands-on guidance in debugging, deployment, and system troubleshooting. Taught foundational IT support topics including LAN configuration and Linux administration. Fostered collaborative teamwork and problem-solving culture in real project environments.",
    },
    {
      id: "intern_exp_2",
      startDate: "May 2025",
      endDate: "July 2025",
      role: "Full-Stack Developer Intern",
      company: {
        logo: "",
        name: "PT. Qodr Bee Berinovasi",
        info: "Technology Company",
      },
      type: "Internship, Remote",
      description:
        "Worked as a Full-Stack Developer on internal application projects. Developed and deployed internal tools using Node.js, Express, PHP, and JavaScript. Assisted in server configuration and debugging during web deployments. Collaborated in a small agile team to deliver functional prototypes efficiently.",
    }
  ],
  projectExperiences: [
    {
      id: "proj_exp_1",
      project: "Teras Land - Property Landing Page",
      company: {
        logo: "",
        name: "Teras Land",
        info: "Real Estate Web Application",
      },
      description:
        "Developed a modern real estate landing platform using Next.js 15 (TypeScript), Tailwind CSS, and shadcn/ui. Implemented responsive layouts, optimized image loading, and accessibility best practices. Integrated Supabase authentication and real-time database synchronization. Deployed via Vercel with CI/CD and performance optimization.",
      links: [
        {
          label: "Teras Land",
          url: "https://teras-land-clone.vercel.app/",
        },
      ],
    },
    {
      id: "proj_exp_2",
      project: "E-Commerce Platform (Capstone Project)",
      company: {
        logo: "https://fastcampus.com/favicon.ico",
        name: "Fast Campus",
        info: "React E-Commerce Application",
      },
      description:
        "Built a complete e-commerce frontend implementing advanced React concepts including custom hooks and Redux state management. Designed reusable component architecture with Tailwind CSS. Integrated product, order, and authentication flows through mock APIs, focusing on maintainable and scalable UI structure.",
      links: [
        {
          label: "E-Commerce Platform",
          url: "https://github.com/Asuka-Aozora/Ecomerce-fast-campus",
        },
      ],
    },
    {
      id: "proj_exp_3",
      project: "Full-Stack Roadmap Platform",
      company: {
        logo: "",
        name: "Roadmap System",
        info: "Interactive Learning Platform",
      },
      description:
        "Developed interactive roadmap visualization with Next.js and dynamic API integration. Implemented server-side rendering, typed components with TypeScript, and relational data handling. Focused on scalable frontend architecture and optimized data-driven UI rendering.",
      links: [
        {
          label: "Full-Stack Roadmap Platform",
          url: "https://github.com/Asuka-Aozora/NextRoadmap",
        },
      ],
    },
    {
      id: "proj_exp_4",
      project: "Task Management Application",
      company: {
        logo: "",
        name: "Task Manager",
        info: "CRUD Web Application",
      },
      description:
        "Created task management system implementing full CRUD logic with structured state handling. Designed clean UI layout and optimized user interaction flow. Demonstrated fundamental understanding of data lifecycle and component re-render behavior.",
      links: [
        {
          label: "Task Management Application",
          url: "https://github.com/Asuka-Aozora/Task-Management",
        },
      ],
    },
    {
      id: "proj_exp_5",
      project: "E-Commerce Plugin for WordPress",
      company: {
        logo: "",
        name: "WordPress Plugin",
        info: "Business Logic System",
      },
      description:
        "Developed modular e-commerce plugin with seller dashboard, coupon system, stock management, and transaction tracking. Built structured database schema and reusable UI components using PHP and Vanilla JavaScript within WordPress ecosystem.",
      links: [
        {
          label: "E-Commerce Plugin for WordPress",
          url: "https://github.com/Asuka-Aozora/Konversi-Sejoli-Final",
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
      icon: TypeScript,
      name: "TypeScript",
      description: "JavaScript with static typing",
    },
    {
      id: "skill_6",
      icon: SkillReact,
      name: "React JS",
      description: "JavaScript Library",
    },
    {
      id: "skill_7",
      icon: SkillRedux,
      name: "Redux",
      description: "State Management",
    },
    {
      id: "skill_8",
      icon: node,
      name: "Node JS",
      description: "JavaScript Runtime Environment",
    },
    {
      id: "skill_9",
      icon: express,
      name: "Express JS",
      description: "Node JS Framework",
    },
    {
      id: "skill_10",
      icon: SkillGithub,
      name: "GitHub",
      description: "Working Team With Version Control System",
    },
    {
      id: "skill_11",
      icon: SkillNextJs,
      name: "Next JS",
      description: "React JS Framework",
    },
    {
      id: "skill_12",
      icon: PostgreSQL,
      name: "PostgreSQL",
      description: "Database Management System",
    },
    {
      id: "skill_13",
      icon: MySQL,
      name: "MySQL",
      description: "Relational Database Management System",
    },
    {
      id: "skill_14",
      icon: MongoDB,
      name: "MongoDB",
      description: "NoSQL Document-Oriented Database",
    },
    {
      id: "skill_15",
      icon: Supabase,
      name: "Supabase",
      description: "Open-source Firebase Alternative",
    },
    {
      id: "skill_16",
      icon: Firebase,
      name: "Firebase",
      description: "Cloud-based NoSQL Realtime Database",
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
      endDate: "August 2025",
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
