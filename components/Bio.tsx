import useIsMobile from "@/hooks/useIsMobile";

const Bio = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full lg:pl-40 pl-4 flex flex-col justify-center items-start h-full">
      <div className="flex flex-col justify-center items-start">
        <p className="text-sm lg:text-[1.8rem] mb-2 tracking-widest font-normal w-full leading-tight">FULL-STACK WEB DEVELOPER</p>
        <h1 className="text-3xl lg:text-[4.5rem] lg:mb-2 mb-0 tracking-widest lg:font-bold font-demi outlined-text leading-none">
          HELLO {isMobile ? <span>I&lsquo;M</span> : <></>}
        </h1>
        <h1 className="text-4xl max-w-[5ch] lg:max-w-[35ch] lg:text-[4.5rem] font-bold lg:leading-none leading-sung">
          {isMobile ? <></> : <span>I&lsquo;M</span>} MAJD MOUSA
        </h1>
      </div>
      <p className="text-xs lg:text-2xl lg:leading-8 leading-tight lg:mt-4 mt-1 lg:max-w-md max-w-[30ch]">
        I like to craft solid and develop Full Stack products with great user experiences.
      </p>
      <a href="/assets/files/Majd-Mousa-CV.pdf" target="_blank">
        <button className="text-xs lg:text-lg border border-1 border-white rounded-full lg:px-3 px-1 lg:mt-7 mt-3 before:ease relative overflow-hidden text-white shadow-xl transition-all before:absolute before:right-4 before:top-0 before:h-12 before:w-6 before:-translate-x-40 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:translate-x-40">
          DOWNLOAD CV {">"}
        </button>
      </a>
    </div>
  );
};
export default Bio;
