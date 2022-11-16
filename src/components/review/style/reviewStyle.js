import styled from "styled-components";

import images from "../../../resources/img/img";
import icoThumb from "../../../resources/img/icons/thumb_ico.svg";
import icoComment from "../../../resources/img/icons/comment_ico.svg";
import icoMore from "../../../resources/img/icons/more_ico.svg";

export const ReviewListSection = {
  ListFrame:styled.div`
    .review_header {padding:1rem 2rem; width:100%;position: fixed;top:0;background:#fff;
      .history_back {flex-basis:2.4rem;}
      .tit {flex-basis:calc(100% - 2.4rem); margin-left:-1.2rem;}
    }
    .review_wrap{background:#ffffff; padding:1.7rem 1.9rem;margin:4.9rem 0 2.3rem;
      .profile{width:100%;
        .picture{width:3.5rem;height:3.5rem;border-radius:50%;background:#D9D9D9;margin-right:0.9rem;
          img{width:3.5rem;height:3.5rem;border-radius:50%;object-fit: cover;}
        }
        .name{color:#6556FF;font-size:1.6rem;margin-bottom:0.7rem}
        .date{color:#D0CFCF;font-size:1.2rem}
        .more{margin:0.6rem 0 0 auto;width:0.7rem; height:1.2rem;background:url("${icoMore}");background-size:0.7rem 1.2rem; }
      }
      .thumbnail {margin:2.2rem 0 1.8rem;
        img{object-fit:cover;width:calc(100% - 51%);height:calc(100% - 51%);border-radius:0.5rem}
        img:first-child{margin-right:0.6rem}
      }
      .review_txt{font-size:1.4rem;color:#959292;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
      .hashtag_wrap{width:100%; height: 2.7rem;margin:1.4rem 0 2rem; overflow: hidden;
        .overBox{width:100%;height:2.5rem;overflow:hidden}
        .hashtag{position: relative;font-size:1.4rem;margin:0 0.8rem 0.1rem 0;display:inline-block; padding:0.3rem 1rem 0.3rem 3.3rem;border-radius:5rem;border:1px solid #EDEDED; background:#fff;color:#959292;}
        .hashtag::before{
          position: absolute;
          left: 0.8rem;
          top: 0.5rem;
          display: inline-block;
          content:""; width:1.6rem; height:1.6rem; background:url("${images.welcomeLogo}");background-size:1.6rem;
        }
      }
      .cmt_wrap{
        .thumb{
          display: inline-block;
          margin-right: 1.2rem;
          color: #959292;
        }
        .thumb::before{
          content: "";
          display: inline-block;
          margin-right: 0.7rem;
          width:1.5rem;height:1.4rem;background:url("${icoThumb}");background-size:1.5rem 1.4rem;}
        .cmt{
          display: inline-block;
          color: #959292;
        }
        .cmt::before{
          content: "";
          display: inline-block;
          margin-right: 0.7rem;
          vertical-align: -0.15rem;
          width:1.4rem;height:1.4rem;background:url("${icoComment}");background-size:1.4rem;}
      }
    }
  `,
}

export const ReviewDetailSection = {
  ListFrame:styled.div`
    .review_header {padding:1rem 2rem; width:100%;position: fixed;top:0;background:#fff;
      .history_back {flex-basis:2.4rem;}
      .tit {flex-basis:calc(100% - 2.4rem); margin-left:-1.2rem;}
    }
    .review_wrap{background:#ffffff; padding:1.2rem 2.3rem;margin:4.9rem 0 5.8rem;
      .profile{width:100%;
        .picture{width:3.5rem;height:3.5rem;border-radius:50%;background:#D9D9D9;margin-right:0.9rem;
          img{width:3.5rem;height:3.5rem;border-radius:50%;object-fit: cover;}
        }
        .name{color:#6556FF;font-size:1.6rem;margin-bottom:0.7rem}
        .date{color:#D0CFCF;font-size:1.2rem}
        .more{margin:1rem 0 0 auto;width:0.7rem; height:1.2rem;background:url("${icoMore}");background-size:0.7rem 1.2rem; }
      }
      .reveiw_img {margin:2.2rem -2.3rem 1.8rem;
        img{object-fit:cover;width:100%;}
      }
      .review_txt{font-size:1.4rem;color:#3D3D3D;}
      .hashtag_wrap{width:100%; height: 2.7rem;margin:1.4rem 0 2rem; overflow: hidden;
        .overBox{width:100%;height:2.5rem;overflow:hidden}
        .hashtag{position: relative;font-size:1.4rem;margin:0 0.8rem 0.1rem 0;display:inline-block; padding:0.3rem 1rem 0.3rem 3.3rem;border-radius:5rem;border:1px solid #EDEDED; background:#fff;color:#959292;}
        .hashtag::before{
          position: absolute;
          left: 0.8rem;
          top: 0.5rem;
          display: inline-block;
          content:""; width:1.6rem; height:1.6rem; background:url("${images.welcomeLogo}");background-size:1.6rem;
        }
      }
      .place_wrap{
        width: 100%;
        padding: 1rem;
        background: rgba(208, 207, 207, 0.1);
        border: 1px solid #EDEDED;
        border-radius: 0.5rem;
        img{display:block;width:4.5rem; height: 4.5rem;margin-right:1.5rem}
        .place_info{padding-top:0.5rem;
          .name{font-size:1.4rem}
          .address{font-size:1.2rem;color:#959292}
        }
        .more{margin:1rem 0 0 auto;width:0.7rem; height:1.2rem;background:url("${icoMore}");background-size:0.7rem 1.2rem; }
      }
    }
    .cmt_wrap{height: 5.8rem;position: fixed;width: 100%;bottom:0;padding: 2rem;box-shadow:0px -0.2rem 1.1rem rgba(0, 0, 0, 0.1);background:#fff;
        .thumb{
          display: inline-block;
          margin-right: 1.2rem;
          color: #959292;
          font-size:1.2rem;
        }
        .thumb::before{
          content: "";
          display: inline-block;
          margin-right: 0.7rem;
          width:1.5rem;height:1.4rem;background:url("${icoThumb}");background-size:1.5rem 1.4rem;}
        .cmt{
          display: inline-block;
          color: #959292;
          font-size:1.2rem;
        }
        .cmt::before{
          content: "";
          display: inline-block;
          margin-right: 0.7rem;
          vertical-align: -0.15rem;
          width:1.4rem;height:1.4rem;background:url("${icoComment}");background-size:1.4rem;}
    }
    
  `,
  writeForm:styled.form`
    .write_wrap{background:#ffffff;padding:1.4rem 2.1rem;margin:4.9rem 0 5.8rem;
      .place_sel{width:100%;color:#959292;
        p{margin:0 0 1rem 1rem;font-size:1.4rem;}
        button{padding:0.5rem 3.6rem;border: 1px solid #959292;border-radius: 30px;
          margin-right: 0.6rem;
          color: #959292;
          font-size: 1.6rem;
          &.active {border-color:#6556FF;color:#6556FF;}
        }
      }
      input[type="text"],input[type="password"],input[type="tel"] {width:100%;
      padding:1rem 1.4rem; font-size:1.4rem; border-radius:0.5rem; border:0.1rem solid #EBEBEB; outline:none;
        ::placeholder {color:#a9a9a9;}
      }
      
      .star_wrap{
        margin:1.5rem 0 0.9rem;
        width: 100%;
        height: 3rem;
      }
      .info{font-size: 14px;color: #959292;}
      
      .review_input{min-height:13.8rem;margin:3rem 0 2.2rem;}
      .tag_input{}
    }
  `,
}