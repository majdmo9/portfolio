// "use client";
import animatedLaptop from "@/public/assets/animations/laptop.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutMe = () => {
  return (
    <div className="relative flex flex-col lg:flex-row max-h-128 justify-between lg:items-start items-center xl:py-20 py-10">
      <div className="2xl:max-w-[70ch] md:max-w-[60ch] max-w-[35ch] lg:pl-10 mb-2">
        <p className="text-sm lg:text-lg lg:leading-7 leading-tight font-thin lg:tracking-widest">
          <span className="font-bold">As</span> a dedicated Front-End Developer with <span className="font-demi">3+ years of experience</span>, I hold
          a profound passion for creating innovative web applications that meet the needs of global clientele. With a strong work ethic and a
          deep-seated enthusiasm for technology, I thrive in high-pressure environments and continually strive to stay ahead of industry trends. My
          unwavering commitment to self-improvement has equipped me with the ability to handle challenging tasks and drive impactful solutions,
          thereby creating meaningful user experiences across digital landscapes.
        </p>
      </div>
      <div className="flex relative items-center justify-center flex-col absolute xl:-bottom-12 lg:-bottom-40">
        <p className="text-3xl lg:text-[5rem] font-bold lg:ml-16">
          ABOUT<span className="font-light">ME..</span>
        </p>
        <Lottie animationData={animatedLaptop} className="xl:w-[1000px] lg:w-[600px] w-[400px] lg:-mt-28 lg:-mb-96 z-10 -mt-14 -mb-48" />
      </div>
    </div>
  );
};

export default AboutMe;
