import styled from "styled-components";

export const SearchBarSection = {
  SearchFrame:styled.div`
    position:absolute; display: flex; justify-content: space-between; align-items: center; flex-basis:100%; width:100%; top:0; left:0; padding:0.8rem 2rem; background:#ffffff; z-index:5;
    .bars_btn {flex-basis:1.8rem; height:1.2rem;
      > div {position:absolute; width:100%; height:0.2rem; border-radius:0.5rem; background:#959292;
        :first-child {top:0;}
        :nth-child(2) {top:50%;}
        :last-child {top:100%;}
      }
    }
    div {
      label {margin:0 1.5rem;}
      input {font-size:1.4rem;}
      button {height:auto; padding:0 1.5rem; background:none;
        &.tag {
          path {fill:#6656ff;}
        }
      }
    }
  `
}