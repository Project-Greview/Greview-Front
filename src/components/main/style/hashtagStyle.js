import styled from "styled-components";
import images from "../../../resources/img/img";

export const HashTagSection = {
  HashTagFrame:styled.div`
    position: fixed; width: 100%; padding:10px 0 10px 20px; margin-top:5rem; background: initial; z-index: 2;
    .swiper-slide {display:flex; justify-content:center; align-items:center; flex-grow:1; width:auto; height:2.7rem; padding: 2px 10px; border-radius:30px; background:#ffffff; box-shadow:0px 3px 3px rgba(0,0,0,0.2); 
      .tag_nm {position:relative; display:flex; font-size:1.4rem; font-weight:500; color:#959292; white-space:nowrap;
        ::before {content:url("${images.marker_c}"); width:18px; height:18px; margin-right:5px;}
      }
      &.active {background:#6556FF;
        .tag_nm {color:#ffffff;
          ::before {content:url("${images.marker_g}");}
        }
      }
    }
  `
}