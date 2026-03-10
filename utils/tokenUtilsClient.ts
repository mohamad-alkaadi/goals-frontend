"use client";
import { getCookie, deleteCookie } from "cookies-next";

const getTokenCookieClient = () => {
  const token = getCookie("token");
  return token;
};

const deleteTokenCookieClient = () => {
  deleteCookie("token");
}

export { getTokenCookieClient, deleteTokenCookieClient };
