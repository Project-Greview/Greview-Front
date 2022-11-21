import styled from "styled-components";
import images from "../../../resources/img/img";

export const LeftMenuSection = {
  ActiveBackground:styled.div`
    position: fixed; width: 100%; height: 100vh; top:0; left:0; background:rgba(0,0,0,0); z-index: -1; transition: background 0.3s, z-index 0.3s;
    &.active {background:rgba(0,0,0,0.6); z-index: 11;}
  `,
  LeftMenuFrame:styled.div`
    position:fixed; display:flex; flex-direction:column; justify-content:space-between; width:85%; height:100vh; top:0; left:-100%; background:#ffffff; z-index: 12; transition: left 0.3s;
    &.active {left:0%; transition: left 0.3s;}
    .profil_info {height:45%; background:#3a3a3a;
      .left_menu_header {padding:24px 15px 0px 21px;}
      .img_box {flex-basis:9.6rem; max-width:9.6rem; width:9.6rem; height:9.6rem; margin:2.6rem auto 0 auto !important;}
    }
    ul {
      &.top_section {flex-grow:1;
        li {padding:25px 26px; border-bottom:1px solid rgba(237, 237, 237, 0.5);
          .menu_nm {position:relative; margin-left:30px; font-size:1.8rem; font-size:600; color:#959292;}
          :first-child {
            .menu_nm {
              ::before {content:url("${images.menu_icon2}"); position:absolute; top:0; left:-30px;}
            }
          }
          :nth-child(2) {
            .menu_nm {
              ::before {content:url("${images.menu_icon3}"); position:absolute; width:21px; top:0; left:-32px;}
            }
          }
          :last-child {border-bottom:none;
            .menu_nm {
              ::before {content:url("${images.menu_icon4}"); position:absolute; top:0; left:-28px;}
            }
          }
        }
      }
      li {
          .menu_nm {font-weight:500; color:#959292;}
        }
      &.bottom_section {position:relative;
        ::after {content:""; position:absolute; width:100%; height:9px; top:-9px; left:0; background:#EDEDED;}
      }
    }
    
  `,
}