export const personalInfo = {
  name: "Madhav Gautam",
  headline: "Full-Stack Developer and AI-Driven Product Builder",
  tagline: "B.E. CSE student focused on building scalable web applications, intelligent systems, and impactful digital products that solve real-world student and business problems.",
  email: "gautam.madhav63@gmail.com",
  linkedin: "https://linkedin.com/in/madhav-gautam06",
  github: "https://github.com/madhavgautam25",
  resumeUrl: "/RESUME.pdf",
};

export const aboutText = [
  "I'm a 2nd-year B.E. Computer Science Engineering student at Chitkara University, driven by curiosity and a love for building things that matter.",
  "I specialize in full-stack web development using React, Node.js, and MongoDB, and enjoy working on IoT and AI-based projects that create practical impact.",
  "From smart agriculture systems to student-focused platforms, I love transforming ideas into functional products. Constantly learning, experimenting, and improving — I aim to grow as a software developer while solving meaningful problems with technology."

];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "REST APIs", icon: "" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
  {
    category: "AI Basics",
    items: [
      { name: "ML APIs", icon: "" },
      { name: "AI Integration", icon: "" },
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  status: "Completed" | "In Progress" | "Prototype";
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: "saarthi-platform",
    title: "SAARTHI Platform",
    description: "An all-in-one student productivity, placement preparation, and AI-powered guidance platform designed for college students.",
    longDescription: "SAARTHI is a comprehensive platform built to bridge the gap between academic learning and industry readiness. It combines AI-driven career guidance, placement preparation resources, productivity tools, and peer collaboration — all in one unified experience tailored for college students.",
    tech: ["React", "Node.js", "MongoDB", "AI APIs", "Express", "Tailwind CSS"],
    github: "https://github.com/madhavgautam/saarthi",
    demo: "#",
    features: [
      "AI-powered career path recommendations based on skills & interests",
      "Placement preparation module with coding challenges & mock interviews",
      "Student productivity dashboard with task management & goal tracking",
      "Peer-to-peer collaboration and discussion forums",
      "Resume builder with AI-assisted content suggestions",
    ],
    challenges: [
      "Integrating multiple AI APIs for intelligent recommendations",
      "Building a scalable architecture to handle concurrent users",
      "Designing an intuitive UX for diverse student needs",
    ],
    status: "In Progress",
    role: "Full Stack Developer & Project Lead",
    duration: "3 months",
  },
  {
    slug: "smart-soil-health-monitor",
    title: "Smart Soil Health Monitor with NPK Sensing and Solar Powered System",
    description: "A solar-powered IoT-based system that monitors soil nutrients (NPK), pH, moisture, and temperature in real time to help farmers optimize irrigation and fertilizer usage.",
    longDescription: "Smart Soil Health Monitor is an IoT-enabled, solar-powered agriculture solution designed to provide real-time insights into soil health. The system measures key parameters including NPK nutrients, pH level, soil moisture, and temperature using integrated sensors connected to an ESP32 microcontroller.",
    tech: ["ESP32", "Thingspeak - IOT platform", "NPK Sensor", "4-in-1 Soil pH Sensor Module"],
    github: "https://github.com/madhavgautam25/smart-soil-health-monitor-with-NPK-sensing-and-solar-powered-system",
    demo: "#",
    features: [
      "Real-time soil moisture, pH, and temperature monitoring",
      "Solar-powered sensor nodes for remote deployment",
      "Web dashboard with historical data visualization",
      "Alert system for critical soil condition changes",
      "Data-driven crop recommendation engine",
    ],
    challenges: [
      "Power optimization for solar-powered remote sensors",
      "Ensuring reliable data transmission in rural areas",
      "Calibrating sensors for accurate soil readings",
    ],
    status: "Completed",
    role: "IoT Developer & Frontend Lead",
    duration: "2 months",
  },
  {
    slug: "ai-career-advisor",
    title: "AI Career Advisor",
    description: "An AI-powered career guidance tool that provides personalized recommendations based on skills, interests, and market trends.",
    longDescription: "An intelligent career advisory system that analyzes a student's skills, interests, academic background, and current market trends to provide personalized career path recommendations. Uses OpenAI's API for natural language interactions and data-driven insights.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/madhavgautam/ai-career",
    demo: "#",
    features: [
      "Conversational AI interface for career counseling",
      "Skills assessment and gap analysis",
      "Industry trend analysis and job market insights",
      "Personalized learning path recommendations",
      "Resume and portfolio optimization tips",
    ],
    challenges: [
      "Fine-tuning AI prompts for accurate career advice",
      "Integrating real-time job market data",
      "Handling diverse career paths and edge cases",
    ],
    status: "Completed",
    role: "Full Stack Developer",
    duration: "6 weeks",
  },
  {
    slug: "d2c-ecommerce",
    title: "D2C Ecommerce Website",
    description: "A full-stack direct-to-consumer online store with product management, cart, checkout, and payment integration.",
    longDescription: "A complete direct-to-consumer ecommerce platform built from scratch with a focus on performance and user experience. Features include product catalog management, shopping cart, secure checkout with Stripe integration, order tracking, and an admin dashboard for inventory management.",
    tech: ["React", "Express", "MongoDB", "Stripe", "Node.js", "JWT Auth"],
    github: "https://github.com/madhavgautam/ecommerce",
    demo: "#",
    features: [
      "Product catalog with filtering, search, and categories",
      "Shopping cart with real-time price calculation",
      "Secure payment gateway integration with Stripe",
      "Order tracking and email notifications",
      "Admin dashboard for product and order management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Building a responsive product catalog with smooth UX",
      "Optimizing database queries for large product catalogs",
    ],
    status: "Completed",
    role: "Full Stack Developer",
    duration: "2 months",
  },
];

export const experiences = [
  {
    title: "Software Development Projects",
    org: "Personal & Academic Work",
    period: "2024 – Present",
    description: "Built multiple full-stack and frontend projects using React, Tailwind CSS, Node.js, Express, and MongoDB. Designed responsive user interfaces, implemented REST APIs, and worked on real-world problem statements including smart systems and student-focused platforms. Hands-on experience with Git/GitHub, debugging, and performance optimization."
  },

  {
    title: "Academic & Technical Experience",
    org: "B.E. CSE – Chitkara University",
    period: "2024 – Present",
    description: "Strong foundation in Data Structures, OOP, Operating Systems, and Web Development. Participated in technical events and hackathons, built IoT-integrated projects using ESP32 and sensors, and converted ideas into working prototypes."
  },
  {
    title: "Self Learning & Skill Development",
    org: "Independent Learning",
    period: "2024 – Present",
    description: "Continuously learning modern technologies through documentation, hands-on projects, and experimentation. Exploring AI tools and building intelligent systems like an AI Career Advisor while improving problem-solving skills through coding practice and mini projects."
  },

];

export const education = [
  {
    degree: "B.E. — Computer Science Engineering",
    institution: "Chitkara University, Punjab",
    period: "2024 — 2028",
    description: "Pursuing a Bachelor's in CSE with focus on software development, AI/ML fundamentals, and hands-on project-based learning.",
  },
  {
    degree: "CBSE — 10+2",
    institution : "Guru Nanak Foundation Public School, Patiala",
    period: "2023 — 2024",
    description: "Completed Class 12th with a focus on Science (PCM), building a strong foundation in mathematics, logical thinking, and problem-solving. Developed early interest in computer science and technology, which shaped my journey toward engineering.",
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
