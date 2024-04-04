export type SkillsDataType = { [key: string]: { iconPath: string; title: string; description?: string } };

export const Skills_Data: SkillsDataType = {
  frontend: {
    iconPath: "/assets/icons/frontend.svg",
    title: "Frontend Development",
    description: "(HTML, CSS, TypeScript, React)",
  },
  backend: {
    iconPath: "/assets/icons/backend.svg",
    title: "Backend Development",
    description: "(RESTful API, Node.js, Express.js, FastAPI)",
  },
  mobile: {
    iconPath: "/assets/icons/mobile.svg",
    title: "Mobile Development",
    description: "(React Native, Expo)",
  },
  databases: {
    iconPath: "/assets/icons/database.svg",
    title: "Databases",
    description: "(Firebase, Redis, MongoDB, MySQL)",
  },
  responsive: {
    iconPath: "/assets/icons/responsive.svg",
    title: "Responsive Design",
  },
  agile: {
    iconPath: "/assets/icons/agile.svg",
    title: "Agile Methodology Proficiency",
  },
  technical: {
    iconPath: "/assets/icons/technical.svg",
    title: "Technical Support",
  },
};

export const Skills_Data_Titles = ["frontend", "backend", "databases", "mobile", "responsive", "agile", "technical"];

export const Qualifications_Paths = [
  "/assets/icons/ts.svg",
  "/assets/icons/python.svg",
  "/assets/icons/react.svg",
  "/assets/icons/nodejs.svg",
  "/assets/icons/cs.svg",
  "/assets/icons/php.svg",
  "/assets/icons/sql.svg",
  "/assets/icons/json.svg",
];

export const INFO = [
  { iconPath: "/assets/icons/phone.svg", title: "+972 52-6894325" },
  { iconPath: "/assets/icons/mail.svg", title: "info@majdmousa.com" },
  { iconPath: "/assets/icons/web.svg", title: "www.majdmousa.com" },
];
