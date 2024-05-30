"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const LangSelector = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("en");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    localStorage.setItem("lang", value);
    router.replace(`/${value}`);
  };

  useEffect(() => {
    const lang = locale || "en";

    if (typeof window !== "undefined" && selectedLang !== lang) {
      setSelectedLang(lang);
      router.replace(`/${lang}`);
    }
  }, [selectedLang, router, locale]);

  return (
    <select
      onChange={handleSelect}
      value={selectedLang}
      className="bg-gradient-to-tr from-[#4D2BB9] via-[#7436D7] to-[#C14DFD] font-semibold bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-[#3919BB] focus:border-[#3919BB] cursor-pointer"
    >
      <option value="ar" className="flex items-center gap-2">
        العربية
      </option>
      <option value="en" className="flex items-center gap-2">
        English
      </option>
      <option value="he" className="flex items-center gap-2">
        עברית
      </option>
    </select>
  );
};

export default LangSelector;
