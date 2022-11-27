import axios from "axios";

const instance = axios.create({
    // localhost 작업용
    baseURL: 'http://localhost:3306',
    // 클라우드 작업용
    // baseURL: '',
    withCredentials: true,
  });

  export { instance };