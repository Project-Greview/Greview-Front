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

// 검색관련
const onToggleSearchType = atom({
  key: "searchTypeState",
  default: "tag",
});
const searchKeyword = atom({
  key: "searchKeyword",
  default: "",
});
const searchResult = atom({
  key: "searchResultList",
  default: [],
})

// Header Title
const setPageInfoState = atom({
  key: "setPageInfoState",
  default: {
    tit: "",
    value: 0,
  },
});

// Left Menu
const setLeftMenuState = atom({
  key: "setLeftMenu",
  default: false,
});

// MyPage Scroll Event
const setMyPageFixed = atom({
  key: "setFixedMenu",
  default: false,
});

export {
  recoilCountState,
  hasAccountState,
  onToggleSearchType,
  setPageInfoState,
  setLeftMenuState,
  setMyPageFixed,
  searchKeyword,
  searchResult
};
