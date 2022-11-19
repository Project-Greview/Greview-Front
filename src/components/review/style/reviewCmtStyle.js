import styled from "styled-components";

import images from "../../../resources/img/img";
import icoThumbOff from "../../../resources/img/icons/thumb_ico_off.svg";
import icoThumb from "../../../resources/img/icons/thumb_ico.svg";
import icoMore from "../../../resources/img/icons/more_ico.svg";


export const ReviewCmtSection = {
  ListFrame:styled.div`
    .review_wrap{background:#ffffff; padding:1.2rem 2.3rem;margin:4.7rem 0 5.8rem;
      .cmt_box{width:100%;
        .picture{width:3.5rem;height:3.5rem;border-radius:50%;background:#D9D9D9;margin-right:0.9rem;
          img{width:3.5rem;height:3.5rem;border-radius:50%;object-fit: cover;}
        }
        .name{color:#000;font-size:1.6rem;margin-bottom:0.7rem}
        .txt{color:#959292;font-size:1.2rem}
        .more{margin:1rem 0 0 auto;width:0.7rem; height:1.2rem;background:url("${icoMore}");background-size:0.7rem 1.2rem; }
        .cmt_info{margin-top: 2rem;
          .date{font-size: 1.2rem;color: #959292;padding-top: 0.4rem;}
          .reply{margin:0 1rem;font-size: 1.2rem;color: #959292;}
          .thumb{display: inline-block;margin-right: 1.2rem;color: #959292;padding-top: 0.3rem;
            ::before{content: "";display: inline-block;margin-right: 0.7rem;width:1.5rem;height:1.4rem;background:url("${icoThumbOff}");background-size:1.5rem 1.4rem;}}
            &.on::before{content: "";display: inline-block;margin-right: 0.7rem;width:1.5rem;height:1.4rem;background:url("${icoThumb}");background-size:1.5rem 1.4rem;}
        }
      }
      .reply_wrap{margin: 2.5rem 0 0 4.9rem;.cmt_box{margin-top:2.5rem}}
      .noCmt{text-align:center;font-size:1.6rem;color:#959292;margin-top:8rem}
    }
    .cmt_input{height: 6.4rem;position: fixed;width: 100%;bottom:0;padding-left:2.5rem;border-top:1px solid #EDEDED;background:#fff;
      input{height: 6.4rem;font-size:1.6rem;border:none; outline:none;
      ::placeholder {font-weight:lighter; color: #D0CFCF;}}
    }
    
  `,
  
}