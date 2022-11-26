import icoMenu from "../../../resources/img/icons/more_ico.svg";
import images from "../../../resources/img/img";
import icoThumb from "../../../resources/img/icons/thumb_ico.svg";
import icoComment from "../../../resources/img/icons/comment_ico.svg";
import icoMore from "../../../resources/img/icons/more_ico.svg";
import styled from "styled-components";


export const CmtReviewSection = {
  CmtReviewFrame:styled.li`
    background:#ffffff; padding:1.7rem 1.9rem;margin:0 0 1.2rem;border: 1px solid #EDEDED;border-radius:0.5rem;
    .cmt_box {
      .profile {flex-basis:15%;
        .picture {width:3.5rem;height:3.5rem;border-radius:50%;background:#D9D9D9;margin-right:0.9rem;
            img {width:3.5rem;height:3.5rem;border-radius:50%;object-fit: cover;}
          }
        }
        .contents {flex-basis:80%; width:75%;
          * {color: #959292;}
          .name {margin-bottom:0.5rem; font-size:1.6rem; color:#000000;}
          .cmt_preview {flex-basis:100%; margin-bottom:2rem; font-size: 1.4rem; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;}
          .cmt_info {
            * {font-size:1.2rem;}
            .reg_dt {margin-right:1rem;}
            .recmt_btn {margin-right:1rem;}
            .like_btn {background:url("${images.like_off}"); width:1.46rem;}
          }
        }
        .more{flex-basis:2.4rem; margin:0.6rem 0 0 auto; width:0.7rem; height:1.2rem; background:url("${images.more_icon}") no-repeat 50%; background-size:0.7rem 1.2rem; }
      }
  `
}