import styled from "styled-components";

export const MyPageSection = {
  MyPageFrame: styled.div`
    padding:0 2.4rem; margin-top: 5rem;
    .setting_menu {flex-basis:100%; margin:1.2rem -2.4rem;
      li {flex-basis:100%; padding:2rem 2.6rem; border-bottom:1px solid #EDEDED;}
    }
    .modify {
      .img_box {margin:2.1rem 0 0 0 !important;}
      div {
        label {font-size:1.4rem; font-weight:500; color:#959292;}
      }
      button {position:absolute; bottom:calc(100% - 100vh); width:calc(100% - 4.8rem); margin:0 auto 33px auto;}
    }
  `,
  MyPageHeader: styled.div`
    display: flex; align-items: center; flex-flow: wrap;
    .user_info {
      .user_nickname {font-size: 2rem; font-weight: 600; color: #3a3a3a;}
      .act_position {font-size: 1.4rem; font-weight: 500; color: #959292;}
    }
    button {flex-basis: 100%; margin-top:1.7rem;}
    .tab_menubox {flex-basis: 100%; margin-top:26px;
      li {position:relative; display:flex; justify-content:center; align-items:center; flex-basis:calc(100%/3); padding:1rem 0; border-bottom:1px solid #959292; font-size:1.4rem; font-weight: 500; transition: color 0.3s, border 0.3s;
        &.active {color:#6556FF; border-bottom:2px solid #6556FF;}
      }
    }
  `,
};
