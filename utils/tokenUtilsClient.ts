"use client";
import { getCookie } from "cookies-next";

const getTokenCookieClient = () => {
  const token = getCookie("token");
  return token;
};

export { getTokenCookieClient };
