import { atom, useRecoilValue } from "recoil";

const recoilCountState = atom({
  key: "recoilCounterState",
  default: false,
});

const hasAccountState = atom({
  key: "hasAccountState",
  default: false,
});

export{ recoilCountState,hasAccountState};