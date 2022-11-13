import styled from "styled-components";

export const RegistSection = {
  LocationFrame:styled.div`
    position:relative; display:flex; margin-bottom:2rem;
    ::after {content:""; position:absolute; width:100%; height:0.2rem; top:100%; left:0; background:#222222; }
  `,
  RegistFrame:styled.div`
    .regsit_header {padding:1rem 2rem; box-shadow:0 0.5rem 1rem #eeeeee;
      .history_back {flex-basis:2.4rem;}
      .tit {flex-basis:calc(100% - 2.4rem); margin-left:-1.2rem;}
    }
    button {position:absolute; bottom:calc(100% - 100vh); margin:0 7% 8% 7%; background:#959292; transition: background 0.3s;
      &.active {background:#6556ff;}
    }
  `,
  RegistForm:styled.form`
    padding:0 2rem;
    label {width:100%;font-size:1.2rem; font-weight:400; color:#2F2F33;}
    input {margin-top:0.4rem; margin-bottom:2rem;}
    > div{
      :first-child {margin-top:2rem;}
      :nth-child(3) {position:relative;
        ::after {content:"8~16자의 영문과 숫자, 특수문자 조합"; position:absolute; top:0.4rem; right:0; font-size:1.2rem; font-weight:400; color:#2F2F33;}
      }
    }
    button {position:static; align-self:center; height:4.7rem; margin:0.4rem 0 2rem 0;}
  `
}