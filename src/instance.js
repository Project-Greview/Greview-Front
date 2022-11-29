import axios from "axios";
const instance = axios.create({
  // baseURL: "http://ec2-52-79-57-121.ap-northeast-2.compute.amazonaws.com:8080",
  baseURL: `http://localhost:8080`,
  withCredentials: true,
});

export { instance };

