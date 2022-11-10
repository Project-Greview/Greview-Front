import styled from "styled-components";

export const Common = {
  Frame:styled.div`
  
  // responsive 
  @media screen and (max-width:550px) {
    border:0.1rem solid blue;
  }
  `,
  Input:styled.div`
    width:100%;
      &.login_id {margin-bottom:1.5rem;}
      &.login_pw {margin-bottom:2.5rem;}
      input[type="text"],input[type="password"] {width:100%; padding:1.3rem 2rem; font-size:1.6rem; border-radius:0.5rem; border:0.1rem solid #EBEBEB; outline:none;
        ::placeholder {color:#a9a9a9;}
      }
  `
}