import { atom } from "recoil";

const recoilCountState = atom({
  key: "recoilCounterState",
  default: false,
});

// Splash
const hasAccountState = atom({
  key: "hasAccountState",
  default: false,
});

// 검색타입
const onToggleSearchType = atom({
  key: "searchTypeState",
  default: "tag",
});

// Header Title
const setPageInfoState = atom({
  key: "setPageInfoState",
  default: {
    tit: "",
    value: 0,
    naviView: true
  },
});

export {
  recoilCountState,
  hasAccountState,
  onToggleSearchType,
  setPageInfoState,
};
