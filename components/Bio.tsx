"use client";
import { useDir } from "@/hooks/useDir";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";

const Bio = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { dir } = useDir();

  return (
    <div className="w-fit lg:pl-40 md:pl-4 pl-2 flex flex-col justify-center items-start h-full" dir={dir}>
      <div className="flex flex-col justify-center items-start w-full">
        <p className="text-sm lg:text-[1.8rem] mb-2 tracking-widest font-normal w-full leading-tight">{t("full-stack-dev")}</p>
        <h1 className="text-3xl lg:text-[4.5rem] lg:mb-2 mb-0 tracking-widest lg:font-bold font-demi outlined-text leading-none">
          {t("hello")} {isMobile ? <span>{t("im")}</span> : <></>}
        </h1>
        <h1 className="text-4xl max-w-[5ch] lg:max-w-[35ch] lg:text-[4.5rem] font-bold lg:leading-none leading-sung">
          {isMobile ? <></> : <span>{t("im")}</span>} {t("majd-mousa")}
        </h1>
      </div>
      <p className="text-xs lg:text-2xl lg:leading-8 leading-tight lg:mt-4 mt-1 z-10 p-0 lg:max-w-md max-w-[27ch]">{t("i-like-to-craft")}</p>
      <a href="/assets/files/Majd-Mousa-CV.pdf" target="_blank">
        <button className="text-xs lg:text-lg border border-1 border-white rounded-full lg:px-3 px-1 lg:mt-7 mt-3 before:ease relative overflow-hidden text-white shadow-xl transition-all before:absolute before:right-4 before:top-0 before:h-12 before:w-6 before:-translate-x-40 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:translate-x-40">
          {t("download-cv")} {">"}
        </button>
      </a>
    </div>
  );
};
export default Bio;
