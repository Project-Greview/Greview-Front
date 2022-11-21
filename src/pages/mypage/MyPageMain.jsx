import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { setMyPageTabState } from "../../states/tabMenuState";

import { Common } from "../../resources/style/common/commonStyle";
import { MyPageSection } from "../../components/mypage/style/mypageStyle";

import ProfileImage from "../../components/mypage/view/ProfileIImage";
import MyPageActivityList from "./MyPageActivityList";
import { useMemo } from "react";

const MyPageMain = () => {
  const navigate = useNavigate(); 

  const setTabMenuValue = useSetRecoilState(setMyPageTabState);

  const tabIndex = useRecoilState(setMyPageTabState);

  const onToggleTabMenu = (e) => {
    const indexNum = e.currentTarget.getAttribute('data-tabindex');
    setTabMenuValue(indexNum);
  };
  
  useEffect(() => {
  },[]);

  return (
    <>
      <MyPageSection.MyPageHeader>
        <ProfileImage/>
        <div className="user_info flex flex_dir_c">
          <p className="user_nickname">User NickName</p>
          <div className="act_position">User Default Position</div>
        </div>
        <Common.Button 
          onClick={
            () => {navigate(
              "/mypage/modify",
              {state: {
                value:7,
                tit:"프로필 수정",
                naviView: false
              }}
            )
          }
        }>프로필 수정</Common.Button>
        <ul className="tab_menubox flex flex_ai_c">
          <li className={tabIndex[0] === "1" ? "active" : ""} data-tabindex="1" onClick={onToggleTabMenu}>리뷰</li>
          <li className={tabIndex[0] === "2" ? "active" : ""} data-tabindex="2" onClick={onToggleTabMenu}>댓글</li>
          <li className={tabIndex[0] === "3" ? "active" : ""} data-tabindex="3" onClick={onToggleTabMenu}>좋아요</li>
        </ul>
      </MyPageSection.MyPageHeader>

      <MyPageActivityList/>
    </>
  );
};

export default MyPageMain;
