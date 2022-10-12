import axios from "axios";

const BASE_URL = "http://localhost:8000/";

//토큰 안받아왔을 때
export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// 토큰 받아왔을 때
export const AUTHAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
