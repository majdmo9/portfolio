import { useDir } from "@/hooks/useDir";
import animatedLaptop from "@/public/assets/animations/laptop.json";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutMe = () => {
  const { t } = useTranslation();
  const { dir } = useDir();

  return (
    <div className="relative flex flex-col lg:flex-row max-h-128 justify-between lg:items-start items-center xl:py-20 py-10">
      <div className="2xl:max-w-[70ch] md:max-w-[60ch] max-w-[35ch] lg:pl-10 mb-2" dir={dir}>
        <p className="text-sm lg:text-lg lg:leading-7 leading-tight font-thin lg:tracking-widest">
          <span className="font-bold">{t("as")}</span> {t("dedicated-fe")} <span className="font-bold">{t("3-years-ex")}</span>{" "}
          {t("i-hold-a-profound-passion")}
        </p>
      </div>
      <div className="flex relative items-center justify-center flex-col absolute xl:-bottom-12 lg:-bottom-40">
        <p className="text-3xl lg:text-[5rem] font-bold lg:ml-16">
          {t("about")}
          {dir === "rtl" ? <></> : <span className="font-light">{t("me")}</span>}
        </p>
        <Lottie animationData={animatedLaptop} className="xl:w-[1000px] lg:w-[600px] w-[400px] lg:-mt-28 lg:-mb-96 z-10 -mt-14 -mb-48" />
      </div>
    </div>
  );
};

export default AboutMe;
