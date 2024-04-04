import { useEffect, useRef } from "react";

interface Props {
  text: string;
  duration?: number;
}

const WavySkills = ({ text, duration = 5 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const letters = containerRef.current.children;
    const delay = duration / letters.length;
    if (letters) {
      for (let i = 0; i < letters.length; i++) {
        (letters[i] as HTMLElement).style.animationDelay = `${i * delay}s`;
      }
    }
  }, [duration]);

  const letters = text.split("");

  return (
    <div className="w-full flex justify-start whitespace-nowrap">
      <div ref={containerRef}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className="relative tracking-wide inline-block xl:text-[450px] lg:text-[24rem] md:text-[16rem] text-[8rem] font-bold text-[#29235C] wave"
            style={{ animationDuration: `${duration}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WavySkills;
