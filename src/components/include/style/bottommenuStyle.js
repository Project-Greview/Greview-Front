import styled from "styled-components";


export const BottomMenuSection = {
  BottomMenuFrame:styled.div`
    position: fixed; width: 100%; height: 8rem; left:0; bottom:0; background: #ffffff; border-top:0.1rem solid #D0CFCF; z-index: 10;
    ul {height:inherit;
      li {
        div {font-size:1rem; font-weight:500;
          &.img_box {margin-bottom:10px;}
        }
        &.active {
          div {color:#6556FF;}
          .img_box {
            path {fill:#6556FF;}
          }
        }
      }
    }
  `
}