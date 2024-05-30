import { Skills_Data } from "@/utils/constants";
import Img from "../general/Img";
import { useTranslation } from "react-i18next";
import { useDir } from "@/hooks/useDir";

const Skill = ({ skill, boldTitle = false }: { skill: string; boldTitle?: boolean }) => {
  const { t } = useTranslation();
  const { dir } = useDir();

  return (
    <div dir={dir} key={skill} className="flex w-full gap-4 items-center justify-start">
      <div className="flex justify-center items-center bg-[url('/assets/icons/circle.svg')] bg-auto bg-no-repeat bg-center min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-[50%]">
        <Img src={Skills_Data[skill].iconPath} width={20} height={20} alt="icon" />
      </div>
      <div className="flex flex-col">
        <p className={boldTitle ? "font-bold lg:text-lg text-sm" : "font-semibold text-sm lg:text-lg leading-none w-fit"} dir={dir}>
          {t(Skills_Data[skill].title)}
          {boldTitle ? "" : ":"}
        </p>
        <p className="lg:text-lg text-sm font-medium">{t(String(Skills_Data[skill].description ?? ""))}</p>
      </div>
    </div>
  );
};

export default Skill;
