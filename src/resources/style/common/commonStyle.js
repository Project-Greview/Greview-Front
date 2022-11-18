import styled from "styled-components";

export const Common = {
  Frame:styled.div`

  // responsive 
  @media screen and (max-width:550px) {
  }
  @media screen and (max-width:414px) {
  }

  @media screen and (max-width:414px) {
  }
  `,
  Input:styled.div`
    width:100%;
      &.login_id {margin-bottom:1.5rem;}
      &.login_pw {margin-bottom:2.5rem;}
      input[type="text"],input[type="password"],input[type="tel"] {width:${props => props.width}; padding:1.3rem 2rem; font-size:1.6rem; border-radius:0.5rem; border:0.1rem solid #EBEBEB; outline:none;
        ::placeholder {color:#a9a9a9;}
      }
  `,
  SearchInput:styled.div`
    display:flex; align-items:center; flex-basis:85%; border-radius:3rem; border:0.2rem solid #f4f4f4;
    input[type="text"] {width:${props=>props.width}; padding:0.5rem 0rem; font-size:1.6rem; border-radius:3rem 0 0 3rem; border:none; outline:none;
    ::placeholder {font-weight:lighter; color:#eae9e9;}
  }
  `,
  ButtonDiv:styled.div`
    display:flex; justify-content:center; align-items:center; max-width:${props => props.width}; width:${props => props.width}; height:5rem; background:#6656ff; border-radius:0.5rem; color:#ffffff;
    // width:33.5rem;
    // max-width:86%; width:86%;
  `,
  Button:styled.button`
    display:flex; justify-content:center; align-items:center; max-width:${props => props.width}; width:${props => props.width}; height:5rem; background:#6656ff; border-radius:0.5rem; color:#ffffff;
    // width:33.5rem; 
    // max-width:86%; width:86%;
    :disabled{background:#959292;}
    &.disabled{background:#959292;}
  `,
  Reveiw:styled.div`
  padding:1.6rem 2rem;
  background-color:#F8F8F8;
  `,
  PopSlideFull:styled.div`
    .pop_wrap{position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 99;overflow: hidden;background: rgba(0, 0, 0, 0.6);transition: all 0.4s ease-in-out;
      transform-origin: 0 100%;
      .pop_cnt{width: 100%;height: 100%;margin-top: 6.6rem;background: #fff;border-radius: 30px 30px 0px 0px;text-align: center;
        top:100%;
        .line{display: inline-block;width: 6.9rem;height: 0.4rem;margin: 1.1rem auto;background: #959292;border-radius: 3rem;
        }
      }
    }
    .hide{transform:translateY(100%)}
    @keyframes slideDown {
      0%{transform:translateY(100%)}
      100%{transform:translateY(0)}
    }
  `,
}