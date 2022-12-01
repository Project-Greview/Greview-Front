import { atom, selector } from "recoil";


// isLogin
const isLoginState = atom({
  key: "isLogin",
  default: false,
});
// UserInfo
const loginUserInfoState = atom({
  key: "userInfo",
  default: {
    nickname: "",
    name: "",
    email: "",
    location: "",
    locationConfirm: false
  }
});
export {
  isLoginState,
  loginUserInfoState,
}