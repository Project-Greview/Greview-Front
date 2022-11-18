import styled from "styled-components";

export const MyPageSerction = {
  MyPageFrame: styled.div`
    padding:0 2.4rem; margin-top: 5rem;
    .setting_menu {flex-basis:100%;
      li {flex-basis:100%; border-bottom:1px solid #EDEDED;}
    } 
  `,
  MyPageHeader: styled.div`
    display: flex; align-items: center; flex-flow: wrap;
    .profile_img { flex-basis: 8rem; max-width: 8rem; height: 8rem; border-radius: 50%; border: 1px solid #ededed;
      img {width: 5.5rem;}
    }
    .user_info {
      .user_nickname {font-size: 2rem; font-weight: 600; color: #3a3a3a;}
      .act_position {font-size: 1.4rem; font-weight: 500; color: #959292;}
    }
    button {flex-basis: 100%; margin-top:1.7rem;}
  `,
  
};
