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
      input[type="text"],input[type="password"] {width:100%;}
  `
}