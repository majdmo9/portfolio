"use client";
import { useTranslation } from "react-i18next";
import AboutMe from "./AboutMe";
import Bio from "./Bio";
import Img from "./general/Img";
import WavySkills from "./lib/WavySkills";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import ContactMe from "./ContactMe";
import useIsMobile from "@/hooks/useIsMobile";
import Info from "./Info";
import { useDir } from "@/hooks/useDir";

const Dashboard = ({ params: { locale } }: { params: { locale: string } }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { dir } = useDir();

  return (
    <div className="flex flex-col min-w-full overflow-hidden relative">
      <section className="pt-4 md:pt-0 flex lg:justify-center justify-between w-full h-full md:items-center relative bg-[url('/assets/images/mobile-bg.png')] md:bg-[url('/assets/images/bg1.png')] bg-auto bg-no-repeat bg-top">
        <div className="w-full xl:w-1/2 flex justify-start">
          <Bio locale={locale} />
        </div>
        <div className="flex justify-center items-center xl:w-1/2 w-3/4 max-h-screen h-full -ml-48 -mr-20 xl:mx-0">
          <Img width={1100} height={1100} src="/assets/svg/majd.svg" className="object-cover w-full h-full" alt="majds-pic" />
        </div>
      </section>
      <section className="relative bg-gradient-to-tr from-[#3919BB] via-[#5C20CF] to-[#A92FFB] flex justify-center">
        <AboutMe />
      </section>
      <section className="min-h-screen flex flex-col justify-between bg-[rgb(236,236,236)]">
        <div className="lg:px-36 px-6 pt-16">
          <p className="font-bold text-[#29235C] lg:text-6xl text-3xl w-fit" dir={dir}>
            {t("skills")}..
          </p>
        </div>
        <div className="relative flex h-full flex-col">
          <div className="w-full flex justify-center xl:-mb-80 md:-mb-44 -mb-20">
            <WavySkills text="Skills" duration={3} />
          </div>
          <div className="w-full z-10">
            <Skills />
          </div>
        </div>
      </section>
      <section className="bg-[rgb(236,236,236)] flex flex-col justify-center items-center lg:mt-0 z-10 lg:p-24 p-12 lg:gap-12 gap-6">
        <Qualifications />
      </section>
      <section className="bg-[#1D1D1B] flex justify-center items-start p-12 lg:p-24 lg:gap-32 gap-8 flex-wrap">
        {isMobile ? (
          <p className="lg:text-5xl text-3xl font-bold">
            {t("contact")}
            <span className="font-light">{t("me")}</span>
          </p>
        ) : (
          <></>
        )}
        {!isMobile ? (
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="lg:text-5xl text-3xl font-bold mx-auto">
              {t("contact")}
              <span className="font-light">{t("me")}</span>
            </p>
            <Info locale={locale} />
          </div>
        ) : (
          <ContactMe />
        )}
        {isMobile ? <Info locale={locale} /> : <ContactMe />}
      </section>
    </div>
  );
};

export default Dashboard;
