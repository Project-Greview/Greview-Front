import styled from "styled-components";

import images from "../../../resources/img/img";
import icoThumb from "../../../resources/img/icons/thumb_ico.svg";
import icoComment from "../../../resources/img/icons/comment_ico.svg";
import icoMore from "../../../resources/img/icons/more_ico.svg";

export const ReviewListSection = {
  ListFrame:styled.div`
    /* .review_header {padding:1rem 2rem; width:100%;position: fixed;top:0;background:#fff;
      .history_back {flex-basis:2.4rem;}
      .tit {flex-basis:calc(100% - 2.4rem); margin-left:-1.2rem;}
    } */
    .review_wrap{background:#ffffff; padding:1.7rem 1.9rem;margin:4.7rem 0 2.3rem;
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
      .hashtag_wrap{width:100%; height: 2.7rem;margin:1.4rem 0 2rem; overflow-x: scroll;
        .overBox{width:max-content;height:2.5rem;}
        .hashtag{position: relative;font-size:1.4rem;margin:0 0.8rem 0.1rem 0;display:inline-block; padding:0.3rem 1rem 0.3rem 3.3rem;border-radius:5rem;border:1px solid #EDEDED; background:#fff;color:#959292;}
        .hashtag::before{position: absolute;left: 0.8rem;top: 0.5rem;display: inline-block;content:""; width:1.6rem; height:1.6rem; background:url("${images.welcomeLogo}");background-size:1.6rem;}
      }
      .cmt_wrap{
        .thumb{display: inline-block;margin-right: 1.2rem;color: #959292;}
        .thumb::before{content: "";display: inline-block;margin-right: 0.7rem;width:1.5rem;height:1.4rem;background:url("${icoThumb}");background-size:1.5rem 1.4rem;}
        .cmt{ display: inline-block;color: #959292;}
        .cmt::before{content: "";display: inline-block;margin-right: 0.7rem;vertical-align: -0.15rem;width:1.4rem;height:1.4rem;background:url("${icoComment}");background-size:1.4rem;}
      }
    }
  `,
}

export const ReviewDetailSection = {
  ListFrame:styled.div`
    .review_wrap{background:#ffffff; padding:1.2rem 2.3rem;margin:4.7rem 0 5.8rem;
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
      .hashtag_wrap{width:100%; height: 2.7rem;margin:1.4rem 0 2rem; overflow-x: scroll;
        .overBox{width:max-content;height:2.5rem;}
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
  WriteForm:styled.form`
    .write_wrap{background:#ffffff;padding:1.4rem 2.1rem;margin:4.9rem 0 0rem;
      p{margin:0 0 1rem 1rem;font-size:1.4rem;color:#959292;}
      .line{display:inline-block;width:100%;margin:1rem 0 1rem;height:0.2rem; background:rgba(237, 237, 237, 0.5);}
      .place_sel{width:100%;
        .select{padding:0.5rem 3.4rem;border: 1px solid #959292;border-radius: 30px;margin-right: 0.6rem;color: #959292;font-size: 1.6rem;
          &.active {border-color:#6556FF;color:#6556FF;}
        }
        .mg{margin:1.8rem 0 1.8rem;}
      }
      input {width:100%;
      padding:0.8rem 1.4rem; font-size:1.4rem; border-radius:0.5rem; border:0.1rem solid #EBEBEB; outline:none;
        ::placeholder {color:#a9a9a9;}
      }
      .search_box{height:3.4rem;margin-right:0.6rem;padding-left: 1.4rem;display: flex;align-items: center;flex-basis: 73%;border-radius: 0.5rem;background: rgba(237, 237, 237, 0.5);
        input[type="text"] {width:${props=>props.width};background: transparent;padding:0 0 0 1rem; margin-top:-0.1rem;font-size:1.2rem;border:none; outline:none;
        ::placeholder {font-weight:lighter; color:#959292;}
        }
        &.disabled{background:#fff}
      }
      .star_wrap{margin:1.5rem 0 0.7rem;width: 100%;
        .star{margin-right:0.88rem;}
        .mt{margin-top:1.3rem;}
        p{margin:0}
      }
      
      .review_txt{min-height:13.8rem;margin:0.8rem 0 1.5rem; width:100%;resize:none;padding:1rem 1.4rem; font-size:1.4rem; border-radius:0.5rem; border:0.1rem solid #EBEBEB; outline:none;
        ::placeholder{color:#D0CFCF;}
      }
      .tag_wrap{display:flex;.input_box{padding-left:1.4rem;display:flex; align-items:center; flex-basis:85%; border-radius:0.5rem; border:0.1rem solid #EBEBEB;margin-right:0.6rem;input[type="text"] {width:${props=>props.width}; padding:0 0 0 1rem; margin-top:-0.1rem;font-size:1.4rem; border-radius:3rem 0 0 3rem; border:none; outline:none;
        ::placeholder {font-weight:lighter; color:#D0CFCF;}
        }}
      }
      .hashtag_wrap{width:100%; height: 2.7rem;margin:1.4rem 0 2rem; overflow-x: scroll;
        .overBox{width:max-content;height:2.5rem;}
        .hashtag{position: relative;font-size:1.4rem;margin:0 0.8rem 0.1rem 0;display:inline-block; padding:0.3rem 0.8rem 0.3rem 3rem;border-radius:5rem;border:1px solid #EDEDED; background:#fff;color:#959292;}
        .hashtag::before{position: absolute;left: 0.8rem;top: 0.5rem;display: inline-block;content:""; width:1.6rem; height:1.6rem; background:url("${images.welcomeLogo}");background-size:1.6rem;
        }
        &::-webkit-scrollbar-thumb{background:transparent;height:0;}
      }
      .pic_wrap{height:7.5rem;margin-bottom:4.6rem;display: flex;justify-self: flex-start;
        .pic_add{width:7.5rem;height:7.5rem;border-radius:0.5rem;border:1px solid #D0CFCF;}
        p{font-size:1.2rem;margin:0.2rem 0 0 0;color:#D0CFCF;}
        .review_img{position:relative;
          width:7.5rem;height:7.5rem;border-radius:0.5rem;background:#a9a9a9;margin-left:1rem;
          img{width:7.5rem;height:7.5rem;border-radius:0.5rem;object-fit: cover;}
          .btn_close{position:absolute;right: 0.3rem;top:0.3rem;
            img{width:1.8rem;height:1.8rem;}
          }
        }
      }
    }
  `,

  PlaceSearch:styled.div`
    .search_header{
      display:flex; align-items:center; width:100%; height:4.7rem;top:0; left:0; padding:1rem 2rem; background:#ffffff;
      .history_back {flex-basis:2.4rem;margin-top:0.5rem;}
      .tit {flex-basis:calc(100% - 2.4rem); margin-right:2.4rem;}
    }
    .search_box{height:3.4rem;margin: 0.8rem 1.65rem;padding-left: 1.4rem;display: flex;align-items: center;flex-basis: 85%;border-radius: 0.5rem;background: rgba(237, 237, 237, 0.5);
      input[type="text"] {width:${props=>props.width};background: transparent;
      padding:0 0 0 1rem; margin-top:-0.1rem;font-size:1.2rem;border:none; outline:none;
      ::placeholder {font-weight:lighter; color:#959292;}
      }
      label{
        img{width:1.42rem;}
      }
      .btn_close{width:3.5rem;}
    }
    .search_list{
      li{height:8.5rem;width:100%;padding:2rem;text-align: left;border-top: 1px solid #EDEDED;
        :last-child{border-bottom: 1px solid #EDEDED;}
        &.active{background: rgba(237, 237, 237, 0.5);}
        .name{font-size:1.6rem;color:#3A3A3A;}
        .address{margin-top:0.4rem;font-size:1.4rem;color:#959292;}
      }
    }
  `,
  
}