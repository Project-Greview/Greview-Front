import { atom } from "recoil";

const setMyPageTabState = atom({
  key: "mypageTabMenuState",
  default: "1",
});

export {setMyPageTabState};