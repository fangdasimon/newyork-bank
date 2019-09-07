import Cookies from "js-cookie";
import { cookieExpires } from "@/config"; // cookie保存的天数

export const TOKEN_KEY = "token";
export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 });
};
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    return token;
  } else {
    return false;
  }
};
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}
