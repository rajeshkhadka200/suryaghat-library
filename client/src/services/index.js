import axios from "axios";

export const getApi = axios.create({
  baseURL: "http://localhost:3001",
  // baseURL: "https://api.suryaghatlibrary.com",
});
