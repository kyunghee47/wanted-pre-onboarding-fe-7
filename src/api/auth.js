import { API } from "../utils/api";

export const URLS = {
  LOGIN: `/auth/signin`,
  SIGN_UP: `/auth/signup`,
};
export const PostLogin = (user) => {
  const userData = {
    email: user.email,
    password: user.password,
  };
  API.post(URLS.LOGIN, userData).then((res) => {
    console.log(res.data);
    const { access_token } = res.data;
    localStorage.setItem("access_token", access_token);
    access_token
      ? window.location.replace("/todo")
      : window.location.replace("/");
  });
};
export const PostSignUp = (user) => {
  const userData = {
    email: user.email,
    password: user.password,
  };
  API.post(URL.SIGN_UP, userData).then((res) => {
    console.log(res.data);
    const { access_token } = res.data;
    localStorage.setItem("access_token", access_token);
    access_token
      ? window.location.replace("/todo")
      : window.location.replace("/signup");
  });
};
