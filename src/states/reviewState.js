import { atom, selector } from 'recoil';
import { instance } from '../util/axios/axios';

export const getReviewLisState = atom({
  key: "reviewListState",
  default: 0,
});

export const getReviewSelector = selector({
  key: 'reviewSelector',
  get: async ({ get }) => {
      get(getReviewLisState);
      const searchParams = get(getReviewLisState);

      const { data } = await instance.get('/api/v1/board', {
          params: searchParams
      });

      return data;
  },
  set: ({ set }) => {
      set(getReviewLisState, Math.random());
  }
});