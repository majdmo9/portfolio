import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => i18nRouter(req, i18nConfig);
export const config = {
  matcher: "/((?!api|_next|static|.*\\..*|assets|favicon.ico|sw.js).*)",
};
