import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import TranslationsProvider from "@/context/TranslationsProvider";
import initTranslations from "../i18n";

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
  return (
    <html lang={locale}>
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className="font-normal">
        <TranslationsProvider locale={locale} resources={resources} namespaces="translation">
          <ToastContainer />
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
