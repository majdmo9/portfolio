import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import TranslationsProvider from "@/context/TranslationsProvider";
import initTranslations from "../i18n";
import { Cairo, Noto_Sans_Hebrew } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });
const notoSans = Noto_Sans_Hebrew({ subsets: ["hebrew"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Majd Mousa",
  description: "Welcome to my portfolio!",
  icons: { icon: "/icon.png" },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.JSX.Element;
  params: { locale: "en" | "ar" | "he" };
}>) {
  const { resources } = await initTranslations(locale);

  const font = () => {
    if (locale === "ar") {
      return cairo.className;
    } else if (locale === "he") {
      return notoSans.className;
    }
    return "font-normal";
  };

  return (
    <html lang={locale}>
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className={font()}>
        <TranslationsProvider locale={locale} resources={resources} namespaces="translation">
          <ToastContainer />
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
