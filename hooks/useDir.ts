import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useDir = () => {
  const [dir, setDir] = useState("ltr");
  const { i18n } = useTranslation();

  useEffect(() => {
    setDir(i18n.dir());
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setDir(i18n.dir());
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  return { dir };
};
