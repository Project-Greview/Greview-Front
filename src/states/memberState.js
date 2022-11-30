import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const registPostState = atom({
  key: "registPostState",
  default: false,
})

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom]
});

// export const boardSearchState = atom({
//   key: 'boardSearchState',
//   default: {
//       writer: '',
//       title: '',
//       content: '',
//   }
// });

// export const forceReloadBoardListState = atom({
//   key: 'forceReloadBoardListState',
//   default: 0
// });

// export const boardListSelector = selector({
//   key: 'boardListSelector',
//   get: async ({ get }) => {
//       get(forceReloadBoardListState);
//       const searchParams = get(boardSearchState);

//       const { data } = await axios.get('/api/v1/board', {
//           params: searchParams
//       });

//       return data;
//   },
//   set: ({ set }) => {
//       set(forceReloadBoardListState, Math.random());
//   }
// });