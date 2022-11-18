import { useNavigate } from "react-router-dom";

import images from "../../../resources/img/img";
import { Common } from "../../../resources/style/common/commonStyle";
import { MyPageSerction } from "../style/mypageStyle";

const MyPageMain = () => {
  const navigate = useNavigate();
  return (
    <MyPageSerction.MyPageHeader>
      <div className="profile_img img_box flex flex_jc_c flex_ai_c">
        <img src={images.marker_c} alt="사용자 프로필" />
      </div>
      <div className="user_info flex flex_dir_c">
        <p className="user_nickname">User NickName</p>
        <div className="act_position">User Default Position</div>
      </div>
      <Common.Button onClick={() => {navigate("/mypage/modify", {state: {tit:"프로필 수정",value:5}})}}>프로필 수정</Common.Button>
      <ul className="tab_menubox flex flex_ai_c">
        <li className="active">리뷰</li>
        <li>댓글</li>
        <li>좋아요</li>
      </ul>
    </MyPageSerction.MyPageHeader>
  );
};

export default MyPageMain;
