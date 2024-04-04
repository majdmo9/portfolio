import React from "react";
import Img from "../general/Img";
import { Skills_Data } from "@/utils/constants";

const Skill = ({ skill, boldTitle = false }: { skill: string; boldTitle?: boolean }) => {
  return (
    <div key={skill} className="flex w-full gap-4 items-center justify-start">
      <div className="flex justify-center items-center bg-[url('/assets/icons/circle.svg')] bg-auto bg-no-repeat bg-center min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-[50%]">
        <Img src={Skills_Data[skill].iconPath} width={20} height={20} alt="icon" />
      </div>
      <div className="flex flex-col">
        <p className={boldTitle ? "font-bold lg:text-lg text-sm" : "font-medium text-sm lg:text-lg leading-none"}>
          {Skills_Data[skill].title}
          {boldTitle ? "" : ":"}
        </p>
        <p className="lg:text-lg text-sm font-demi">{Skills_Data[skill].description}</p>
      </div>
    </div>
  );
};

export default Skill;
