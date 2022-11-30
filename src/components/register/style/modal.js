import styled from "styled-components";

export const RegistModalSection = {
  Background:styled.div`
    position: fixed; width: 100%; height: 100vh; top:0; left:0; background: rgba(0, 0, 0, 0.5); z-index: 5;
  `,
  Modal:styled.div`
    position: fixed; width: 90%; height: 25%; top:35%; left:5%; background: #ffffff; border-radius: 10px;
      .tit {margin-top:20%; font-weight:600; color:#959292;}
      button {position:static; width:80%; bottom:0; margin:13% auto 0 auto; background:#6556ff;}
  `

}