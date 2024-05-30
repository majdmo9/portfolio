import { Skills_Data_Titles } from "@/utils/constants";
import Skill from "./Skill";
import useIsMobile from "@/hooks/useIsMobile";
import { useDir } from "@/hooks/useDir";

const Skills = () => {
  const { dir } = useDir();
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="bg-[#29235C] flex justify-center h-full p-12 lg:p-24 gap-24 items-center">
        <div className="flex gap-4 max-w-4xl flex-col">
          {Skills_Data_Titles.slice(0, 4).map(skill => (
            <Skill skill={skill} key={skill} />
          ))}{" "}
          {Skills_Data_Titles.slice(4).map(skill => (
            <Skill skill={skill} boldTitle key={skill} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div dir={dir} className="bg-[#29235C] flex justify-center h-full p-24 gap-24 items-center">
      <div className="flex gap-4 max-w-4xl flex-col">
        {Skills_Data_Titles.slice(0, 4).map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      <div className="flex gap-4 max-w-4xl flex-col">
        {Skills_Data_Titles.slice(4).map(skill => (
          <Skill key={skill} skill={skill} boldTitle />
        ))}
      </div>
    </div>
  );
};

export default Skills;
