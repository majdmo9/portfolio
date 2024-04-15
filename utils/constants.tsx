import Img from "@/components/general/Img";

export type SkillsDataType = { [key: string]: { iconPath: string; title: string; description?: string } };

export const Skills_Data: SkillsDataType = {
  frontend: {
    iconPath: "/assets/icons/frontend.svg",
    title: "fe-dev",
    description: "fe-desc",
  },
  backend: {
    iconPath: "/assets/icons/backend.svg",
    title: "be-dev",
    description: "be-desc",
  },
  mobile: {
    iconPath: "/assets/icons/mobile.svg",
    title: "mobile-dev",
    description: "mobile-desc",
  },
  databases: {
    iconPath: "/assets/icons/database.svg",
    title: "db-dev",
    description: "db-desc",
  },
  responsive: {
    iconPath: "/assets/icons/responsive.svg",
    title: "responsive-dev",
  },
  agile: {
    iconPath: "/assets/icons/agile.svg",
    title: "agile-dev",
  },
  technical: {
    iconPath: "/assets/icons/technical.svg",
    title: "tech-support",
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
    <p className="font-medium text-lg" dir="ltr">
      +972 52-6894325
    </p>
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
