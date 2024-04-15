import { useTranslation } from "react-i18next";
import { INFO } from "@/utils/constants";
import { useDir } from "@/hooks/useDir";
import LangSelector from "./lib/LangSelector";

const Info = ({ locale }: { locale: string }) => {
  const { t } = useTranslation();
  const { dir } = useDir();

  return (
    <div className="flex flex-col justify-start lg:items-start items-center gap-2" dir={dir}>
      {INFO.map(el => el)}
      <p className="font-medium text-lg">{t("location")}</p>
      <LangSelector locale={locale} />
    </div>
  );
};

export default Info;
