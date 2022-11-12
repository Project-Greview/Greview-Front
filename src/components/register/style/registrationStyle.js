import styled from "styled-components";

export const RegistSection = {
  RegistFrame:styled.div`
    .regsit_header {padding:1rem 2rem; box-shadow:0 0.5rem 1rem #eeeeee;}
    button {position:absolute; bottom:calc(100% - 100vh); margin:0 7% 8% 7%;}
  `,
  RegistForm:styled.form`
    padding:0 2rem;
    label {font-size:1.2rem; font-weight:400; color:#2F2F33;}
    input {margin-top:0.4rem; margin-bottom:2rem;}
    > div{
      :first-child {margin-top:2rem;}
      :nth-child(3) {position:relative;
        ::after {content:"8~16자의 영문과 숫자, 특수문자 조합"; position:absolute; top:0.4rem; right:0; font-size:1.2rem; font-weight:400; color:#2F2F33;}
      }
    }
  `
}