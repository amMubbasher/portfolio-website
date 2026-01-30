import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "investment-management-platform",
    title: "Investment Management Platform",
    description:
      "A full-stack investment web platform with secure onboarding, dashboards, and automated profit distribution systems.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/investment-management-platform.mp4",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "hospital-reception-system",
    title: "Hospital Reception System",
    description:
      "A web-based hospital information system designed to show real-time, anonymous patient status updates.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/hospital-reception-system.mp4",
    tags: ["Next.js", "Redux", "Tailwind CSS", "Node.js"],
  },
  {
    id: "ai-training-voice-reminder-platform",
    title: "AI Training & Voice Reminder Platform",
    description:
      "An AI-powered productivity platform featuring automated voice-call reminders and intelligent training workflows.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/ai-training-voice-reminder-platform.mp4",
    tags: ["React", "Node.js", "AI APIs", "Automation Tools"],
  },
  {
    id: "aviation-job-board-platform",
    title: "Aviation Job Board Platform",
    description:
      "A niche job board connecting aviation professionals with employers through paid listings and dashboards.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/aviation-job-board-platform.mp4",
    tags: ["Nestjs", "Node.js", "PostgreSQL"],
  },
  {
    id: "grocery-ecommerce-platform",
    title: "Grocery Ecommerce Platform",
    description:
      "A scalable ecommerce web application for managing grocery products, orders, inventory, and customers.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/grocery-ecommerce-platform.mp4",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "digital-marketing-for-business",
    title: "Digital Marketing for Businesses",
    description:
      "A results-driven digital marketing solution focused on increasing traffic, leads, and online sales through targeted strategies.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/digital-marketing-for-business.png",
    tags: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    id: "workflow-automation-system",
    title: "Workflow Automation System",
    description:
      "A business automation solution designed to streamline marketing and operational workflows.",
    icon: "/skills/n8n.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "./videos/workflow-automation-system.mp4",
    tags: ["n8n", "Zapier", "GoHighLevel", "make.com", "APIs"],
  },
];
export default projects;
