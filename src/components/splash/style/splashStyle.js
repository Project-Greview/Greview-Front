import styled from "styled-components";
// color:#6656ff;
export const SpalshSection = {
  SpalshFrame:styled.div`
    display:flex; flex-direction:column; justify-content:center; align-items: center;
    img {margin-top:50%;}
    button {max-width:33.5rem; width:33.5rem; height:5rem; background:#6656ff; border-radius:0.5rem; color:#ffffff;}
    .has_acc {
    	.txt {font-size:1.2rem; font-weight:300; color:#959292;
    		div,a {margin-left:0.5rem; font-size:1.2rem; font-weight:400; color:#6656ff;}
    	}
    }
    .first_form {
      button {margin:8.5rem 0 2.5rem 0;}
    }
    .login_form {margin-top:5rem;
      button {margin-bottom:2.5rem;}
    }

    @media screen and (min-width:550px) {
      img {margin-top:30%;}
    }
    @media screen and (min-width:414px) {
    }
    @media screen and (min-width:375px) {
      img {margin-top:30%;}
    }
  `
}