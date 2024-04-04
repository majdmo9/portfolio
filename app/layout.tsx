import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majd Mousa",
  description: "Welcome to my portfolio!",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.JSX.Element;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className="font-normal">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
