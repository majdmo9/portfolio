import { useTranslation } from "react-i18next";
import { Qualifications_Paths } from "@/utils/constants";
import Img from "./general/Img";
import useIsMobile from "@/hooks/useIsMobile";

const Qualifications = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  if (!isMobile) {
    return (
      <>
        <p className="font-bold text-[#29235C] lg:text-4xl text-2xl">{t("qualifications")}</p>
        <div className="flex justify-center items-center lg:gap-12 gap-5 flex-wrap">
          {Qualifications_Paths.map(qualification => (
            <Img
              key={qualification}
              alt="qualifications"
              width={isMobile ? 50 : 80}
              height={isMobile ? 50 : 80}
              src={qualification}
              className="transition duration-300 ease-in-out hover:scale-110"
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <p className="font-bold text-[#29235C] lg:text-4xl text-2xl">{t("qualifications")}</p>
      <div className="relative flex flex-col gap-4">
        <div className="flex justify-center items-center lg:gap-12 gap-5 flex-wrap">
          {Qualifications_Paths.slice(0, 4).map(qualification => (
            <Img
              key={qualification}
              alt="qualifications"
              width={isMobile ? 50 : 80}
              height={isMobile ? 50 : 80}
              src={qualification}
              className="transition duration-300 ease-in-out hover:scale-110"
            />
          ))}
        </div>
        <div className="flex justify-center items-center lg:gap-12 gap-5 flex-wrap">
          {Qualifications_Paths.slice(4).map(qualification => (
            <Img
              key={qualification}
              alt="qualifications"
              width={isMobile ? 50 : 80}
              height={isMobile ? 50 : 80}
              src={qualification}
              className="transition duration-300 ease-in-out hover:scale-110"
            />
          ))}
        </div>
        {isMobile ? (
          <Img
            alt="grid"
            src="/assets/svg/grid.svg"
            width={270}
            height={350}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Qualifications;
