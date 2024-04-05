import Img from "@/components/general/Img";

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
  <div key="1" className="flex justify-start items-center gap-2">
    <Img alt="info-icon" width={16} height={16} src="/assets/icons/phone.svg" />
    <p className="font-medium text-lg">+972 52-6894325</p>
  </div>,

  <div key="2" className="flex justify-start items-center gap-2">
    <Img alt="info-icon" width={16} height={16} src="/assets/icons/mail.svg" />
    <a href="mailto: info@majdmousa.com" className="font-medium text-lg">
      info@majdmousa.com
    </a>
  </div>,
  <div key="3" className="flex justify-start items-center gap-2">
    <Img alt="info-icon" width={16} height={16} src="/assets/icons/web.svg" />
    <a href="https://www.majdmousa.com" target="_blank" className="font-medium text-lg">
      www.majdmousa.com
    </a>
  </div>,
];
