import styled from "styled-components";

export const MyPageSection = {
  MyPageFrame: styled.div`
    height:calc(100vh - 5rem); padding:0 2.4rem; margin-top: 5rem; background: #ffffff;
      .setting_menu {flex-basis:100%; margin:0 -2.4rem; padding-top: 1.2rem;
    }
    .modify {
      .img_box {margin:2.1rem 0 0 0 !important;}
      div {
        label {margin-top:4px; font-size:1.4rem; font-weight:500; color:#959292;}
      }
      button {position:absolute; bottom:calc(100% - 100vh); width:calc(100% - 4.8rem); margin:0 auto 33px auto;}
    }
    .private_modify {
      > div {margin-top:25px;
        &:first-child {margin-top:29px;}
        label {font-size:1.2rem; font-weight:400; color:#2F2F33; line-height:14px;}
        input {padding:12px 25px; color:#959292;}
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
    .tabmenu_box {position:static; flex-wrap:wrap; flex-basis: 100%; margin-top:26px; transition: position 3s, width 3s, top 3s;
      li {position:relative; display:flex; justify-content:center; align-items:center; flex-basis:calc(100%/3); padding:1rem 0; border-bottom:1px solid #959292; font-size:1.4rem; font-weight: 500; transition: color 0.3s, border 0.3s;
        ::after {content:""; position:absolute; width:100%; height:2px; bottom:-1px; left:0; background:none; transition:background 0.3s;}  
        &.tabmenu_tit {
          position:relative; flex-basis: 100%; border-bottom: none; padding-top:15px; background: #f8f8f8; z-index: 2;
          ::before {content:''; position:absolute; width:calc(100% + 48px); height:100%; left:-24px; top:0; background:#f8f8f8; z-index:-1;}
          * {font-size:1.4rem; color:#959292;}
        }
        &.active {color:#6556FF;
          ::after {content:""; position:absolute; background:#6556ff;}
        }
      }
      &.fixed {position:fixed; top:0; left:5%; width:90%; padding-bottom:0; margin:0 auto; background:#ffffff; z-index:3;}
    }
  `,
};
