import styled from "styled-components";
// color:#6656ff;
export const WelcomeSection = {
  WelcomeFrame:styled.div`
    display:flex; flex-direction:column; justify-content:center; align-items: center;
    button {max-width:33.5rem; width:33.5rem; height:5rem; background:#6656ff; border-radius:0.5rem; color:#ffffff;}
    .has_acc {
    	.txt {font-size:1.2rem; font-weight:300; color:#959292;
    		div {margin-left:0.5rem; font-size:1.2rem; font-weight:400; color:#6656ff;}
    	}
    }
    
    .login_form {
      button {margin-bottom:2.5rem;}
    }
  `
}