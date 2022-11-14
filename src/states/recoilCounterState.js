import { atom, useRecoilValue } from "recoil";

const recoilCountState = atom({
  key: "recoilCounterState",
  default: false,
});

const hasAccountState = atom({
  key: "hasAccountState",
  default: false,
});

const onToggleSearchType = atom({
  key: "searchTypeState",
  default: "tag",
})

export{ recoilCountState,hasAccountState,onToggleSearchType };