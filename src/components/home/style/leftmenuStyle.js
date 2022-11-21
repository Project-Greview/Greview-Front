import styled from "styled-components";

export const LeftMenuSection = {
  ActiveBackground:styled.div`
    position: fixed; width: 100%; height: 100vh; top:0; left:0; background:rgba(0,0,0,0); z-index: -1; transition: background 0.3s, z-index 0.3s;
    &.active {background:rgba(0,0,0,0.6); z-index: 11;}
  `,
  LeftMenuFrame:styled.div`
    position:fixed; display:flex; flex-direction:column; width:85%; height:100vh; top:0; left:-100%; background:#ffffff; z-index: 12; transition: left 0.3s;
    &.active {left:0%; transition: left 0.3s;}
    .profil_info {height:45%; background:#3a3a3a;
      .left_menu_header {padding:24px 15px 0px 21px;}
      .img_box {flex-basis:9.6rem; max-width:9.6rem; width:9.6rem; height:9.6rem; margin:2.6rem auto 0 auto !important;}
    }
  `,
}