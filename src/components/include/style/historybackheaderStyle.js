import styled from "styled-components";

export const HistoryBackSection = {
  HistoryBackFrame: styled.div`
    position: fixed; display: flex; align-items: center; width: 100%; height:4.7rem; top: 0; left: 0; padding: 1rem 2rem; background: #ffffff;
    .history_back {flex-basis: 2.4rem;}
    .tit { flex-basis: calc(100% - 2.4rem); margin-right: 1.2rem;
      &.has_btn {flex-basis: calc(100% - 4.5rem); margin-left: 1.2rem;}
    }
    .setting_btn {flex-basis: 2.1rem;}
  `,
};
