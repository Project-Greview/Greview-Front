import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { setMyPageTabState } from "../../states/tabMenuState";

import { Common } from "../../resources/style/common/commonStyle";
import { MyPageSection } from "../../components/mypage/style/mypageStyle";

import ProfileImage from "../../components/mypage/view/ProfileIImage";
import MyPageActivityList from "./MyPageActivityList";

const MyPageMain = () => {
  const navigate = useNavigate();

  const setTabMenuValue = useSetRecoilState(setMyPageTabState);

  const tabIndex = useRecoilState(setMyPageTabState);


  console.log("탭메뉴 index", tabIndex);
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
          <li className="active">리뷰</li>
          <li>댓글</li>
          <li>좋아요</li>
        </ul>
      </MyPageSection.MyPageHeader>

      <MyPageActivityList/>
    </>
  );
};

export default MyPageMain;
