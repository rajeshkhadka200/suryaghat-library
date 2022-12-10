import axios from "axios";

export const getApi = axios.create({
  baseURL: "https://api.suryaghatlibrary.com",
});
