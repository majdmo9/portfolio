import { createInstance, i18n, InitOptions, Resource, TFunction } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";

export default async function initTranslations(
  locale: string,
  namespaces: string = "translation",
  i18nInstance?: i18n,
  resources?: Resource
): Promise<{ i18n: i18n; resources: Resource; t: TFunction }> {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(resourcesToBackend((language: string, namespace: string) => import(`@/locales/${language}/${namespace}.json`)));
  }

  const initOptions: InitOptions = {
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces,
    fallbackNS: namespaces,
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  };

  await i18nInstance.init(initOptions);

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
