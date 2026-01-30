import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full-Stack Software Engineer",
    company: "Imblem",
    startDate: "August 2025",
    isCurrentJob: true,
    location: "united states, america",
    description: [
      "Working on a large-scale investment platform with a focus on secure, scalable full-stack architecture.",
      "Developing investor onboarding flows, dashboards, and long-term royalty distribution systems.",
      "Collaborating with product and compliance teams to deliver reliable, production-ready features.",
      "Implementing backend services, database logic, and third-party integrations with strong security standards.",
    ],
  },
  {
    designation: "Full-Stack Web Engineer",
    company: "Healthcare Software Solutions",
    startDate: "March 2024",
    endDate: "August 2024",
    isCurrentJob: false,
    location: "united states, america",
    description: [
      "Developed and maintained a web-based system for hospital reception and information displays.",
      "Built real-time, privacy-focused interfaces to present anonymous patient status updates.",
      "Worked on admin dashboards for hospital staff using modern web technologies.",
      "Ensured performance, reliability, and compliance with data-protection requirements.",
    ],
  },
  {
    designation: "Software Engineer (AI & Automation)",
    company: "DigitalAgent",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Contributed to an AI-driven training and productivity platform for workplace environments.",
      "Worked on automation features including AI-based voice call reminders and task scheduling.",
      "Collaborated with cross-functional teams to integrate AI components into user workflows.",
      "Focused on scalability, user experience, and real-world usability of AI-powered features.",
    ],
  },
  {
    designation: "Full-Stack Web Developer",
    company: "Avihire",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Developed and maintained a niche job board platform for the aviation industry.",
      "Built employer and user dashboards with secure authentication and role-based access.",
      "Implemented paid plans and job promotion features to support platform monetization.",
      "Ensured responsive design, performance optimization, and smooth user experience.",
    ],
  },
    {
    designation: "Full-Stack Developer",
    company: "WeDeal",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Worked on a full-scale ecommerce platform handling a large catalog of grocery products.",
      "Developed product management, order processing, and inventory tracking systems.",
      "Built admin dashboards for managing users, orders, and stock levels efficiently.",
      "Optimized frontend and backend performance for scalability and SEO readiness.",
    ],
  },
];

export default experiences;
