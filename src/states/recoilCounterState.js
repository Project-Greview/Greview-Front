import { atom, useRecoilValue } from "recoil";

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
const setPageTitleState = atom({
  key: "setTitleState",
  default: {
    tit: "",
    value: 0,
  },
});

export {
  recoilCountState,
  hasAccountState,
  onToggleSearchType,
  setPageTitleState,
};
