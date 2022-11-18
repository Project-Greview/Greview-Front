import images from "../../../resources/img/img";
import { Common } from "../../../resources/style/common/commonStyle";
import { MyPageSerction } from "../style/mypageStyle";

const MyPageMain = () => {
  return (
    <MyPageSerction.MyPageHeader>
      <div className="profile_img img_box flex flex_jc_c flex_ai_c">
        <img src={images.marker_c} alt="사용자 프로필" />
      </div>
      <div className="user_info flex flex_dir_c">
        <p className="user_nickname">User NickName</p>
        <div className="act_position">User Default Position</div>
      </div>
      <Common.Button>프로필 수정</Common.Button>
    </MyPageSerction.MyPageHeader>
  );
};

export default MyPageMain;
